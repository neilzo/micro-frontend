import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUser } from './actions/user';

import MicroFrontend from './MicroFrontend';
import Header from './Header';
import About from './About';

const { REACT_APP_SEARCH_HOST: searchHost, REACT_APP_RECIPE_HOST: recipeHost } = process.env;

const Search = ({ history }) => <MicroFrontend history={history} host={searchHost} name="Search" />;

const Recipe = ({ history }) => <MicroFrontend history={history} host={recipeHost} name="Recipe" />;

Search.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

Recipe.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

const App = ({ requestUser }) => {
  useEffect(() => {
    requestUser();
  }, [requestUser]);

  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/about" component={About} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

App.propTypes = {
  requestUser: PropTypes.func,
};

App.defaultProps = {
  requestUser: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  requestUser: () => dispatch(fetchUser()),
});

export default connect(null, mapDispatchToProps)(App);
