const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DevicesSchema = new Schema({
  fan_state: {
    type: Number,
    required: true
  },
  bulb_state: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  room_id: {
    type: String,
    required: true
  }
});

module.exports = DhtSensor = mongoose.model("Devices", DevicesSchema);
