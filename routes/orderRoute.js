const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { user, products, totalAmount } = req.body;
    const order = await Order.create({ user, products, totalAmount });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get orders by user
router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;