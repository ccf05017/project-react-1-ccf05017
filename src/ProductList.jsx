import React from 'react';

import ProductItemContainer from './ProductItemContainer';

export default function ProductList({ products }) {
  return (
    <>
      <h2>상품</h2>
      <ul>
        {products.map((product) => (
          <ProductItemContainer
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </>
  );
}
