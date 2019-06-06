import React from 'react';
import Provider from 'react-redux';
import configureStore from './store.js';

import FermentablesFrame from "./features/fermentables/components/frame/fermentables-frame";

import styles from './styles.css';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

export default function App() {
  return (
    <Provider store={reduxStore}>
      <div className={styles.container}>
        <FermentablesFrame />
      </div>
    </Provider>
  );
}
