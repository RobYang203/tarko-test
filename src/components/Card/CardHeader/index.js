import React from 'react';
import classNames from 'classnames/bind';
import css from './index.module.css';

function CardHeader({ className, children }) {
  const classes = classNames.bind(css);
  return <div className={classes(className, 'root')}>{children}</div>;
}

export default CardHeader;
