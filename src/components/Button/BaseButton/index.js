import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './index.module.css';

function BaseButton({
  variant,
  maxWidth,
  children,
  className,
  ...props
}) {
  const classes = classNames.bind(css);
  return (
    <button
      className={classes(className , 'root')}
      {...props}>
      {children}
    </button>
  );
}

BaseButton.defaultProps = {
  color: 'default',
  variant: 'default',
  maxWidth: false,
};

BaseButton.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  maxWidth: PropTypes.bool,
};

export default BaseButton;
