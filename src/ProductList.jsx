import React from 'react';

import { useHistory } from 'react-router-dom';

import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  return (
    <>
      <h2>상품</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </>
  );
}
