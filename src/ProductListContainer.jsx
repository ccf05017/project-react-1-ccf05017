import React from 'react';

import { useSelector } from 'react-redux';

import ProductList from './ProductList';

export default function ProductListContainer() {
  const { products, selectedCategory } = useSelector((state) => ({
    products: state.products,
    selectedCategory: state.selectedCategory,
  }));

  function filterProductByCategory() {
    if (selectedCategory === null) {
      return products;
    }
    return products.filter((product) => product.typeId === selectedCategory.id);
  }

  return (
    <ProductList products={filterProductByCategory()} />
  );
}
