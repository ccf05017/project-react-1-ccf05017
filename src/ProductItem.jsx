import React from 'react';

export default function ProductItem({ product, handleClick }) {
  return (
    <li>
      <a href="" onClick={handleClick}>
        <p>{product.title}</p>
        <p>{product.price}</p>
      </a>
    </li>
  );
}
