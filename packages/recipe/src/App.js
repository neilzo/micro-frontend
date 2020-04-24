import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
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
                      <p>To load a recipe:</p>
                      <ol>
                        <li>
                          Hit <code>http://localhost:5001/api/search</code> in the browser
                        </li>
                        <li>
                          Copy a recipe object <code>id</code>
                        </li>
                        <li>
                          Load <code>http://localhost:3000/recipe/__copiedId__</code>
                        </li>
                      </ol>
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
