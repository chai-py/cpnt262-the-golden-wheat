const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {serverSelectionTimeoutMS: 30000})
  .then(() => console.log("MongoDB connection successful"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Import product routes
const productRoutes = require("./routes/productsroute");
const orderRoutes = require("./routes/orderRoute");
const userAuthRoutes = require("./routes/userAuthRoute");

// Use product routes
app.use("/products", productRoutes);
app.use("/orderRoute", orderRoutes);
app.use("/userAuthRoute", userAuthRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
