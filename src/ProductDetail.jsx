import React from 'react';

export default function ProductDetail({ product }) {
  if (product === null) {
    return (
      <p>로딩중입니다</p>
    );
  }

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
