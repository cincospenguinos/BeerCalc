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
  const error = () => (
    <div>
      <div className={styles.error}>
        This is an error
      </div>
    </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <label htmlFor={id} className={styles.label}>{labelText}</label>
        <input
          className={isValid ? styles.input : styles['input-error']}
          id={id}
          onChange={onChange}
          {...rest}
        />
      </div>
      {!isValid && error()}
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