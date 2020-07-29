import React from 'react';

import CategoryListContainer from './CategoryListContainer';
import ProductListContainer from './ProductListContainer';

export default function Homepage() {
  return (
    <>
      <CategoryListContainer />
      <ProductListContainer />
    </>
  );
}
