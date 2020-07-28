import React from 'react';

import { render } from '@testing-library/react';

import Homepage from './Homepage';

import categoriesFixture from '../fixtures/categories';
import productsFixture from '../fixtures/products';

describe('Homepage', () => {
  const selectedCategoryIndex = 0;
  const selectedCategory = categoriesFixture[selectedCategoryIndex];
  const selectedProductList = productsFixture.filter(
    (product) => selectedCategory.id === product.typeId,
  );

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
