const path = require('path');
const express = require('express');

const app = express();

const router = express.Router();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

router.get('/test', (req, res) => {
  res.send('Container API test route v3');
});

app.use('/api', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

module.exports = app;
