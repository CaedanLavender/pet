const express = require('express');
const app = express();
const Product = require('../models/products')
const cors=require('cors');
const mongoose = require('mongoose');


// ROUTES GO HERE...

// GET PRODUCT //////////////////////////////////////////////
app.get('/product/:id', async (req, res) => {
   const product = req.params.id.toString();
   console.log(product)
   try {
      const results = await Product.findById(req.params.id).exec();
      console.log(results);
      res.send(results);
   } catch (err) {
      console.log("Error: " + err.reason);
      res.sendStatus(418);
   }
});


module.exports = app;