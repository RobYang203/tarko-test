import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './index.module.css';

function TextInput({ className, maxWidth, value, ...props }) {
  const classes = classNames.bind(css);
  return (
    <input
      {...props}
      value={value ?? ''}
      className={classes(className, 'root', { 'max-width': maxWidth })}
    />
  );
}

TextInput.propTypes = {
  maxWidth: PropTypes.bool,
};

export default TextInput;
