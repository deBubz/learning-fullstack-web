const path = require("path")
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const { errorHandler } = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 5000;

// setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
connectDb();

// creating routes
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

// run
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})