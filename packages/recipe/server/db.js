const mongoose = require('mongoose');

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT } = process.env;

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}`;

mongoose
  .connect(url, options)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error', err);
  });

module.exports = {
  url,
  options,
};
