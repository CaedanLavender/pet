const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({}, { strict: false });

// const productSchema = new Schema({
//     _id: {
//         type: Number
//     },
//     Product: {
//         type: String,
//         required: true
//     },
//     ProductType: {
//         type: String,
//         // required: true
//     },
//     Animal: {
//         type: String,
//         required: true
//     },
//     Breed: {
//         type: String,

//     },
//     Brand: {
//         type: String,

//     },
//     Weight: {
//         type: Number,

//     },
//     Price: {
//         type: Number,
//         required: true

//     },
//     SalePrice: {
//         type: Number,

//     },
//     Popularity: {
//         type: Number,
//         required: true

//     }
// });


const Product = mongoose.model("product", productSchema);

module.exports = Product;
