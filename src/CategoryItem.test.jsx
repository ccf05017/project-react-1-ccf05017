import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryItem from './CategoryItem';

import {
  selectedCategoryFixture,
} from '../fixtures/categories';

describe('CategoryItem', () => {
  const handleMouseOver = jest.fn();

  function renderCategoryItem() {
    return render((
      <CategoryItem
        category={selectedCategoryFixture}
        onMouseOver={handleMouseOver}
      />
    ));
  }

  it('listens the mouse over event on categories', () => {
    const { getByText } = renderCategoryItem();

    fireEvent.focus(getByText(selectedCategoryFixture.name));
    fireEvent.mouseOver(getByText(selectedCategoryFixture.name));

    expect(handleMouseOver).toBeCalledWith(selectedCategoryFixture.id);
  });
});
