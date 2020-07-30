import React from 'react';

import { productFixture } from '../fixtures/products';

export default function ProductDetail() {
  return (
    <>
      <h2>상품 상세</h2>
      <p>
        상품명:
        {' '}
        {productFixture.title}
      </p>
      <p>
        가격:
        {' '}
        {productFixture.price}
        {' '}
        원
      </p>
    </>
  );
}
