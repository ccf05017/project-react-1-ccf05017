import React from 'react';

import { render } from '@testing-library/react';

import OrderFormContainer from './OrderFormContainer';

describe('OrderFormContainer', () => {
  function renderOrderFormContainer() {
    return render((
      <OrderFormContainer />
    ));
  }

  it('renders the order form', () => {
    const { container } = renderOrderFormContainer();

    expect(container).toHaveTextContent('주문자 이름');
    expect(container).toHaveTextContent('주문자 연락처');
    expect(container).toHaveTextContent('주문수량');
    expect(container).toHaveTextContent('배송지');
    expect(container).toHaveTextContent('주문하기');
  });
});
