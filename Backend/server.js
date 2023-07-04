require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;
const farmerRoutes = require("./routes/farmerRoutes");


const app = express();


mongoose.connect(URI)
.then(() => {
  console.log(`Connected to the database`);
})
.catch((error) => {
  console.error(`Database connection error:`, error);
});

app.listen(4000, () => {
    console.log("Server is running");
})


app.use('/farmer', farmerRoutes);