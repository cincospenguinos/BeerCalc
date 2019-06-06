import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default function ValidatedInputField({
  isValid,
  onChange,
}) {
  return (
    <div>
      <input onChange={onChange} />
      {!isValid && <div className={styles.error} />}
    </div>
    );
}

ValidatedInputField.propTypes = {
  isValid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

ValidatedInputField.defaultProps = {
  isValid: true,
};