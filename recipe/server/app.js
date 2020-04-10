const express = require('express');
const recipes = require('./recipe.json');

const app = express();

const router = express.Router();

router.get('/:id', (req, res) => {
  const recipeId = req.params.id;
  const recipe = recipes[recipeId];

  if (!recipe) res.status(404).send('Recipe not found');

  res.send(recipe);
});

app.use('/api/recipe', router);

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

module.exports = app;
