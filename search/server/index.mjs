import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

import app from './app.mjs';

es6Promise.polyfill();

const port = process.env.PORT || 5001;

app.listen(port);

console.log(`App is listening on port: ${port}`);
