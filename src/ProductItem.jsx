import React from 'react';

export default function ProductItem({ product }) {
  return (
    <li>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </li>
  );
}
