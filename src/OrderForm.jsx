import React from 'react';

import styled from '@emotion/styled';

import InputField from './InputField';

import OrderResultContainer from './OrderResultContainer';

const OrderFromLayout = styled('div')`
  display: flex;
  flex-direction: column;
`;

export default function OrderForm({
  formValues, orderResult, handleChange, handleClick,
}) {
  const {
    username, phoneNumber, amount, address,
  } = formValues;

  return (
    <OrderFromLayout>
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
    </OrderFromLayout>
  );
}
