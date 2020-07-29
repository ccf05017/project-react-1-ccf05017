import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoryList from './CategoryList';

import categoriesFixture, {
  selectedCategoryFixture,
} from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoryList', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedCategory: selectedCategoryFixture,
    }));
  });

  function renderCategoryList() {
    return render((
      <CategoryList
        categories={categoriesFixture}
      />
    ));
  }

  it('renders the category title', () => {
    const categoryTitle = '카테고리';

    const { container } = renderCategoryList();

    expect(container).toHaveTextContent(categoryTitle);
  });

  it('renders the categories', () => {
    const { container } = renderCategoryList();

    categoriesFixture.forEach((category) => {
      expect(container).toHaveTextContent(category.name);
    });
  });
});
