import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Results from './Results';

import styles from './App.module.css';

const defaultHistory = createBrowserHistory();

function App({ history }) {
  return (
    <Router history={history || defaultHistory}>
      <div className={styles.app__container}>
        <h1>Find a Recipe:</h1>
        <input type="text" placeholder="E.g. steak, baked chicken, cookies..." />
        <Results />
      </div>
    </Router>
  );
}

App.propTypes = {
  history: PropTypes.shape({}),
};

App.defaultProps = {
  history: null,
};

export default App;
