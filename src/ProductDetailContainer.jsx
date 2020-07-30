import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadProductDetail } from './slice';

export default function ProductDetail({ productId }) {
  const dispatch = useDispatch();

  dispatch(loadProductDetail(productId));

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
