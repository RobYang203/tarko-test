import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { BsSortDownAlt, BsSortDown } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

function SortButton({ onClick }) {
  const location = useLocation();
  const qs = new URLSearchParams(location.search);
  const currentSort = qs.get('sort');
  const [sort, setSort] = useState(currentSort ?? 'asc');
  const onSortChangeClick = () => {
    setSort((sort) => (sort === 'asc' ? 'desc' : 'asc'));
    onClick(sort);
  };

  return (
    <Button variant='icon' color='primary' onClick={onSortChangeClick}>
      {sort === 'desc' ? <BsSortDownAlt /> : <BsSortDown />}
    </Button>
  );
}

SortButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SortButton;
