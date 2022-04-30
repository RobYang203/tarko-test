import React from 'react';
import classNames from 'classnames/bind';
import css from './index.module.css';

function CardFooter({ className, children }) {
  const classes = classNames.bind(css);
  return <div className={classes(className, 'root')}>{children}</div>;
}

export default CardFooter;
