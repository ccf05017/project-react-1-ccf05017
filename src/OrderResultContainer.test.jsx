import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import OrderResultContainer from './OrderResultContainer';

jest.mock('react-redux');

describe('OrderResultContainer', () => {
  function renderOrderResultContainer() {
    return render(
      <OrderResultContainer />,
    );
  }

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      orderResult: given.orderResult,
    }));
  });

  context('with success order result', () => {
    it('renders the order success message and bank account', () => {
      const successMessage = '주문이 완료됐습니다.';
      const bankAccountMessage = '국민은행: 00-0000-0000-00';

      given('orderResult', () => true);

      const { container } = renderOrderResultContainer();

      expect(container).toHaveTextContent(successMessage);
      expect(container).toHaveTextContent(bankAccountMessage);
    });
  });
});
