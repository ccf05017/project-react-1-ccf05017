import React from 'react';

export default function OrderFormContainer() {
  return (
    <>
      <label htmlFor="username">주문자 이름</label>
      <input type="text" name="username" />
      <label htmlFor="phoneNumber">주문자 연락처</label>
      <input type="text" name="phoneNumber" />
      <label htmlFor="amount">주문수량</label>
      <input type="number" name="amount" />
      <label htmlFor="address">배송지</label>
      <input type="text" name="address" />
      <button type="button">
        주문하기
      </button>
    </>
  );
}
