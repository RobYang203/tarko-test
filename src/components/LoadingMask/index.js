import { isEmpty } from 'lodash-es';
import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import css from './index.module.css';

function LoadingMask() {
  const classes = classNames.bind(css);
  const fetchingTypes = useSelector(({ setting }) => setting.fetchingTypes);

  if (isEmpty(fetchingTypes)) {
    document.body.style.overflow = 'auto';
    
    return null;
  } else {
    document.body.style.overflow = 'hidden';

    return (
      <>
        <div className={classes.root}></div>
        <div className={classes.mask}></div>
      </>
    );
  }
}

export default LoadingMask;
