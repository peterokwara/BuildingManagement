const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

const users = require("./routes/api/users");
const occupancy = require("./routes/api/occupancy");
const climate = require("./routes/api/climate");
const rooms = require("./routes/api/room");
const power = require("./routes/api/power");
const devices = require("./routes/api/devices");

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// db configuration
const db = require("./config/keys").mongoUri;

// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const port = 5000;

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// use routes
app.use("/api/users", users);
app.use("/api/occupancy", occupancy);
app.use("/api/climate", climate);
app.use("/api/rooms", rooms);
app.use("/api/power", power);
app.use("/api/devices", devices);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // set up static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
