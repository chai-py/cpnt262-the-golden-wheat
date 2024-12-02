const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// Get all products
router.get("/", productsController.getAllProducts);

// Get a product by ID
router.get("/:id", productsController.getProductById);

// Create a new product
router.post("/", productsController.createProduct);

// Update a product by ID
router.put("/:id", productsController.updateProduct);

// Delete a product by ID
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
