// Peter Okwara
// F17/36211/2013

// This piece of code performs automation (if temperature is above 30 degrees turn on fan
// else turn off fan) and (if occupancy is below 0 turn off bulb, if it is above 0 turn on
// bulb) and also relays all incoming information to a database

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
// subscribe to relay for the fan
client.on("connect", function() {
  client.subscribe("building/room/relay/fan");
  console.log("client has subscribed successfully");
});
// subscribe to relay for the bulb
client.on("connect", function() {
  client.subscribe("building/room/relay/bulb");
  console.log("client has subscribed successfully");
});

// subscribe to room occupancy
client.on("connect", function() {
  client.subscribe("building/room/occupancy");
  console.log("client has subscribed successfully");
});

client.on("message", function(topic, message) {
  console.log("message is " + message.toString());
  console.log("topic is " + topic.toString());
  switch (topic.toString()) {
    
    // when we receive information on climate in the room
    case "building/room/climate":

      // check if temperature is above 30, if it is turn on fan, if it is not turn off fan
      if (JSON.parse(message).temperature > 30) {
        client.publish("building/room/relay/fan", "on");
      } else {
        client.publish("building/room/relay/fan", "off");
      }

      // format the climate data into a json format and post it to a database
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

    // when we receive information about power in the room
    case "building/room/power":

      // format the data into a json format and then post it to an online database
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

    // when we receive information on room occupancy
    case "building/room/occupancy":

      // if room occupancy is less than zero, turn off the bulb. if it is not turn on 
      // the bulb
      if (JSON.parse(message).occupancy <= 0) {
        client.publish("building/room/relay/bulb", "off");
      } else {
        client.publish("building/room/relay/bulb", "on");
      }

      // put the occupancy data into a json format and post it to an online database
      var data = {
        occupancy: JSON.parse(message).occupancy,
        room_id: "1"
      };
      axios
        .post(server + "/api/occupancy", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      return;
    // when we receive information about the fan
    case "building/room/relay/fan":
      let fan_state = message;

      // if fan state is on, publish on the database that the fan state is on
      // if fan state is off, publish on the database that the fan state is off
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
    // when we receive information about the bulb
    case "building/room/relay/bulb":
      let bulb_state = message;

      // if bulb state is on, publish on the database that the fan state is on
      // if bulb state is off, publish on the database that the fan state is off
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
});
