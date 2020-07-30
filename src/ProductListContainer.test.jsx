import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import ProductListContainer from './ProductListContainer';

import productsFixture from '../fixtures/products';
import {
  selectedCategoryFixture,
  notSelectedCategoryFixture,
} from '../fixtures/categories';

jest.mock('react-redux');

describe('ProductListContainer', () => {
  function renderProductListContainer() {
    return render((
      <MemoryRouter>
        <ProductListContainer />
      </MemoryRouter>
    ));
  }

  context('without selected category', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        products: productsFixture,
        selectedCategory: null,
      }));
    });

    it('renders the all products', () => {
      const { container } = renderProductListContainer();

      productsFixture.forEach((productFixture) => {
        expect(container).toHaveTextContent(productFixture.title);
        expect(container).toHaveTextContent(productFixture.price);
      });
    });
  });

  context('with selected category', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        products: productsFixture,
        selectedCategory: selectedCategoryFixture,
      }));
    });

    it('renders the products which is filtered by category', () => {
      function getFilteredProduct(category) {
        return productsFixture.find(
          (productFixture) => productFixture.typeId === category.id,
        );
      }

      const { container } = renderProductListContainer();

      expect(container).toHaveTextContent(getFilteredProduct(selectedCategoryFixture).title);
      expect(container).toHaveTextContent(getFilteredProduct(selectedCategoryFixture).price);

      expect(container).not.toHaveTextContent(getFilteredProduct(notSelectedCategoryFixture).title);
      expect(container).not.toHaveTextContent(getFilteredProduct(notSelectedCategoryFixture).price);
    });
  });
});
