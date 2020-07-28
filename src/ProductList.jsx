import React from 'react';

export default function ProductList({ products }) {
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
