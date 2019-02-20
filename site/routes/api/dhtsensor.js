const express = require("express");
const router = express.Router();

const DhtSensor = require("../../models/dhtsensor");

// @route   POST api/dhtsensor
// @desc    Create sensor data from dht sensor
// @access  Public
router.post("/", (req, res) => {
  const newDhtSensor = new DhtSensor({
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    date: req.body.date
  });

  newDhtSensor.save().then(DhtSensor => res.json(DhtSensor));
});

// @route   GET api/dhtsensor/all
// @desc    Return all motion sensor data
// @access  Public
router.get("/all", (req, res) => {
  DhtSensor.find()
    .sort({ date: -1 })
    .then(dhtdata => res.json(dhtdata));
});

module.exports = router;
