const mongoose = require("mongoose");
const Order = require("./models/orderModel");
require("dotenv").config();

const seedData = [
  {
    user: "60c72b2f9e1b8b001c8a1f28",
    products: [
      {
        product: "60c72b2f9e1b8b001c8a1f30",
        quantity: 2,
        price: 2.99,
      },
      {
        product: "60c72b2f9e1b8b001c8a1f31",
        quantity: 1,
        price: 3.99,
      },
    ],
    totalAmount: 150,
    status: "Pending", // Could be 'Pending', 'Processing', 'Shipped', or 'Delivered'
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

    // Clear the collection
    await Order.deleteMany();
    console.log("Products collection cleared");

    // Insert seed data
    await Order.insertMany(seedData);
    console.log("Seed data inserted successfully");

    // Close the connection
    mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding database:", error.message);
    process.exit(1);
  }
};

seedDatabase();
