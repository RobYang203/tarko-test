import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './index.module.css';

function FormLabel({
  className,
  labelText,
  errorMsg,
  controlId,
  showErrorMsg,
  control: Control,
  ...props
}) {
  const classes = classNames.bind(css);
  return (
    <div className={classNames(className, classes('root'))}>
      <label htmlFor={controlId} className={classes('label')}>
        {labelText}
      </label>
      {showErrorMsg && <div className={classes('error')}>{errorMsg}</div>}
      {isValidElement(Control) ? (
        cloneElement(Control, props)
      ) : (
        <Control {...props} id={controlId} />
      )}
    </div>
  );
}

FormLabel.propTypes = {
  labelText: PropTypes.string,
  errorMsg: PropTypes.string,
  controlId: PropTypes.string,
  control: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
};

export default FormLabel;
