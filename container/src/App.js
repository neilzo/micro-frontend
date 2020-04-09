import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MicroFrontend from './MicroFrontend';
import Header from './Header';
import About from './About';

const { REACT_APP_SEARCH_HOST: searchHost } = process.env;

const Browse = ({ history }) => <MicroFrontend history={history} host={searchHost} name="Search" />;

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/about" component={About} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
