const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
app.use(cors());

mongoose.connect(
  "mongodb+srv://jay:!HOz8o7Hkx4N@shopple-8dmxr.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("Connection with MongoDB was successful");
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
