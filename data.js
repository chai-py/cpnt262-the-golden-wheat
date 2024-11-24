const mongoose = require("mongoose");
const Product = require("./models/productsmodel");
require("dotenv").config();

const seedData = [
  {
    name: "Product 1",
    category: "Category 1",
    description: "Description for Product 1",
    ingredients: "Ingredient 1, Ingredient 2",
    imageUrl: "http://example.com/image1.jpg",
    price: 10.99,
  },
  {
    name: "Product 2",
    category: "Category 2",
    description: "Description for Product 2",
    ingredients: "Ingredient A, Ingredient B",
    imageUrl: "http://example.com/image2.jpg",
    price: 15.49,
  },
  {
    name: "Product 3",
    category: "Category 3",
    description: "Description for Product 3",
    ingredients: "Ingredient X, Ingredient Y",
    imageUrl: "http://example.com/image3.jpg",
    price: 8.99,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

    // Clear the collection
    await Product.deleteMany();
    console.log("Products collection cleared");

    // Insert seed data
    await Product.insertMany(seedData);
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