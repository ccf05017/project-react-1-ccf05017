import React from 'react';

import { useSelector } from 'react-redux';

import ProductList from './ProductList';

export default function ProductListContainer() {
  const { products } = useSelector((state) => ({
    products: state.products,
  }));

  return (
    <ProductList products={products} />
  );
}
