import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './index.module.css';

function MessageItem({ id, index, children, color, handleItemRemove }) {
  const classes = classNames.bind(css);
  const [move, setMove] = useState(false);

  const style = {
    bottom: `${index * 50 + 10 * index + 10}px`,
  };

  const onTransitionEnd = (e) => {
    if (!move) {
      handleItemRemove(id);
    }
  };

  useEffect(() => {
    window.setTimeout(() => {
      setMove(true);
    });

    window.setTimeout(() => {
      setMove(false);
    }, 5000);
  }, []);

  return (
    <div
      style={style}
      className={classes('item', `color-${color}`, { 'item-move': move })}
      onTransitionEnd={onTransitionEnd}>
      {children}
    </div>
  );
}

MessageItem.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['info', 'error']).isRequired,
  handleItemRemove: PropTypes.func.isRequired,
};

export default MessageItem;
