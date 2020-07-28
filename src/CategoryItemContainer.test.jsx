import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoryItemContainer from './CategoryItemContainer';

import categoriesFixture from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoryItemContainer', () => {
  const notSelectedCategoryIndex = 0;
  const selectedCategoryIndex = 1;
  const notSelectedCategory = categoriesFixture[notSelectedCategoryIndex];
  const selectedCategory = categoriesFixture[selectedCategoryIndex];

  const handleMouseOver = jest.fn();

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      selectedCategory,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderCategoryItemContainer(category) {
    return render((
      <CategoryItemContainer
        category={category}
        onMouseOver={handleMouseOver}
      />
    ));
  }

  context('without selected', () => {
    it('renders the normal item', () => {
      const { container } = renderCategoryItemContainer(notSelectedCategory);

      expect(container).toHaveTextContent(notSelectedCategory.name);
    });
  });

  context('with selected', () => {
    it('renders the selected item', () => {
      const { container } = renderCategoryItemContainer(selectedCategory);

      expect(container).toHaveTextContent(`${selectedCategory.name}(O)`);
    });

    it('select the category', () => {
      const { getByText } = renderCategoryItemContainer(selectedCategory);

      fireEvent.mouseOver(getByText(`${selectedCategory.name}(O)`));

      expect(dispatch).toBeCalledWith({
        type: 'application/selectCategory',
        payload: selectedCategory.id,
      });
    });
  });
});
