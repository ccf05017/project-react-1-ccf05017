import React from 'react';

import { useSelector } from 'react-redux';

export default function ProductDetail() {
  const { product } = useSelector((state) => ({
    product: state.product,
  }));

  return (
    <>
      <h2>상품 상세</h2>
      <p>
        상품명:
        {' '}
        {product.title}
      </p>
      <p>
        가격:
        {' '}
        {product.price}
        {' '}
        원
      </p>
    </>
  );
}
