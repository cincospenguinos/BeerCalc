import React from 'react';
import { Provider } from "react-redux";
import { render } from 'react-dom';
import configureStore from './store.js';
import App from './app';
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);