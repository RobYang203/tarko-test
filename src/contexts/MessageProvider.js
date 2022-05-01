import React, { useContext, useMemo, useState } from 'react';

const MessageContext = React.createContext({
  messages: [],
  sendMessage: (type, text) => {},
  removeMessage: (id) => {},
});

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (type, text) => {
    const message = {
      id: new Date().getTime(),
      type,
      text,
    };

    setMessages((messages) => {
      return [...messages, message];
    });
  };

  const removeMessage = (id) => {
    setMessages(() => {
      return messages.filter((item) => item.id !== id);
    });
  };

  const value = useMemo(() => {
    return {
      messages,
      sendMessage,
      removeMessage,
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export const useMessage = () => {
  const { messages, sendMessage, removeMessage } = useContext(MessageContext);

  return {
    messages,
    sendMessage,
    removeMessage,
  };
};

export default MessageProvider;
