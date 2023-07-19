const dotenv = require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const farmerRoutes = require("./routes/vendorRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const loginRoutes = require("./routes/loginRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");


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
app.use('/login', loginRoutes);
app.use('/users', userRoutes);
app.use('/category', categoryRoutes);

app.use('/product', productRoutes);