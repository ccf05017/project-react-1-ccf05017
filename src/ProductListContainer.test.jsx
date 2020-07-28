import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ProductListContainer from './ProductListContainer';

import productsFixture from '../fixtures/products';
import categoriesFixture from '../fixtures/categories';

jest.mock('react-redux');

describe('ProductListContainer', () => {
  context('without selected category', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        products: productsFixture,
        selectedCategory: null,
      }));
    });

    it('renders the all products', () => {
      const { container } = render((
        <ProductListContainer />
      ));

      productsFixture.forEach((productFixture) => {
        expect(container).toHaveTextContent(productFixture.title);
        expect(container).toHaveTextContent(productFixture.price);
      });
    });
  });

  context('with selected category', () => {
    const selectedCategoryIndex = 0;
    const notSelectedCategoryIndex = 1;
    const selectedCategory = categoriesFixture[selectedCategoryIndex];
    const notSelectedCategory = categoriesFixture[notSelectedCategoryIndex];

    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        products: productsFixture,
        selectedCategory,
      }));
    });

    it('renders the products which is filtered by category', () => {
      function getFilteredProduct(category) {
        return productsFixture.find(
          (productFixture) => productFixture.typeId === category.id,
        );
      }

      const { container } = render((
        <ProductListContainer />
      ));

      expect(container).toHaveTextContent(getFilteredProduct(selectedCategory).title);
      expect(container).toHaveTextContent(getFilteredProduct(selectedCategory).price);

      expect(container).not.toHaveTextContent(getFilteredProduct(notSelectedCategory).title);
      expect(container).not.toHaveTextContent(getFilteredProduct(notSelectedCategory).price);
    });
  });
});
