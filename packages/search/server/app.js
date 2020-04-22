const express = require('express');
const path = require('path');

const app = express();

const router = express.Router();

const { RECIPE_SERVER_HOST } = process.env;

// Enable CORS for fetching asset manifests across origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

router.get('/', (req, res) => {
  return fetch(`${RECIPE_SERVER_HOST}/api/recipe`)
    .then(response => response.json())
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send('ERRORZ');
    });
});

app.use('/api/search', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'asset-manifest.json'));
});

module.exports = app;
