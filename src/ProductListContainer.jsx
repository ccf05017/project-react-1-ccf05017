import React from 'react';

import { useSelector } from 'react-redux';

export default function ProductListContainer() {
  const { products } = useSelector((state) => ({
    products: state.products,
  }));

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  );
}
