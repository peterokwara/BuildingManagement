const express = require("express");
const router = express.Router();

const MotionSensor = require("../../models/motionsensor");

// @route   POST api/pir
// @desc    Create sensor data from pir motion sensor
// @access  Public
router.post("/", (req, res) => {
  const newMotionSensor = new MotionSensor({
    sensor1: req.body.sensor1,
    sensor2: req.body.sensor2
  });
  newMotionSensor.save().then(MotionSensor => res.json(MotionSensor));
});

module.exports = router;
