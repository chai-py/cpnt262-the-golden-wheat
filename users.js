const mongoose = require("mongoose");
const User = require("./models/userAuthModel"); // Import the user model
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
const createTestUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    console.log(`${userData.username} created successfully!`);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
};
const createMultipleUsers = () => {
  const users = [
    {
      name: "Chaital123",
      email: "chai1@goldenbakery.ca",
      password: "password1234",
    },
    // {
    //     name: "Aashita123",
    //     email: "ash@goldenbakery.ca",
    //     password: "password1234",
    //   },
    //   {
    //     name: "Ethan123",
    //     email: "ethan@goldenbakery.ca",
    //     password: "password1234",
    //   },
    //   {
    //     name: "Shiela123",
    //     email: "shiela@goldenbakery.ca",
    //     password: "password1234",
    //   },
    //   {
    //     name: "Moksham123",
    //     email: "mo@goldenbakery.ca",
    //     password: "password1234",
    //   }
  ];
  users.forEach((user) => createTestUser(user));
};
createMultipleUsers();