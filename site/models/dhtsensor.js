const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DhtSensorSchema = new Schema({
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
    required: true
  }
});

module.exports = DhtSensor = mongoose.model("DhtSensor", DhtSensorSchema);
