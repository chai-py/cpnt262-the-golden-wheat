const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { getAllorders } = require("../controllers/orderController");
// Route for creating a new order
router.post("/", orderController.createOrder);

// Route for getting all orders
router.get("/", orderController.getAllOrders);

// Route for getting orders by user
router.get("/:userId", orderController.getOrdersByUser);

module.exports = router;
