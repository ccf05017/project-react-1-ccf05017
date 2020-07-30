import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadProductDetail } from './slice';

import ProductDetail from './ProductDetail';

export default function ProductDetailContainer({ productId }) {
  const dispatch = useDispatch();

  dispatch(loadProductDetail(productId));

  const { product } = useSelector((state) => ({
    product: state.product,
  }));

  return (
    <ProductDetail product={product} />
  );
}
