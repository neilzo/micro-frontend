const express = require('express');
const path = require('path');
const recipes = require('./recipe.json');

const app = express();

const router = express.Router();

// Enable CORS for fetching asset manifests across origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

router.get('/:id', (req, res) => {
  const recipeId = req.params.id;
  const recipe = recipes[recipeId];

  if (!recipe) res.status(404).send('Recipe not found');

  res.send(recipe);
});

app.use('/api/recipe', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'asset-manifest.json'));
});

module.exports = app;
