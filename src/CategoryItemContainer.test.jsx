import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoryItemContainer from './CategoryItemContainer';

import {
  selectedCategoryFixture,
  notSelectedCategoryFixture,
} from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoryItemContainer', () => {
  const handleClick = jest.fn();

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      selectedCategory: selectedCategoryFixture,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderCategoryItemContainer(category) {
    return render((
      <CategoryItemContainer
        category={category}
        onClick={handleClick}
      />
    ));
  }

  context('without selected', () => {
    it('renders the normal item', () => {
      const { container } = renderCategoryItemContainer(notSelectedCategoryFixture);

      expect(container).toHaveTextContent(notSelectedCategoryFixture.name);
    });
  });

  context('with selected', () => {
    it('renders the selected item', () => {
      const { getByText } = renderCategoryItemContainer(selectedCategoryFixture);

      const { className } = getByText(selectedCategoryFixture.name);
      const style = window.getComputedStyle(document.getElementsByClassName(className)[0]);

      expect(style.color).toBe('white');
    });

    it('select the category', () => {
      const { getByText } = renderCategoryItemContainer(selectedCategoryFixture);

      fireEvent.click(getByText(`${selectedCategoryFixture.name}`));

      expect(dispatch).toBeCalledWith({
        type: 'application/selectCategory',
        payload: selectedCategoryFixture.id,
      });
    });
  });
});
