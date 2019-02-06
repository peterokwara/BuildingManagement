const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db configuration
const db = require("./config/keys").mongoUri;

// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const port = 3000;

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// use routes
app.use("/api/users", users);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
