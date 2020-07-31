import React from 'react';

import { useSelector } from 'react-redux';

export default function OrderFormContainer() {
  const {
    orderForm: {
      username, phoneNumber, amount, address,
    },
  } = useSelector((state) => ({
    orderForm: state.orderForm,
  }));

  return (
    <>
      <label htmlFor="username">주문자 이름</label>
      <input type="text" id="username" name="username" value={username} />

      <label htmlFor="phoneNumber">주문자 연락처</label>
      <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} />

      <label htmlFor="amount">주문수량</label>
      <input type="number" id="amount" name="amount" value={amount} />

      <label htmlFor="address">배송지</label>
      <input type="text" id="address" name="address" value={address} />

      <button type="button">
        주문하기
      </button>
    </>
  );
}
