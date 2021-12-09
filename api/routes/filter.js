const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//data schema
const productsSchema = {
    Animal: String,
    Product: String,
    ProductType: String,
    Brand: String,
    Price: Number,
    SalePrice: Number,
    Popularity: Number,
    Breed: String,
}

//data model
const Products = mongoose.model("Products", productsSchema);

//get all products from db
app.get('/products', (req, res) => {
    Products.find()
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json('Error: ' + err))
});

//get all dog food products from db 
app.get('/dogproducts', async (req, res) => {
    Products.find({Animal: "Dog"}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

app.get('/dogfood', async (req, res) => {
    Products.find({Animal: "Dog", ProductType: "Food" }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

app.get('/dogfoodLg', async (req, res) => {
    Products.find({Animal: "Dog", ProductType: "Food", Breed: "Large Breed" }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

app.get('/dogfoodbd', async (req, res) => {
    Products.find({Brand:"Omega Plus"}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})


module.exports = app;

  



























