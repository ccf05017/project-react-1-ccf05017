import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeOrderForm } from './slice';

export default function OrderFormContainer() {
  const dispatch = useDispatch();

  const {
    orderForm: {
      username, phoneNumber, amount, address,
    },
  } = useSelector((state) => ({
    orderForm: state.orderForm,
  }));

  function handleChange(event) {
    const { target: { name, value } } = event;

    dispatch(changeOrderForm({ name, value }));
  }

  return (
    <>
      <label htmlFor="username">주문자 이름</label>
      <input type="text" id="username" name="username" value={username} onChange={handleChange} />

      <label htmlFor="phoneNumber">주문자 연락처</label>
      <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleChange} />

      <label htmlFor="amount">주문수량</label>
      <input type="number" id="amount" name="amount" value={amount} onChange={handleChange} />

      <label htmlFor="address">배송지</label>
      <input type="text" id="address" name="address" value={address} onChange={handleChange} />

      <button type="button">
        주문하기
      </button>
    </>
  );
}
