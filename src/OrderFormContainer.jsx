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

  function InputField({
    label, name, value, onChange, type = 'text',
  }) {
    const id = `inputField-${name}`;

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </>
    );
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

      <button type="button">
        주문하기
      </button>
    </>
  );
}
