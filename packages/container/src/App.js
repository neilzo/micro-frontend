import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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

const App = () => (
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

export default App;
