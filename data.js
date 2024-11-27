const mongoose = require("mongoose");
const Order = require("./models/orderModel");
require("dotenv").config();

const seedData = [
  {
    "user": "60c72b2f9e1b8b001c8a1f28", // Replace with a valid User ObjectId
    "products": [
      {
        "product": "60c72b2f9e1b8b001c8a1f30", // Replace with a valid Product ObjectId
        "quantity": 2
      },
      {
        "product": "60c72b2f9e1b8b001c8a1f31", // Replace with another valid Product ObjectId
        "quantity": 1
      }
    ],
    "totalAmount": 150,
    "status": "Pending", // Could be 'Pending', 'Processing', 'Shipped', or 'Delivered'
  },
//   {
//     name: "Rye Bread",
//     category: "Category 2",
//     description: "Description for Product 2",
//     ingredients: "Ingredient A, Ingredient B",
//     imageUrl: "http://example.com/image2.jpg",
//     price: 15.49,
//   },
//   {
//     name: "Multigrain Bread",
//     category: "Category 3",
//     description: "Description for Product 3",
//     ingredients: "Ingredient X, Ingredient Y",
//     imageUrl: "http://example.com/image3.jpg",
//     price: 8.99,
//   },
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
    process.exit(1); // Exit with failure
  }
};

seedDatabase();