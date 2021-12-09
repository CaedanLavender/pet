const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({}, {strict: false});
const Review = mongoose.model("review", reviewSchema)

module.exports = Review;