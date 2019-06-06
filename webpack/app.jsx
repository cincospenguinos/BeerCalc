import React from 'react';
import FermentablesFrame from "./components/frame/fermentables-frame";

import styles from './styles.css';

export default function App() {
  return (
    <div className={styles.container}>
      <FermentablesFrame />
    </div>
  );
}