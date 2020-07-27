import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryItem from './CategoryItem';

import categoriesFixture from '../fixtures/categories';

describe('CategoryItem', () => {
  const handleMouseOver = jest.fn();

  const categoryFixtureIndex = 0;

  function renderHomePage() {
    return render((
      <CategoryItem
        category={categoriesFixture[categoryFixtureIndex]}
        onMouseOver={handleMouseOver}
      />
    ));
  }

  it('listens the mouse over event on categories', () => {
    const categoryName = categoriesFixture[categoryFixtureIndex].name;
    const categoryId = categoriesFixture[categoryFixtureIndex].id;

    const { getByText } = renderHomePage();

    fireEvent.mouseOver(getByText(categoryName));

    expect(handleMouseOver).toBeCalledWith(categoryId);
  });
});
