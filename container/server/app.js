const express = require('express');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home route');
});

app.use('/api', router);

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

module.exports = app;
