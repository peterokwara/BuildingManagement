const mqtt = require("mqtt");
const axios = require("axios");

// client configuration
const broker = require("./config/broker").brokerUrl;

// connect to the broker
const client = mqtt.connect(broker);

// server configuration
const server = require("./config/server").serverUrl;

let fan = "0";
let bulb = "0";

// subscribe to climate
client.on("connect", function() {
  client.subscribe("building/room/climate");
  console.log("client has subscribed successfully");
});

// subscribe to power info
client.on("connect", function() {
  client.subscribe("building/room/power");
  console.log("client has subscribed successfully");
});
// subscribe to power info
client.on("connect", function() {
  client.subscribe("building/room/relay/fan");
  console.log("client has subscribed successfully");
});
// subscribe to power info
client.on("connect", function() {
  client.subscribe("building/room/relay/bulb");
  console.log("client has subscribed successfully");
});

client.on("message", function(topic, message) {
  console.log("message is " + message.toString());
  console.log("topic is " + topic.toString());
  switch (topic.toString()) {
    case "building/room/climate":
      var data = {
        temperature: JSON.parse(message).temperature,
        humidity: JSON.parse(message).humidity,
        date: Date.now(),
        room_id: "1"
      };
      axios
        .post(server + "/api/climate", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      return;
    case "building/room/power":
      var data = {
        power: JSON.parse(message).power,
        current: JSON.parse(message).current,
        date: Date.now(),
        room_id: "1"
      };
      axios
        .post(server + "/api/power", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      return;
    case "building/room/occupancy":
      var data = {
        occupancy: JSON.parse(message).occupancy,
        room_id: "1"
      };
      axios
        .post(server + "/api/occupancy", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      return;
    case "building/room/relay/fan":
      let fan_state = message;
      if (fan_state == "on") {
        fan = "1";
        var data = {
          fan_state: fan,
          bulb_state: bulb,
          room_id: "1"
        };
        axios
          .post(server + "/api/devices", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      } else if (fan_state == "off") {
        fan = "0";
        var data = {
          fan_state: fan,
          bulb_state: bulb,
          room_id: "1"
        };
        axios
          .post(server + "/api/devices", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
      return;
    case "building/room/relay/bulb":
      let bulb_state = message;
      if (bulb_state == "on") {
        bulb = "1";
        var data = {
          fan_state: fan,
          bulb_state: bulb,
          room_id: "1"
        };
        axios
          .post(server + "/api/devices", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      } else if (bulb_state == "off") {
        bulb = "0";
        var data = {
          fan_state: fan,
          bulb_state: bulb,
          room_id: "1"
        };
        axios
          .post(server + "/api/devices", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
      return;
    default:
      break;
  }
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
