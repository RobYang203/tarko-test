import React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import FormLabel from 'components/Form/FormLabel';
import TextInput from 'components/Form/TextInput';
import classNames from 'classnames/bind';
import css from './index.module.css';

function UpdateContactPage() {
  const classes = classNames.bind(css);

  return (
    <form className={classes('root')}>
      <div className={classes('container')}>
        <Card center className={classes('card')} roundSize='large'>
          <CardHeader className={classes('header')}>
            <h2 className={classes('title')}>Update Contact</h2>
          </CardHeader>
          <CardBody className={classes('body')}>
            <FormLabel
              maxWidth
              labelText='First Name'
              control={TextInput}
              className={classes('formControl')}
            />
            <FormLabel
              maxWidth
              labelText='Last Name'
              control={TextInput}
              className={classes('formControl')}
            />
            <FormLabel
              maxWidth
              labelText='Job'
              control={TextInput}
              className={classes('formControl')}
            />
            <FormLabel
              maxWidth
              labelText='Description'
              control={TextInput}
              className={classes('formControl')}
            />
          </CardBody>
          <CardFooter className={classes('footer')}>
            <Button
              maxWidth
              color='primary'
              variant='contained'
              className={classes('button')}>
              Confirm
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}

export default UpdateContactPage;
