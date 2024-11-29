const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const compression = require('compression');

const app = express();
const port = process.env.PORT || 4000;

// // Enable CORS
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Allow requests from this origin
//     methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
//     credentials: true, // Allow cookies if needed
//   })
// );
app.use(compression()); // Enable compression middleware

// Allow all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 30000 })
  .then(() => console.log("MongoDB connection successful"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Import product routes
const productRoutes = require("./routes/productsroute");
const orderRoutes = require("./routes/orderRoute");
const userAuthRoutes = require("./routes/userAuthRoute");

// Use product routes
app.use("/products", productRoutes);
app.use("/order", orderRoutes);
app.use("/user", userAuthRoutes);

// Import middleware
const { errorHandler } = require("./middleware/errorHandler");

app.get("/", (req, res) => {
  res.send("Welcome to th Node.js Server!");
});

// Global error handling middleware (last middleware)
// app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
