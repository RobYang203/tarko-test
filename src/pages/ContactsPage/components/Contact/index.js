import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import Button from 'components/Button';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import classNames from 'classnames/bind';
import css from './index.module.css';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import ContactRow from '../ContactRow';

function Contact({ id, firstName, lastName, job, description }) {
  const classes = classNames.bind(css);
  return (
    <div className={classes('root')}>
      <Card>
        <CardHeader className={classes('header')}>
          <h3 className={classes('title')}>
            {firstName} {lastName}
          </h3>
          <div className={classes('button-group')}>
            <Button variant='icon' color='info'>
              <BsFillPencilFill />
            </Button>
            <Button variant='icon' color='error'>
              <BsFillTrashFill />
            </Button>
          </div>
        </CardHeader>
        <CardBody className={classes('body')}>
          <ContactRow title='Job' content={job} />
          <ContactRow title='description' content={description} />
        </CardBody>
      </Card>
    </div>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Contact;
