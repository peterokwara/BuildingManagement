const mqtt = require("mqtt");
const axios = require("axios");

// client configuration
const broker = require("./config/broker").brokerUrl;

// connect to the broker
const client = mqtt.connect(broker);

// server configuration
const server = require("./config/server").serverUrl;

client.on("connect", function() {
  client.subscribe("pir_state");
  console.log("client has subscribed successfully");
});

client.on("message", function(topic, message) {
  console.log("message is " + message.toString());
  console.log("topic is " + topic.toString());
  switch (message.toString()) {
    case "pir1on":
      var data = { sensor1: 1, sensor2: 0 };
      axios
        .post(server + "/api/pir", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      console.log(server + "/api/pir");
    case "pir2on":
      var data = { sensor1: 0, sensor2: 1 };
      axios
        .post(server + "/api/pir", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    default:
      break;
  }
});
