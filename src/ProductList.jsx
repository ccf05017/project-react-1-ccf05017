import React from 'react';

import { useHistory } from 'react-router-dom';

import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  const history = useHistory();

  function handleClick(product) {
    const url = `/products/${product.id}`;

    return (event) => {
      event.preventDefault();
      history.push(url);
    };
  }

  return (
    <>
      <h2>상품</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleClick={handleClick(product)}
          />
        ))}
      </ul>
    </>
  );
}
