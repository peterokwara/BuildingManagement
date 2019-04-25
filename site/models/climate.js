const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ClimateSchema = new Schema({
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
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

module.exports = DhtSensor = mongoose.model("Climate", ClimateSchema);
