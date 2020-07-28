import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import Homepage from './Homepage';

import categoriesFixture from '../fixtures/categories';
import productsFixture from '../fixtures/products';

jest.mock('react-redux');

describe('Homepage', () => {
  const selectedCategoryIndex = 0;
  const selectedCategory = categoriesFixture[selectedCategoryIndex];
  const selectedProductList = productsFixture.filter(
    (product) => selectedCategory.id === product.typeId,
  );

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedCategory,
      products: productsFixture,
      categories: categoriesFixture,
    }));
  });

  it('renders the homepage', () => {
    const categoryListHeader = 'YenTopper';

    const { container } = render((
      <Homepage />
    ));

    expect(container).toHaveTextContent(categoryListHeader);

    selectedProductList.forEach((selectedProduct) => {
      expect(container).toHaveTextContent(selectedProduct.title);
      expect(container).toHaveTextContent(selectedProduct.price);
    });
  });
});
