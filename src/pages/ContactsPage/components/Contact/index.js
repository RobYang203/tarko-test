import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import Button from 'components/Button';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import classNames from 'classnames/bind';
import css from './index.module.css';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import ContactRow from '../ContactRow';
import { useHistory } from 'react-router-dom';

function Contact({
  id,
  first_name,
  last_name,
  job,
  description,
  handleRemoveContactClick,
}) {
  const classes = classNames.bind(css);
  const history = useHistory();

  const handleGoUpdatePage = () => {
    history.push(`/contacts/${id}`);
  };

  const handleRemoveContact = () => {
    handleRemoveContactClick(id);
  };

  return (
    <div className={classes('root')}>
      <Card>
        <CardHeader className={classes('header')}>
          <h3 className={classes('title')}>
            {first_name} {last_name}
          </h3>
          <div className={classes('button-group')}>
            <Button variant='icon' color='info' onClick={handleGoUpdatePage}>
              <BsFillPencilFill />
            </Button>
            <Button variant='icon' color='error' onClick={handleRemoveContact}>
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
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleRemoveContactClick: PropTypes.func.isRequired,
};

export default Contact;
