import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderSearch = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
  serviceWorker.unregister();
};

window.unmountSearch = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
