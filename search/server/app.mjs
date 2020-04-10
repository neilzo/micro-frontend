import express from 'express';
import recipeData from './restaurants.json';

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send(recipeData);
});

app.use('/api/search', router);

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

export default app;
