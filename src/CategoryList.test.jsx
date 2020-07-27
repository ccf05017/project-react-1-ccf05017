import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryList from './CategoryList';

import categoriesFixture from '../fixtures/categories';

describe('CategoryList', () => {
  const handleMouseOver = jest.fn();

  function renderCategoryList() {
    return render((
      <CategoryList
        categories={categoriesFixture}
        onMouseOver={handleMouseOver}
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

  it('listens the mouse over event on categories', () => {
    const categoryFixtureIndex = 0;
    const categoryName = categoriesFixture[categoryFixtureIndex].name;
    const categoryId = categoriesFixture[categoryFixtureIndex].id;

    const { getByText } = renderCategoryList();

    fireEvent.mouseOver(getByText(categoryName));

    expect(handleMouseOver).toBeCalledWith(categoryId);
  });
});
