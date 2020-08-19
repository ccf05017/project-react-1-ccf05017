import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeOrderForm,
  orderProduct,
} from './slice';

import OrderForm from './OrderForm';

export default function OrderFormContainer() {
  const dispatch = useDispatch();

  const {
    orderForm,
    orderResult,
  } = useSelector((state) => ({
    orderForm: state.orderForm,
    orderResult: state.orderResult,
  }));

  function handleChange(event) {
    const { target: { name, value } } = event;

    dispatch(changeOrderForm({ name, value }));
  }

  function handleClick() {
    dispatch(orderProduct());
  }

  return (
    <OrderForm
      formValues={orderForm}
      orderResult={orderResult}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
}
