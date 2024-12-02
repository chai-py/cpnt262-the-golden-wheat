const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    category: { type: String },
    description: { type: String },
    ingredients: { type: String },
    imageUrl: { type: String },
    price: { type: Number },
    inventory: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
