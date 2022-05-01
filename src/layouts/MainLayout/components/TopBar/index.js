import React from 'react';
import classNames from 'classnames/bind';
import css from './index.module.css';
import Button from 'components/Button';
import { BsFillPersonPlusFill, BsArrowLeft } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SortButton from '../SortButton';

function TopBar() {
  const classes = classNames.bind(css);
  const history = useHistory();
  const location = useLocation();

  const onBackClick = () => {
    history.goBack();
  };

  const handleGoToCreate = () => {
    history.push('/contacts/create');
  };

  const handleSortChange = (sort) => {
    history.push(`/?sort=${sort}`);
  };

  return (
    <header className={classes('root')}>
      {location.pathname !== '/' && (
        <Button color='primary' variant='icon' onClick={onBackClick}>
          <BsArrowLeft />
        </Button>
      )}
      <SortButton onClick={handleSortChange} />
      <section>
        <h2 className={classes('title')}>Contact List</h2>
      </section>
      <section className={classes('button-group')}>
        <Button color='primary' variant='icon' onClick={handleGoToCreate}>
          <BsFillPersonPlusFill />
        </Button>
      </section>
    </header>
  );
}

export default TopBar;
