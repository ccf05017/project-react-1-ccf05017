import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ProductDetail from './ProductDetail';

import { productFixture } from '../fixtures/products';

jest.mock('react-redux');

describe('ProductDetail', () => {
  const productDetailTitle = '상품 상세';
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      product: productFixture,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders the product detail', () => {
    const { container } = render((
      <ProductDetail productId={productFixture.id} />
    ));

    expect(container).toHaveTextContent(productDetailTitle);
    expect(container).toHaveTextContent(`상품명: ${productFixture.title}`);
    expect(container).toHaveTextContent(`가격: ${productFixture.price}`);
  });

  it('loads the product detail', () => {
    render((
      <ProductDetail productId={productFixture.id} />
    ));

    expect(dispatch).toBeCalled();
  });
});
