const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({}, {strict: false});

// const productSchema = new Schema({
//    id: {
//       type: Number
//    },
//    product: {
//       type: String,
//       required: true
//    },
//    productType: {
//       type: String,
//       required: true
//    },
//    animal: {
//       type: String,
//       required: true
//    },
//    breed: {
//       type: String,

//    },
//    brand: {
//       type: String,

//    },
//    weight: {
//       type: Number,

//    },
//    price: {
//       type: Number,
//       required: true

//    },
//    salePrice: {
//       type: Number,

//    },
//    popularity: {
//       type: Number,
//       required: true

//    }
// });

const Product = mongoose.model("product", productSchema);

module.exports = Product;