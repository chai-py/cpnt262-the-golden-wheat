const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();     

const app = express()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection successful"))
  .catch((error) => console.error("MongoDB connection error:", error));
