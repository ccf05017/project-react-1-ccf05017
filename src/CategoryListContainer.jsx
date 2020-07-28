import React from 'react';

import { useSelector } from 'react-redux';

import CategoryList from './CategoryList';

export default function CategoryListContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <CategoryList
      categories={categories}
    />
  );
}
