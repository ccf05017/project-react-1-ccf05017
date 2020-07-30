import React from 'react';

import { Link } from 'react-router-dom';

import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  return (
    <>
      <h2>상품</h2>
      <ul>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
          >
            <ProductItem
              product={product}
            />
          </Link>
        ))}
      </ul>
    </>
  );
}
