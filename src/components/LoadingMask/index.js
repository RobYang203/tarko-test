import React from 'react';
import classNames from 'classnames/bind';
import css from './index.module.css';
import { useFetching } from 'contexts/FetchingProvider';
import { isEmpty } from 'lodash';

function LoadingMask() {
  const classes = classNames.bind(css);
  const { fetchingTypes } = useFetching();

  if (isEmpty(fetchingTypes)) {
    document.body.style.overflow = 'auto';

    return null;
  } else {
    document.body.style.overflow = 'hidden';

    return (
      <>
        <div className={classes('root')}></div>
        <div className={classes('mask')}></div>
      </>
    );
  }
}

export default LoadingMask;
