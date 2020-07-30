import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import RoutePage from './RoutePage';

import productsFixture from '../fixtures/products';
import categoriesFixture, { selectedCategoryFixture } from '../fixtures/categories';

jest.mock('react-redux');

describe('RoutePage', () => {
  const storeTitle = 'YenTopper';
  const categoryTitle = '카테고리';
  const productTitle = '상품';
  const productDetailTitle = '상품 상세';

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      selectedCategory: selectedCategoryFixture,
      products: productsFixture,
      categories: categoriesFixture,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with path /', () => {
    it('renders the homepage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <RoutePage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent(storeTitle);
      expect(container).toHaveTextContent(categoryTitle);
      expect(container).toHaveTextContent(productTitle);
    });
  });

  context('with path /products/1', () => {
    it('renders the product detail page', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/products/1']}>
          <RoutePage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent(productDetailTitle);
    });
  });
});
