const express = require("express");
const router = express.Router();

const Devices = require("../../models/devices");

// @route   POST api/devices
// @desc    Create data on devices state
// @access  Public
router.post("/", (req, res) => {
  const newDevices = new Devices({
    fan_state: req.body.fan_state,
    bulb_state: req.body.bulb_state,
    room_id: req.body.room_id
  });
  newDevices.save().then(Devices => res.json(Devices));
});

// @route   GET api/devices/all
// @desc    Return all devices data
// @access  Public
router.get("/all", (req, res) => {
  Devices.find()
    .sort({ date: -1 })
    .then(devicesdata => res.json(devicesdata));
});

module.exports = router;
