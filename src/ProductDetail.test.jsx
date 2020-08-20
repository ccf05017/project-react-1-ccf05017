import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ProductDetail from './ProductDetail';

import { productFixture } from '../fixtures/products';

jest.mock('react-redux');

describe('ProductDetail', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      orderForm: {
        username: '',
        phoneNumber: '',
        amount: 0,
        address: '',
      },
      orderFormModalOpen: given.open,
    }));
  });

  it('renders the product detail and order form', () => {
    const { container } = render((
      <ProductDetail product={productFixture} orderFormModalOpen={false} />
    ));

    expect(container).toHaveTextContent('상품 상세');
    expect(container).toHaveTextContent('주문하기');
  });

  context('with modal opened', () => {
    useSelector.mockClear();

    given('open', () => true);

    it('renders the order form modal', () => {
      const { container } = render((
        <ProductDetail product={productFixture} orderFormModalOpen />
      ));

      expect(container).toHaveTextContent('주문서');
    });
  });
});
