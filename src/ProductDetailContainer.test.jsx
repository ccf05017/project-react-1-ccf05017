import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

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
      expect(container).toHaveTextContent(`상품명: ${productFixture.title}`);
      expect(container).toHaveTextContent(`가격: ${productFixture.price}`);
    });

    it('loads the product detail', () => {
      renderProductDetailContainer();

      expect(dispatch).toBeCalled();
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
