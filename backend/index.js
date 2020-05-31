const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//PORT stored in .env
const PORT = process.env.PORT || 4000;

app.use(cors());
//Allow passing of json files
app.use(express.json());

//uri stored in .env
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("Connection with MongoDB was successful");
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
