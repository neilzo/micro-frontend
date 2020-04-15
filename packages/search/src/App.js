import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import Results from './Results';

import styles from './App.module.css';

const defaultHistory = createBrowserHistory();

function App({ history, user }) {
  return (
    <Router history={history || defaultHistory}>
      <div className={styles.greeting__container}>
        <h1>Hi {user?.name}!</h1>
        <p>This is data from the global redux store in the Search sub-app. Neat, huh?</p>
      </div>
      <div className={styles.container}>
        <Results />
      </div>
    </Router>
  );
}

App.propTypes = {
  history: PropTypes.shape({}),
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

App.defaultProps = {
  history: null,
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
