import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryItem from './CategoryItem';

import {
  selectedCategoryFixture,
} from '../fixtures/categories';

describe('CategoryItem', () => {
  const handleClick = jest.fn();

  function renderCategoryItem() {
    return render((
      <CategoryItem
        category={selectedCategoryFixture}
        onClick={handleClick}
      />
    ));
  }

  it('listens the mouse over event on categories', () => {
    const { getByText } = renderCategoryItem();

    fireEvent.click(getByText(selectedCategoryFixture.name));

    expect(handleClick).toBeCalledWith(selectedCategoryFixture.id);
  });
});
