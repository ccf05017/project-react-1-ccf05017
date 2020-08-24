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

  it('renders the categories', () => {
    const { container } = renderCategoryList();

    categoriesFixture.forEach((category) => {
      expect(container).toHaveTextContent(category.name);
    });
  });
});
