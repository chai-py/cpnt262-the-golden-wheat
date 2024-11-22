const mongoose = require("mongoose");

const uri = "mongodb+srv://erchaital123:Sait092024@cluster0.206yd.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connection successful"))
  .catch((error) => console.error("MongoDB connection error:", error));
