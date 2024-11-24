const express = require('express');
const router = express.Router();
const User = require('../models/userAuthModel');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login a user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password }); // Simplified (use hashed passwords in production)
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;