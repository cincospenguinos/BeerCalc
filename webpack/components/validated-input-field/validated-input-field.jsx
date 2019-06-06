import React from 'react';
import PropTypes from 'prop-types';

export default function ValidatedInputField({
  validateInput,
}) {
  const onChange = (value) => {
    validateInput(value);
  };

  return (<input onChange={onChange} />);
}

ValidatedInputField.propTypes = {
  validateInput: PropTypes.func.isRequired,
};