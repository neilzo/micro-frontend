import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderSearch = (containerId, history, store) => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountSearch = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
