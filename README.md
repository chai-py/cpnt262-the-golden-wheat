# Project Title: Golden Wheat Bakery - Full-Stack Web Application

## Project Overview:

The Golden Wheat Bakery is a beloved local bakery known for its handcrafted artisan bread, delectable pastries, and savory buns, all made using traditional baking methods and high-quality ingredients. As part of their plan to expand their business and improve customer engagement, the bakery has decided to establish a stronger online presence. This project involves the creation of a full-stack web application that will serve as the bakery’s official website, offering customers an intuitive and engaging platform to browse and purchase products, as well as learn more about the bakery’s offerings.

The website will feature a product catalog with detailed descriptions, an online ordering system, a wishlist feature and an easy-to-navigate interface. It will also include a section for customer reviews, a store locator, and contact information to help customers easily connect with the bakery.

## Prerequisites

- Node.js (LTS version recommended)
- npm (comes bundled with Node.js)

## Installation Instructions

Step-by-step guide on how to install and set up the Golden Wheat project on a local machine.

### Installation Instructions (Backend)

1. Clone the repository: Open your terminal and run the following command to clone the repository: git clone https://github.com/chai-py/cpnt262-the-golden-wheat

2. Navigate to the project directory: cd cpnt262-the-golden-wheat

3. Install dependencies: npm install

4. Install additional dependencies: npm install express mongoose dotenv

5. Set up MongoDB connection: Copy your Mongo URI and add it to your .env file in the project root. Your .env file should look like this: MONGO_URI=your-mongo-uri-here

6. Start the backend server: node app.js

7. Verify the API: Open your browser and navigate to the API endpoint: http://localhost:4000/products

8. Use the API on the Frontend: Once the backend server is running, the frontend can now make API calls to these endpoints:

- http://localhost:4000/products
- http://localhost:4000/user/login
- http://localhost:4000/user/registration
- http://localhost:4000/order

Add these endpoints to the frontend environment to fetch and display data as needed.

### Additional Notes:

- Ensure that MongoDB is running and properly connected to the backend.
- If any errors occur while running the server, double-check the dependencies and the Mongo URI in your .env file.
- Deployment using Vercel

### Attributions:

- Product Images used from Freepik & Unslpash

### Documentation:

- W3Schools
- MDN Web Docs
- Next.js Docs
- Node.js.org
