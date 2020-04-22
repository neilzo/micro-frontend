const Recipe = require('../models/Recipe');

const getAllRecipes = (req, res) => {
  Recipe.find({}).exec((err, recipes) => {
    if (err) {
      return res.send(500, err);
    }
    if (!recipes) {
      return res.send(404, 'Recipes Not Found');
    }
    return res.send(recipes);
  });
};

const getRecipeById = (id, req, res) => {
  Recipe.findOne({ _id: id }).exec((err, recipe) => {
    if (err) {
      return res.send(500, err);
    }
    if (!recipe) {
      return res.send(404, 'Recipe Not Found');
    }
    return res.send(recipe);
  });
};

module.exports = {
  getAllRecipes,
  getRecipeById,
};
