const mongoose = require('mongoose');

const { Schema } = mongoose;

const Recipe = new Schema ({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  directions: { type: [String], required: true },
  description: { type: String },
  author: { type: String },
  servings: { type: Number },
  image_url: { type: String }
});

module.exports = mongoose.model('Recipe', Recipe);