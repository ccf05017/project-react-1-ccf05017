import React from 'react';

import { useDispatch } from 'react-redux';

import { clearCategoryFilter } from './slice';

import HeaderLogo from './HeaderLogo';

export default function HeaderLogoContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(clearCategoryFilter());
  }

  return (
    <HeaderLogo onClick={handleClick} />
  );
}
