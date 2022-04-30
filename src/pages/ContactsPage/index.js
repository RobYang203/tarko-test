import React from 'react';
import Contact from './components/Contact';
import classNames from 'classnames/bind';
import css from './index.module.css';

function ContactsPage() {
  const classes = classNames.bind(css);

  return (
    <div className={classes('root')}>
      <Contact
        id={1}
        firstName='tony'
        lastName='Yang'
        job='frontend'
        description='test'
      />
            <Contact
        id={1}
        firstName='tony'
        lastName='Yang'
        job='frontend'
        description='test'
      />
            <Contact
        id={1}
        firstName='tony'
        lastName='Yang'
        job='frontend'
        description='test'
      />
            <Contact
        id={1}
        firstName='tony'
        lastName='Yang'
        job='frontend'
        description='test'
      />
            <Contact
        id={1}
        firstName='tony'
        lastName='Yang'
        job='frontend'
        description='test'
      />
            <Contact
        id={1}
        firstName='tony'
        lastName='Yang'
        job='frontend'
        description='test'
      />
    </div>
  );
}

export default ContactsPage;
