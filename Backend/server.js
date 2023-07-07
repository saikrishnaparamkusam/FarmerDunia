const dotenv = require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const farmerRoutes = require("./routes/vendorRoutes");
const registrationRoutes = require("./routes/registrationRoutes");


const app = express();
app.use(express.json());

mongoose.connect(URI)
.then(() => {
  console.log(`Connected to the database`);
})
.catch((error) => {
  console.error(`Database connection error:`, error);
});

app.listen(PORT, () => {
    console.log("Server is running");
})


app.use('/signup', registrationRoutes);