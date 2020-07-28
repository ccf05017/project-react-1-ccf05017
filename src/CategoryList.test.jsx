import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoryList from './CategoryList';

import categoriesFixture from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoryList', () => {
  const handleMouseOver = jest.fn();

  beforeEach(() => {
    const selectedCategoryIndex = 1;

    useSelector.mockImplementation((selector) => selector({
      selectedCategory: categoriesFixture[selectedCategoryIndex],
    }));
  });

  function renderCategoryList() {
    return render((
      <CategoryList
        categories={categoriesFixture}
      />
    ));
  }

  it('renders the title', () => {
    const { container } = renderCategoryList();

    expect(container).toHaveTextContent('YenTopper');
  });

  it('renders the categories', () => {
    const { container } = renderCategoryList();

    categoriesFixture.forEach((category) => {
      expect(container).toHaveTextContent(category.name);
    });
  });
});
