import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import AppLayout from './AppLayout';

import productsFixture, { productFixture } from '../fixtures/products';
import categoriesFixture, { selectedCategoryFixture } from '../fixtures/categories';

jest.mock('react-redux');
jest.mock('./assets');

describe('AppLayout', () => {
  const storeTitle = 'YenTopper';
  const productDetailTitle = '상품 상세';

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      selectedCategory: selectedCategoryFixture,
      products: productsFixture,
      categories: categoriesFixture,
      product: productFixture,
      orderForm: {
        username: '',
        phoneNumber: '',
        amount: 0,
        address: '',
      },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with path /', () => {
    it('renders the homepage', () => {
      const { container, getByAltText } = render((
        <MemoryRouter initialEntries={['/']}>
          <AppLayout />
        </MemoryRouter>
      ));

      expect(getByAltText(storeTitle)).not.toBeNull();
      expect(container).toHaveTextContent(productsFixture[0].title);
    });
  });

  context('with path /products/1', () => {
    it('renders the product detail page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/products/1']}>
          <AppLayout />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent(productDetailTitle);
    });
  });
});
