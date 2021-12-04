
//   █████╗ ██████╗ ██╗
//  ██╔══██╗██╔══██╗██║
//  ███████║██████╔╝██║
//  ██╔══██║██╔═══╝ ██║
//  ██║  ██║██║     ██║
//  ╚═╝  ╚═╝╚═╝     ╚═╝
//                     

// IMPORTS //////////////////////////////////////////////////
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const databaseRouter = require('./routes/databaseRoutes')
const api = require('./routes/api')
require('dotenv').config();


// EXPRESS SETUP ////////////////////////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// MONGODB SETUP ////////////////////////////////////////////
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
   console.log("MongoDB Atlas is connected");
});


// DATABASE ROUTER IMPORT ///////////////////////////////////
app.use(databaseRouter);
app.use(api);


// LISTEN ///////////////////////////////////////////////////
const PORT = 5000
app.listen(PORT, () => console.log("Listening on port: " + PORT));