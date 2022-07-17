const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

// setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

// creating routes
app.use('/api/goals', require('./routes/goalRoutes'));

// run
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})