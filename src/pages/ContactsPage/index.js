import React from 'react';
import Contact from './components/Contact';
import classNames from 'classnames/bind';
import css from './index.module.css';
import { useGetContactList } from 'hooks/contact';
import { useLocation } from 'react-router-dom';
import { orderBy } from 'lodash';

function ContactsPage() {
  const classes = classNames.bind(css);
  const location = useLocation();
  const qs = new URLSearchParams(location.search);
  const sort =  qs.get('sort');
  const { list, removeContact } = useGetContactList(location.state);
  return (
    <div className={classes('root')}>
      {orderBy(list , 'id' , sort).map((item , index) => {
        return (
          <Contact
            key={`contact-${item.id}-${item.first_name}-${index}`}
            {...item}
            handleRemoveContactClick={removeContact}
          />
        );
      })}
    </div>
  );
}

export default ContactsPage;
