const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OccupancySchema = new Schema({
  room_id: {
    type: String,
    required: true
  },
  occupancy: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Occupancy = mongoose.model("Occupancy", OccupancySchema);
