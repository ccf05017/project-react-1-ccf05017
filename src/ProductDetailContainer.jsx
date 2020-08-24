import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  clearOrderResult,
  loadProductDetail,
  openOrderFormModal,
  closeOrderFormModal,
} from './slice';

import ProductDetail from './ProductDetail';

export default function ProductDetailContainer({ params }) {
  const { id } = params || useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearOrderResult());
    dispatch(loadProductDetail(id));
  }, []);

  const { product, orderFormModalOpen } = useSelector((state) => ({
    product: state.product,
    orderFormModalOpen: state.orderFormModalOpen,
  }));

  if (!product) {
    return (
      <p>로딩중입니다</p>
    );
  }

  function openModal() {
    dispatch(clearOrderResult());
    dispatch(openOrderFormModal());
  }

  function closeModal() {
    dispatch(closeOrderFormModal());
  }

  return (
    <ProductDetail
      product={product}
      orderFormModalOpen={orderFormModalOpen}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
}
