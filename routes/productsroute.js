const express = require("express");
const Product = require("../models/productsmodel");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Get a product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Create a new product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(400).send("Bad Request: " + error.message);
  }
});

// Update a product by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(400).send("Bad Request: " + error.message);
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.send("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
