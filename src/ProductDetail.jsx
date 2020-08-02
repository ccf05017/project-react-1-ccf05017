import React from 'react';

import OrderFormContainer from './OrderFormContainer';

export default function ProductDetail({ product }) {
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
      <OrderFormContainer />
    </>
  );
}
