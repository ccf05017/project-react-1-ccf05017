import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ProductListContainer from './ProductListContainer';

import productsFixture from '../fixtures/products';

describe('ProductListContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      products: productsFixture,
    }));
  });

  const { container } = render((
    <ProductListContainer />
  ));

  productsFixture.forEach((productFixture) => {
    expect(container).toHaveTextContent(productFixture.title);
    expect(container).toHaveTextContent(productFixture.price);
  });
});
