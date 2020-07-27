import React from 'react';

import { useSelector } from 'react-redux';

import HomePage from './HomePage';

export default function HomePageContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <HomePage categories={categories} />
  );
}
