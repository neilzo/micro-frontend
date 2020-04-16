import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Recipe from './Recipe';

import styles from './App.module.css';

const defaultHistory = createBrowserHistory();

function App({ history }) {
  return (
    <Router history={history || defaultHistory}>
      <div className={styles.container} data-testid="appContainer">
        <Route exact path="/recipe/:id" component={Recipe} />
        {/* The following is only for dev when app can be accessed in isolation */}
        <Route exact path="/">
          <Redirect to="recipe/1" />
        </Route>
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
