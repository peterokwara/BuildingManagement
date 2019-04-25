const express = require("express");
const router = express.Router();

const Room = require("../../models/room");

// @route   POST api/room
// @desc    Create room
// @access  Public
router.post("/", (req, res) => {
  const newRoom = new Room({
    room_name: req.body.room_name,
    room_description: req.body.room_description,
    priviledge_level: req.body.priviledge_level,
    date: req.body.date
  });
  newRoom.save().then(Room => res.json(Room));
});

// @route   GET api/room/all
// @desc    Return all the room data
// @access  Public
router.get("/all", (req, res) => {
  Room.find()
    .sort({ date: -1 })
    .then(roomdata => res.json(roomdata));
});

module.exports = router;
