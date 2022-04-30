import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './index.module.css';

function Card({ className, roundSize, children }) {
  const classes = classNames.bind(css);

  return (
    <div className={classes(className, 'root', roundSize)}>{children}</div>
  );
}

Card.defaultProps = {
  roundSize: 'normal',
};

Card.propTypes = {
  roundSize: PropTypes.string,
  header: PropTypes.any,
  body: PropTypes.any,
  footer: PropTypes.any,
};

export default Card;
