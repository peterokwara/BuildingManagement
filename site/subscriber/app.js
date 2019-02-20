// Import required modules
const mqtt = require("mqtt");
const axios = require("axios");

// Get the url for our broker and from the server
const broker = require("../config/broker").brokerUrl;
const server = require("../config/server").serverUrl;

// get topics to subscribe to
const climate_data = require("../config/topics").climateData;
const motion_data = require("../config/topics").motionSensor;

// Connect to the broker
const client = mqtt.connect(broker);

// Subscribe to topics
client.on("connect", function() {
  // client.subscribe(motion_data);
  // console.log("client has subscribed successfully to " + motion_data);
  client.subscribe("building/room/climate");
  console.log("client has subscribed successfully to " + climate_data);
});

// When message comes in
client.on("message", function(topic, message) {
  switch (topic.toString()) {
    case climate_data:
      var data = {
        temperature: JSON.parse(message).temperature,
        humidity: JSON.parse(message).humidity,
        date: Date.now()
      };
      console.log(data);
      axios
        .post(server + "/api/dhtsensor", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      return;
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
