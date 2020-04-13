import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Recipe from './Recipe';

import styles from './App.module.css';

const defaultHistory = createBrowserHistory();

function App({ history }) {
  return (
    <Router history={history || defaultHistory}>
      <div className={styles.container}>
        <Route exact path="/recipe/:id" component={Recipe} />
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
