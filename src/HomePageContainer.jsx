import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from './slice';

import CategoryList from './CategoryList';

export default function HomePageContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  function handleMouseOver(categoryId) {
    dispatch(selectCategory(categoryId));
  }

  return (
    <CategoryList
      categories={categories}
      onMouseOver={handleMouseOver}
    />
  );
}
