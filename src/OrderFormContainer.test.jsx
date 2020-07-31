import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import OrderFormContainer from './OrderFormContainer';

jest.mock('react-redux');

describe('OrderFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      orderForm: {
        username: given.username,
        phoneNumber: '',
        amount: 0,
        address: '',
      },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderOrderFormContainer() {
    return render((
      <OrderFormContainer />
    ));
  }

  const orderForm = ['주문자 이름', '주문자 연락처', '주문수량', '배송지'];
  const username = '홍길동';

  context('without written info', () => {
    it('renders the order form template', () => {
      given('username', () => '');

      const { getByText, getByLabelText } = renderOrderFormContainer();

      orderForm.forEach((input) => expect(getByLabelText(input)).not.toBeNull());

      expect(getByText('주문하기')).not.toBeNull();

      expect(getByLabelText('주문자 이름').value).not.toBe(username);
    });
  });

  context('with written info', () => {
    it('renders the order form template and value', () => {
      given('username', () => username);

      const { getByLabelText, getByText } = renderOrderFormContainer();

      orderForm.forEach((input) => expect(getByLabelText(input)).not.toBeNull());

      expect(getByText('주문하기')).not.toBeNull();

      expect(getByLabelText('주문자 이름').value).toBe(username);
    });
  });

  it('listens the form value change event', () => {
    given('username', () => '');

    const { getByLabelText } = renderOrderFormContainer();

    fireEvent.change(getByLabelText('주문자 이름'), {
      target: { value: username },
    });

    expect(dispatch).toBeCalledWith({
      type: 'application/changeOrderForm',
      payload: {
        username,
      },
    });
  });
});
