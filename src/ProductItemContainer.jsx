import React from 'react';

import { useHistory } from 'react-router-dom';

import ProductItem from './ProductItem';

export default function ProductItemContainer({ product }) {
  const history = useHistory();

  function handleClick() {
    history.push(`/products/${product.id}`);
  }

  return (
    <ProductItem product={product} handleClick={handleClick} />
  );
}
