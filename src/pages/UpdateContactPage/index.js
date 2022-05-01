import React, {  } from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import FormLabel from 'components/Form/FormLabel';
import TextInput from 'components/Form/TextInput';
import classNames from 'classnames/bind';
import css from './index.module.css';
import { validate } from 'utils/validate';
import { formSchema } from './schema';
import { useUpdateContact } from 'hooks/contact';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useParams } from 'react-router-dom';

function UpdateContactPage() {
  const params = useParams();

  const classes = classNames.bind(css);
  const { contact, updateContact, onContactDataChange } = useUpdateContact(
    params.id
  );
  const { first_name, last_name, job, description } = contact;
  const history = useHistory();

  const { isValidate, errors } = validate(formSchema, {
    first_name,
    last_name,
    job,
    description,
  });

  const handleCreateContactClick = async (e) => {
    e.preventDefault();

    if (!isValidate) return;

    const res = await updateContact({
      first_name,
      last_name,
      job,
      description,
    });

    if (!isEmpty(res)) {
      history.replace({
        state: res,
        pathname: '/',
      });
    }
  };

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
              value={first_name}
              labelText='First Name'
              control={TextInput}
              className={classes('formControl')}
              onChange={onContactDataChange('first_name')}
              errorMsg={errors.first_name}
              showErrorMsg={first_name !== null}
            />
            <FormLabel
              maxWidth
              value={last_name}
              labelText='Last Name'
              control={TextInput}
              className={classes('formControl')}
              onChange={onContactDataChange('last_name')}
              errorMsg={errors.last_name}
              showErrorMsg={last_name !== null}
            />
            <FormLabel
              maxWidth
              value={job}
              labelText='Job'
              control={TextInput}
              className={classes('formControl')}
              onChange={onContactDataChange('job')}
              errorMsg={errors.job}
              showErrorMsg={job !== null}
            />
            <FormLabel
              maxWidth
              value={description}
              labelText='Description'
              control={TextInput}
              className={classes('formControl')}
              onChange={onContactDataChange('description')}
              errorMsg={errors.description}
              showErrorMsg={description !== null}
            />
          </CardBody>
          <CardFooter className={classes('footer')}>
            <Button
              maxWidth
              color='primary'
              variant='contained'
              disabled={!isValidate}
              onClick={handleCreateContactClick}
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
