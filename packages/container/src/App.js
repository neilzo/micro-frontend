import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUser } from './actions/user';

import MicroFrontend from './MicroFrontend';
import Header from './Header';
import About from './About';

const { REACT_APP_SEARCH_HOST: searchHost, REACT_APP_RECIPE_HOST: recipeHost } = process.env;

// Sub apps
const Search = ({ history, store }) => (
  <MicroFrontend history={history} host={searchHost} name="Search" store={store} />
);

const Recipe = ({ history }) => <MicroFrontend history={history} host={recipeHost} name="Recipe" />;

Search.propTypes = {
  history: PropTypes.shape({}).isRequired,
  store: PropTypes.shape({}).isRequired,
};

Recipe.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

// Compose route w/ store
const RouteWithStore = ({ component: Component, store }) => (
  <Route
    render={({ history, match, location }) => (
      <Component store={store} history={history} match={match} location={location} />
    )}
  />
);

RouteWithStore.propTypes = {
  component: PropTypes.func,
  store: PropTypes.shape({}),
};

RouteWithStore.defaultProps = {
  component: null,
  store: null,
};

export function App({ requestUser, store }) {
  useEffect(() => {
    requestUser();
  }, [requestUser]);

  return (
    <BrowserRouter>
      <>
        <Header />
        <h1>abcdefghij</h1>
        <Switch>
          <RouteWithStore exact path="/" component={Search} store={store} />
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/about" component={About} />
          <Route
            path="*"
            component={() => <div>These are not the droids you&apos;re looking for</div>}
          />
        </Switch>
      </>
    </BrowserRouter>
  );
}

App.propTypes = {
  requestUser: PropTypes.func,
  store: PropTypes.shape({}),
};

App.defaultProps = {
  requestUser: () => {},
  store: null,
};

const mapDispatchToProps = (dispatch) => ({
  requestUser: () => dispatch(fetchUser()),
});

export default connect(null, mapDispatchToProps)(App);
