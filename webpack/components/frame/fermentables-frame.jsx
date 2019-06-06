import React from 'react';

import styles from './styles.css';
import FrameHeader from '../frame-header/frame-header';

export default function FermentablesFrame() {
  return (
    <div id="fermentables-frame" className={styles.frame}>
      <FrameHeader />
    </div>
  );
};
