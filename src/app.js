import React from 'react';
import { render } from 'react-dom';
// import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from '../routes';

// import App from './views/app/App';

// const store = createStore();

function run() {
  const rootElement = document.getElementById('app');

  render(
    <Provider>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    rootElement
  )
}

if (module.hot) {
  module.hot.accept('./views/app/App.js', () => {
    setTimeout(run());
  })
}

run();
