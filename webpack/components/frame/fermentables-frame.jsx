import React from 'react';

import ValidatedInputField from "../validated-input-field/validated-input-field";
import styles from './styles.css';

export default function FermentablesFrame() {
  return (
    <div id="fermentables-frame" className={styles.frame}>
      <ValidatedInputField labelText="Batch Size" onChange={() => {}} id="batch-size" />
    </div>
  );
};
