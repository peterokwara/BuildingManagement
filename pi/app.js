const mqtt = require("mqtt");
const mongoose = require("mongoose");

// client configuration
const broker = require("./config/broker").brokerUrl;

// connect to the broker
const client = mqtt.connect(broker);

// db configuration
const db = require("./config/mongodb").mongoUri;

// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

client.on("connect", function() {
  client.subscribe("pir_state");
  console.log("client has subscribed successfully");
});

client.on("message", function(topic, message) {
  console.log(message.toString()); //if toString is not given, the message come$
  console.log("message is " + message.toString());
  console.log("topic is " + topic.toString());
});
