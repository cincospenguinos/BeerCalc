import React from 'react';
import ValidatedInputField from '../../../../components/validated-input-field/validated-input-field';

import styles from './styles.css';


export default function FrameHeader() {
  return (
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
      />
      <ValidatedInputField
        onChange={() => {}}
        id="total-gravity"
        labelText="Total Gravity:"
        className={styles.gravity}
      />
    </div>
  );
}
