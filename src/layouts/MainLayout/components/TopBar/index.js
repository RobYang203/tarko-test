import React from 'react';
import classNames from 'classnames/bind';
import css from './index.module.css';

function TopBar() {
  const classes = classNames.bind(css);

  return (
    <header className={classes('root')}>
      <section className={classes('menu')}>

      </section>
      <section className={classes('button-group')}>
   
      </section>
    </header>
  );
}

export default TopBar;
