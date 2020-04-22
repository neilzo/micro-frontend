require('./db');

const express = require('express');
const path = require('path');
const recipeController = require('./controllers/recipe');

const app = express();

const router = express.Router();

// Enable CORS for fetching asset manifests across origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

router.get('/', recipeController.getAllRecipes);

router.get('/:id', (req, res) => {
  const recipeId = req.params.id;

  recipeController.getRecipeById(recipeId, req, res);
});

app.use('/api/recipe', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'asset-manifest.json'));
});

module.exports = app;
