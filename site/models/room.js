const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoomSchema = new Schema({
  room_name: {
    type: String,
    required: true
  },
  room_description: {
    type: String,
    required: true
  },
  priviledge_level: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Room = mongoose.model("Room", RoomSchema);
