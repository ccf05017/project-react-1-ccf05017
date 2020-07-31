import React from 'react';

export default function ProductItem({ product, onClick }) {
  return (
    <li>
      <a href="" onClick={onClick}>
        <p>{product.title}</p>
        <p>{product.price}</p>
      </a>
    </li>
  );
}
