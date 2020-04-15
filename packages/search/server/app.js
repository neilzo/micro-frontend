const express = require('express');
const path = require('path');
const recipeData = require('./search.json');

const app = express();

const router = express.Router();

// Enable CORS for fetching asset manifests across origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

router.get('/', (req, res) => {
  res.send(recipeData);
});

app.use('/api/search', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'asset-manifest.json'));
});

module.exports = app;
