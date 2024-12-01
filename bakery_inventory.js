const express = require("express");
const mongoose = require("mongoose");
const Inventory = require("./models/productsmodel");
require("dotenv").config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const addInventory = async () => {
  const inventoryData = {
    bread: [
      {
        name: "Sourdough",
        category: "Bread",
        description: "Tangy, chewy bread with a crisp crust",
        ingredients: "Flour, Water, Sourdough starter, Salt",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/sourdough-bread.jpg",
        price: 5.0,
        inventory: 20,
      },
      {
        name: "Whole Wheat",
        category: "Bread",
        description: "Hearty bread with a nutty flavor",
        ingredients: "Whole wheat flour, Water, Honey, Yeast, Salt",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/whole-wheat-bread.jpg",
        price: 4.5,
        inventory: 48,
      },
      {
        name: "Baguette",
        category: "Bread",
        description: "Classic French bread with a crisp crust",
        ingredients: "Flour, Water, Yeast, Salt",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/baguette.jpg",
        price: 3.0,
        inventory: 20,
      },
      {
        name: "Ciabatta",
        category: "Bread",
        description: "Italian bread with a light, airy texture",
        ingredients: "Flour, Water, Yeast, Olive oil, Salt",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/ciabatta.jpg",
        price: 4.0,
        inventory: 36,
      },
      {
        name: "Rye Bread",
        category: "Bread",
        description: "Dense, flavorful bread with a dark crust",
        ingredients:
          "Rye flour, Bread flour, Water, Molasses, Caraway seeds, Yeast, Salt",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/rye-bread.jpg",
        price: 5.5,
        inventory: 20,
      },
      {
        name: "Multigrain Bread",
        category: "Bread",
        description: "Hearty bread with a variety of grains",
        ingredients:
          "Whole wheat flour, Oats, Flax seeds, Sunflower seeds, Water, Honey, Yeast, Salt",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/multigrain.jpg",
        price: 5.0,
        inventory: 0,
      },
    ],
    pastry: [
      {
        name: "Croissant",
        category: "Pastry",
        description: "Buttery, flaky pastry with a crescent shape",
        ingredients: "Flour, Butter, Water, Yeast, Sugar, Salt, Egg wash",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/croissant.jpg",
        price: 2.5,
        inventory: 60,
      },
      {
        name: "Pain au Chocolat",
        category: "Pastry",
        description: "Chocolate-filled croissant",
        ingredients:
          "Flour, Butter, Water, Yeast, Sugar, Salt, Chocolate, Egg wash",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/pain-au-chocolat.jpg",
        price: 3.0,
        inventory: 24,
      },
      {
        name: "Almond Croissant",
        category: "Pastry",
        description: "Croissant filled with almond cream",
        ingredients:
          "Flour, Butter, Water, Yeast, Sugar, Salt, Almond cream, Egg wash",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/almond-croissant.jpg",
        price: 3.5,
        inventory: 12,
      },
      {
        name: "Danish Pastry",
        category: "Pastry",
        description: "Sweet pastry with fruit or cream cheese filling",
        ingredients:
          "Flour, Butter, Water, Yeast, Sugar, Salt, Fruit/Cream cheese",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/danish-pastry.jpg",
        price: 3.0,
        inventory: 12,
      },
    ],
    buns: [
      {
        name: "Dinner Roll",
        category: "Bun",
        description: "Soft, fluffy roll",
        ingredients: "Flour, Water, Milk, Butter, Yeast, Sugar, Salt",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/dinner-rolls.jpg",
        price: 1.0,
        inventory: 120,
      },
      {
        name: "Hamburger Bun",
        category: "Bun",
        description: "Soft, round bun with sesame seeds",
        ingredients:
          "Flour, Water, Milk, Butter, Yeast, Sugar, Salt, Sesame seeds",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/hamburger-bun.jpg",
        price: 1.25,
        inventory: 60,
      },
      {
        name: "Hot Dog Bun",
        category: "Bun",
        description: "Soft, elongated bun",
        ingredients: "Flour, Water, Milk, Butter, Yeast, Sugar, Salt",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/hotdog-bun.jpg",
        price: 1.0,
        inventory: 48,
      },
      {
        name: "Brioche Bun",
        category: "Bun",
        description: "Rich, buttery bun",
        ingredients: "Flour, Milk, Butter, Eggs, Yeast, Sugar, Salt",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/brioche-bun.jpg",
        price: 1.5,
        inventory: 48,
      },
      {
        name: "Cinnamon Roll",
        category: "Bun",
        description: "Sweet roll with cinnamon and sugar filling",
        ingredients:
          "Flour, Milk, Butter, Yeast, Sugar, Salt, Cinnamon, Sugar, Icing",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/cinnamon-buns.jpg",
        price: 2.0,
        inventory: 24,
      },
      {
        name: "Sticky Bun",
        category: "Bun",
        description: "Sweet roll with sticky caramel topping",
        ingredients:
          "Flour, Milk, Butter, Yeast, Sugar, Salt, Brown sugar, Pecans, Caramel sauce",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/sticky-bun.jpg",
        price: 2.25,
        inventory: 24,
      },
      {
        name: "Chelsea Bun",
        category: "Bun",
        description:
          "Sweet roll with currants and lemon peel, topped with sugar glaze",
        ingredients:
          "Flour, Milk, Butter, Yeast, Sugar, Salt, Currants, Lemon peel, Sugar glaze",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/chelsea-bun.jpg",
        price: 2.0,
        inventory: 36,
      },
      {
        name: "Fruit Bun (Hot Cross Bun)",
        category: "Bun",
        description:
          "Spiced bun with dried fruit, typically eaten during Easter",
        ingredients:
          "Flour, Milk, Butter, Yeast, Sugar, Salt, Spices, Dried fruit, Icing",
        imageUrl:
          "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/hot-cross-bun.jpg",
        price: 1.75,
        inventory: 24,
      },
    ],
  };

  try {
    // Loop through each category and add each product individually
    for (const category in inventoryData) {
      for (const item of inventoryData[category]) {
        const newItem = new Inventory(item);
        await newItem.save();
        console.log(`Added ${item.name} to the database.`);
      }
    }
    console.log("All inventory items have been added successfully.");
  } catch (err) {
    console.error("Error adding inventory:", err.message);
  }
};

// Call the function to add inventory
addInventory();
