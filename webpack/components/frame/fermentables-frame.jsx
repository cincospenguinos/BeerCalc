import React from 'react';

import ValidatedInputField from "../validated-input-field/validated-input-field";
import styles from './styles.css';

export default function FermentablesFrame() {
  return (
    <div id="fermentables-frame" className={styles.frame}>
      <div className={styles.header}>
        <ValidatedInputField
          labelText="Brew Name:"
          onChange={() => {}}
          id="brew-name"
          className={styles.name}
        />
        <ValidatedInputField
          labelText="Batch Size:"
          onChange={() => {}}
          id="batch-size"
          isValid={false}
        />
      </div>
    </div>
  );
};
