const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  sensor1: {
    type: Number,
    required: true
  },
  sensor2: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Pir = mongoose.model("Pir", UserSchema);
