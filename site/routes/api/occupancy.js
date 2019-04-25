const express = require("express");
const router = express.Router();

const Occupancy = require("../../models/occupancy");

// @route   POST api/occupancy
// @desc    Create sensor data from pir motion sensor
// @access  Public
router.post("/", (req, res) => {
  const newOccupancy = new Occupancy({
    room_id: req.body.room_id,
    occupancy: req.body.occupancy
  });
  newOccupancy.save().then(Occupancy => res.json(Occupancy));
});

// @route   GET api/occupancy/all
// @desc    Return all motion sensor data
// @access  Public
router.get("/all", (req, res) => {
  Occupancy.find()
    .sort({ date: -1 })
    .then(occupancydata => res.json(occupancydata));
  // console.log(req.Occupancy.sensor1);
});

module.exports = router;
