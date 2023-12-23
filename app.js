// import express from "express";
// import  cors  from "cors";
const express = require('express')
const cors = require('cors')
const connectDB = require('./db/connectdb')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const serverRoutes = require('./routes/serverRoutes')
// import connectDB from "./db/connectdb";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import serverRoutes from './routes/serverRoutes'



//Setup Express App
const app = express();

// env config
dotenv.config();

// Set up CORS
app.use(cors());

// applyPassportStrategy(passport);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Load Routes
app.use("/", serverRoutes);
app.set('view engine', 'ejs');

console.log("dddddddddd");

// Get port from environment and store in Express.
const port = process.env.PORT || "1010";
app.listen(port, () => {
  console.log(`Server listining at http://localhost:${port}`);
});

//Database Connection
const DATABASE_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017";
connectDB(DATABASE_URL);
