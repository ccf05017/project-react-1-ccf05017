import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeOrderForm,
  orderProduct,
} from './slice';

import InputField from './InputField';

import OrderResultContainer from './OrderResultContainer';

export default function OrderFormContainer() {
  const dispatch = useDispatch();

  const {
    orderForm: {
      username, phoneNumber, amount, address,
    },
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
    <>
      <InputField
        label="주문자 이름"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <InputField
        label="주문자 연락처"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
      />

      <InputField
        label="주문수량"
        name="amount"
        value={amount}
        onChange={handleChange}
      />

      <InputField
        label="배송지"
        name="address"
        value={address}
        onChange={handleChange}
      />

      <button type="button" onClick={handleClick}>
        주문하기
      </button>

      {orderResult && <OrderResultContainer />}
    </>
  );
}
