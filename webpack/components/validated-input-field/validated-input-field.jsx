import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default function ValidatedInputField({
  id,
  isValid,
  labelText,
  onChange,
  ...rest
}) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>{labelText}</label>
      <input id={id} onChange={onChange} {...rest} />
      {!isValid && <div className={styles.error} />}
    </div>
    );
}

ValidatedInputField.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

ValidatedInputField.defaultProps = {
  isValid: true,
};