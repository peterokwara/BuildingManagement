const express = require("express");
const router = express.Router();

const Power = require("../../models/power");

// @route   POST api/power
// @desc    Create data on power consupmtion and current consumption
// @access  Public
router.post("/", (req, res) => {
  const newPower = new Power({
    room_id: req.body.room_id,
    power: req.body.power,
    current: req.body.current
  });
  newPower.save().then(Power => res.json(Power));
});

// @route   GET api/power/all
// @desc    Return all motion sensor data
// @access  Public
router.get("/all", (req, res) => {
  Power.find()
    .sort({ date: -1 })
    .then(Powerdata => res.json(Powerdata));
  // console.log(req.Power.sensor1);
});

module.exports = router;
