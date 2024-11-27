const express = require("express");
const router = express.Router();
const userAuthController = require('../controllers/userAuthController');
const { authenticateToken } = require("../middleware/AuthToken");
const { validateUserInput } = require("../middleware/validateUserInput");

// Register a new user
router.post("/register", userAuthController.registerUser);

// Login a user
router.post("/login", validateUserInput, userAuthController.loginUser);

// Get user profile (protected route)
router.get("/profile", authenticateToken, userAuthController.getUserProfile);

module.exports = router;