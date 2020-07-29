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
  const handleMouseOver = jest.fn();

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
        onMouseOver={handleMouseOver}
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
      const { container } = renderCategoryItemContainer(selectedCategoryFixture);

      expect(container).toHaveTextContent(`${selectedCategoryFixture.name}(O)`);
    });

    it('select the category', () => {
      const { getByText } = renderCategoryItemContainer(selectedCategoryFixture);

      fireEvent.mouseOver(getByText(`${selectedCategoryFixture.name}(O)`));

      expect(dispatch).toBeCalledWith({
        type: 'application/selectCategory',
        payload: selectedCategoryFixture.id,
      });
    });
  });
});
