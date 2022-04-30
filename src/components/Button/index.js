import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import BaseButton from './BaseButton';
import css from './index.module.css';

function Button({ children, color, variant, maxWidth, className, ...props }) {
  const classes = classNames.bind(css);

  return (
    <BaseButton
      className={classes(className, `variant-${variant}`, `color-${color}`, {
        'max-width': maxWidth,
      })}
      {...props}>
      {children}
    </BaseButton>
  );
}

Button.defaultProps = {
  color: 'default',
  variant: 'default',
  maxWidth: false,
};

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
