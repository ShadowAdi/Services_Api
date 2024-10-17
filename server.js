const express = require("express");
const router = require("./routes/ServiceRoute");
require('dotenv').config();

const Connect = require("./config/db");
const errorHandler = require("./middlewares/ErrorHandler"); // Import error handler

const app = express();

app.use(express.json());

app.use('/api/v1', router);

app.use(errorHandler); 

Connect(app);
