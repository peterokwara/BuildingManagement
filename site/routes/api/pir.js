const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Pir = require("../../models/pir");

router.get("/test", (req, res) => res.json({ msg: "post works!" }));

// @route   POST api/pir
// @desc    Create sensor data from pir motion sensor
// @access  Public
router.post("/", (req, res) => {
  const newPir = new Pir({
    sensor1: req.body.sensor1,
    sensor2: req.body.sensor2
  });
  newPir.save().then(Pir => res.json(Pir));
});

module.exports = router;
