import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { loadProductDetail } from './slice';

import ProductDetail from './ProductDetail';

export default function ProductDetailContainer({ params }) {
  const { id } = params || useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductDetail(id));
  }, []);

  const { product } = useSelector((state) => ({
    product: state.product,
  }));

  if (!product) {
    return (
      <p>로딩중입니다</p>
    );
  }

  return (
    <ProductDetail product={product} />
  );
}
