const mongoose = require('mongoose');

const Recipe = require('../server/models/Recipe');
const recipesJson = require('./recipe.json');
const { url, options } = require('../server/db');

const formatRecipes = () => {
  return Object.values(recipesJson).map(json => {
    const recipeCopy = {...json};
    delete recipeCopy.id;
    return recipeCopy;
  });
};

const seedRecipes = () => {
  mongoose
    .connect(url, options)
    .then(() => {
      console.log('MongoDB connected!');
      return Recipe.insertMany(formatRecipes());
    })
    .then(() => {
      console.log('Recipe seeding complete!');
      process.exit(0);
    })
    .catch((err) => {
      console.log('MongoDB connection error', err);
      process.exit(1);
    });
};

seedRecipes();