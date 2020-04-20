import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Recipe from './Recipe';

import styles from './App.module.css';

const defaultHistory = createBrowserHistory();

// TODO: make global __DEV_, __PROD__ vars supplied by webpack
const isDev = process.env.NODE_ENV === 'development';

function App({ history }) {
  return (
    <Router history={history || defaultHistory}>
      <div className={styles.container} data-testid="appContainer">
        <Switch>
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route
            path="*"
            component={() => {
              return (
                <div>
                  <h1>Recipe Not Found: A Recipe for Disaster</h1>
                  {isDev && (
                    <div>
                      <p>You may have loaded the recipe app in standalone mode</p>
                      Quick links to recipes:
                      <ul>
                        <li>
                          <Link to="recipe/1">Recipe 1</Link>
                        </li>
                        <li>
                          <Link to="recipe/2">Recipe 2</Link>
                        </li>
                        <li>
                          <Link to="recipe/3">Recipe 3</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            }}
          />
        </Switch>
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
