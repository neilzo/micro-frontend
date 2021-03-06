import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderRecipe = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
  serviceWorker.unregister();
};

window.unmountRecipe = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
