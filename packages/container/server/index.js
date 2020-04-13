require('es6-promise').polyfill();
require('isomorphic-fetch');

const app = require('./app');

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`App is listening on port: ${port}`);
