import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import HomePage from './CategoryList';

import categoriesFixture from '../fixtures/categories';

describe('HomePage', () => {
  const handleMouseOver = jest.fn();

  function renderHomePage() {
    return render((
      <HomePage
        categories={categoriesFixture}
        onMouseOver={handleMouseOver}
      />
    ));
  }

  it('renders the title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('YenTopper');
  });

  it('renders the categories', () => {
    const { container } = renderHomePage();

    categoriesFixture.forEach((category) => {
      expect(container).toHaveTextContent(category.name);
    });
  });

  it('listens the mouse over event on categories', () => {
    const categoryFixtureIndex = 0;
    const categoryName = categoriesFixture[categoryFixtureIndex].name;
    const categoryId = categoriesFixture[categoryFixtureIndex].id;

    const { getByText } = renderHomePage();

    fireEvent.mouseOver(getByText(categoryName));

    expect(handleMouseOver).toBeCalledWith(categoryId);
  });
});
