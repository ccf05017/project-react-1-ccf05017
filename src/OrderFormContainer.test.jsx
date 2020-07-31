import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import OrderFormContainer from './OrderFormContainer';

jest.mock('react-redux');

describe('OrderFormContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      orderForm: {
        username: given.username,
        phoneNumber: null,
        amount: 0,
        address: null,
      },
    }));
  });

  function renderOrderFormContainer() {
    return render((
      <OrderFormContainer />
    ));
  }

  const username = '홍길동';

  context('without written info', () => {
    it('renders the order form template', () => {
      given('username', () => null);

      const { container } = renderOrderFormContainer();

      expect(container).toHaveTextContent('주문자 이름');
      expect(container).toHaveTextContent('주문자 연락처');
      expect(container).toHaveTextContent('주문수량');
      expect(container).toHaveTextContent('배송지');
      expect(container).toHaveTextContent('주문하기');

      expect(container).not.toHaveTextContent(username);
    });
  });

  context('with written info', () => {
    it('renders the order form template and value', () => {
      given('username', () => username);

      const { container } = renderOrderFormContainer();

      expect(container).toHaveTextContent('주문자 이름');
      expect(container).toHaveTextContent('주문자 연락처');
      expect(container).toHaveTextContent('주문수량');
      expect(container).toHaveTextContent('배송지');
      expect(container).toHaveTextContent('주문하기');

      expect(container).toHaveTextContent(username);
    });
  });
});
