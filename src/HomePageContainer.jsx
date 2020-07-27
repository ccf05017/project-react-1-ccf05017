import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedCategory } from './slice';

import HomePage from './HomePage';

export default function HomePageContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleMouseOver(categoryId) {
    dispatch(setSelectedCategory(categoryId));
  }

  return (
    <HomePage categories={categories} onMouseOver={handleMouseOver} />
  );
}
