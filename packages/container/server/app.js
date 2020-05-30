require('./db');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

// Middleware to accept and parse POST data
// Still wondering why this isn't in Express by default
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Init routes
routes.init(app);

// If a route doesn't match, serve index.html and let the client route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

module.exports = app;
