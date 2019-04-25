const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PowerSchema = new Schema({
  room_id: {
    type: String,
    required: true
  },
  power: {
    type: Number,
    required: true
  },
  current: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Occupancy = mongoose.model("Power", PowerSchema);
