const express = require('express');
const recipeData = require('./search.json');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send(recipeData);
});

app.use('/api/search', router);

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

module.exports = app;
