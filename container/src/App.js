import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import MicroFrontend from './MicroFrontend';
import Header from './Header';
import About from './About';

const { REACT_APP_SEARCH_HOST: searchHost } = process.env;

const Browse = ({ history }) => <MicroFrontend history={history} host={searchHost} name="Search" />;

Browse.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
