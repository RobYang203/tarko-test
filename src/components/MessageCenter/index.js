import React from 'react';
import classNames from 'classnames/bind';
import css from './index.module.css';
import MessageItem from './MessageItem';
import { useMessage } from 'contexts/MessageProvider';

function MessageCenter() {
  const classes = classNames.bind(css);
  const { messages, removeMessage } = useMessage();

  return (
    <>
      {messages.length !== 0 && (
        <div className={classes('root')}>
          {messages.map((item, index) => {
            return (
              <MessageItem
                key={item.id}
                id={item.id}
                index={index}
                color={item.type}
                handleItemRemove={removeMessage}>
                {item.text}
              </MessageItem>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MessageCenter;
