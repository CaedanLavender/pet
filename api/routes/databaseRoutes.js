const express = require('express');
const app = express();
const Product = require('../models/products')
const Review = require('../models/reviews')

// ROUTES GO HERE...

// GET PRODUCT //////////////////////////////////////////////
app.get('/product/:id', async (req, res) => {
   const product = req.params.id.toString();
   console.log(product)
   try {
      const results = await  Product.findById(req.params.id).exec();
      console.log(results);
      res.send(results);
   } catch (err) {
      console.log("Error: " + err.reason);
      res.sendStatus(418);
   }
});

app.get('/reviews/:id', async (req, res) => {
   // Expects a product idea to be provided and it will return the reviews for that product
   const product = req.params.id.toString();
   console.log(product)
   try {
      const results = await Review.find({ productid: product}).exec();
      console.log(results);
      res.send(results);
   } catch (err) {
      console.log("Error: " + err.reason);
      // :) if you know what this means
      res.sendStatus(418);
   }
});

module.exports = app;