const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db configuration
const db = require("./config/config").mongoUri;

// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

// use routes
app.use("/api/users", users);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
