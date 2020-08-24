import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { openOrderFormModal } from './slice';

import ProductDetailContainer from './ProductDetailContainer';

import { productFixture } from '../fixtures/products';

jest.mock('react-redux');

describe('ProductDetailContainer', () => {
  const productDetailTitle = '상품 상세';
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      product: given.product,
      orderForm: {
        username: '',
        phoneNumber: '',
        amount: 0,
        address: '',
      },
      orderFormModalOpen: false,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderProductDetailContainer() {
    return render((
      <ProductDetailContainer params={{ id: productFixture.id }} />
    ));
  }

  context('with product detail info', () => {
    useSelector.mockClear();

    given('product', () => (productFixture));

    it('renders the product detail', () => {
      const { container } = renderProductDetailContainer();

      expect(container).toHaveTextContent(productDetailTitle);
      expect(container).toHaveTextContent(`${productFixture.title}`);
      expect(container).toHaveTextContent(`${productFixture.price}`);
    });

    it('loads the product detail and clear order result', () => {
      renderProductDetailContainer();

      expect(dispatch).toBeCalledTimes(2);
    });

    it('can open the order form modal', () => {
      const { getByText } = renderProductDetailContainer();

      expect(dispatch).toBeCalledTimes(2);
      fireEvent.click(getByText('주문하기'));

      expect(dispatch).toBeCalledTimes(4);
    });
  });

  context('without product detail info', () => {
    useSelector.mockClear();

    given('product', () => (null));

    it('renders the loading comment', () => {
      const { container } = renderProductDetailContainer();

      expect(container).toHaveTextContent('로딩중입니다');
    });
  });
});
