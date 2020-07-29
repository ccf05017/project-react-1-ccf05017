import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import Homepage from './Homepage';

import categoriesFixture, {
  selectedCategoryFixture,
  notSelectedCategoryFixture,
} from '../fixtures/categories';
import productsFixture, {
  filteredProductsFixture,
} from '../fixtures/products';

jest.mock('react-redux');

describe('Homepage', () => {
  const selectedCategory = selectedCategoryFixture;
  const selectedProductList = filteredProductsFixture;

  context('with selected category', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        selectedCategory,
        products: productsFixture,
        categories: categoriesFixture,
      }));
    });

    it('renders the homepage with filtered products', () => {
      const categoryListHeader = '카테고리';
      const notSelectedProduct = notSelectedCategoryFixture;

      const { container } = render((
        <Homepage />
      ));

      expect(container).toHaveTextContent(categoryListHeader);

      selectedProductList.forEach((selectedProduct) => {
        expect(container).toHaveTextContent(selectedProduct.title);
        expect(container).toHaveTextContent(selectedProduct.price);
        expect(container).not.toHaveTextContent(notSelectedProduct.title);
        expect(container).not.toHaveTextContent(notSelectedProduct.price);
      });
    });
  });

  context('without selected category', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        selectedCategory: null,
        products: productsFixture,
        categories: categoriesFixture,
      }));
    });

    it('renders the homepage with whole products', () => {
      const categoryListHeader = '카테고리';

      const { container } = render((
        <Homepage />
      ));

      expect(container).toHaveTextContent(categoryListHeader);

      productsFixture.forEach((product) => {
        expect(container).toHaveTextContent(product.title);
        expect(container).toHaveTextContent(product.price);
      });
    });
  });
});
