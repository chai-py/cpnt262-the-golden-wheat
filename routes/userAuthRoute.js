const express = require("express");
const router = express.Router();
const userAuthController = require("../controllers/userAuthController");
const { protectToken } = require("../middleware/AuthToken");

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

// Get user profile
router.get("/profile", protectToken, userAuthController.getUserProfile);

router.get("/", protectToken, getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
