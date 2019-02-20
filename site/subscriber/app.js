// Import required modules
const mqtt = require("mqtt");
const axios = require("axios");

// Get the url for our broker and from the server
const broker = require("../config/broker").brokerUrl;
const server = require("../config/server").serverUrl;

// get topics to subscribe to
const climate_data = require("../config/publishers").dhtSensor;
const motion_data = require("../config/publishers").motionSensor;

// Connect to the broker
const client = mqtt.connect(broker);

// Subscribe to topics
client.on("connect", function() {
  client.subscribe(motion_data);
  console.log("client has subscribed successfully to " + motion_data);
  client.subscribe(climate_data);
  console.log("client has subscribed successfully to " + climate_data);
});

// When message comes in
client.on("message", function(topic, message) {
  message = message.toString();
  switch (topic.toString()) {
    case "building/room/temp":
      var temperature = Object(message).temperature;
      console.log(message.toString());
      console.log(temperature);
      return console.log("hello there!" + JSON.stringify(temperature));
    case "motion_data":
      return console.log("hello there! a" + message);
    default:
      break;
  }
  // console.log("message is " + message.toString());
  // console.log("topic is " + topic.toString());
  // switch (message.toString()) {
  //   case "pir1on":
  //     var data = { sensor1: 1, sensor2: 0 };
  //     axios
  //       .post(server + "/api/pir", data)
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //     console.log(server + "/api/pir");
  //   case "pir2on":
  //     var data = { sensor1: 0, sensor2: 1 };
  //     axios
  //       .post(server + "/api/pir", data)
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //   default:
  //     break;
});
