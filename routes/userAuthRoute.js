const express = require("express");
const router = express.Router();
const userAuthController = require('../controllers/userAuthController');
const { protectToken } = require("../middleware/AuthToken");
// const { validateUserInput } = require("../middleware/validateUserInput");

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
  } = require("../controllers/userAuthController");

// Register a new user
router.post("/register", userAuthController.registerUser);

// Login a user
router.post("/login", userAuthController.loginUser);

// Get user profile (protected route)
router.get("/profile", protectToken, userAuthController.getUserProfile);


  
  router.get("/",protectToken, getAllUsers); // Protect the route for fetching all users
  router.post("/", createUser); // Don't protect this route (public access)
  router.get("/:id", getUserById); // Protect the route for fetching a user by ID
  router.put("/:id", updateUser); // Protect the route for updating a user
  router.delete("/:id", deleteUser); // Protect the route for deleting a user

module.exports = router;

