import React from 'react';

import { render } from '@testing-library/react';

import OrderResult from './OrderResult';

describe('OrderResult', () => {
  const orderSuccessMessage = '주문이 완료됐습니다.';
  const orderFailMessage = '주문이 실패했습니다.';

  function renderOrderResult(orderResult) {
    return render(
      <OrderResult orderResult={orderResult} />,
    );
  }

  context('when order result is null', () => {
    it('renders nothing', () => {
      const { container } = renderOrderResult(null);

      expect(container).not.toHaveTextContent(orderSuccessMessage);
      expect(container).not.toHaveTextContent(orderFailMessage);
    });
  });
});
