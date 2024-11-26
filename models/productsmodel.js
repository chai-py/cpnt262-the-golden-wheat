const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    imageUrl: { type: String },
    price: { type: Number },
    inventory: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
