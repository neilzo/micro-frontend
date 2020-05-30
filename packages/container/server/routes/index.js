const registration = require('./registration');

const init = (app) => {
  app.get('/api/test', (req, res) => {
    res.send('Container API test route v3');
  });

  app.use('/api/registration', registration);
};

module.exports = { init };
