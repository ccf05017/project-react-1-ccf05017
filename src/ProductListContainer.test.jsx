import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ProductListContainer from './ProductListContainer';

import productsFixture from '../fixtures/products';

jest.mock('react-redux');

describe('ProductListContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      products: productsFixture,
    }));
  });

  it('renders the products', () => {
    const { container } = render((
      <ProductListContainer />
    ));

    productsFixture.forEach((productFixture) => {
      expect(container).toHaveTextContent(productFixture.title);
      expect(container).toHaveTextContent(productFixture.price);
    });
  });
});
