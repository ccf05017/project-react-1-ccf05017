import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoryItemContainer from './CategoryItemContainer';

import categoriesFixture from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoryItemContainer', () => {
  const notSelectedCategoryIndex = 0;
  const selectedCategoryIndex = 1;
  const notSelectedCategory = categoriesFixture[notSelectedCategoryIndex];
  const selectedCategory = categoriesFixture[selectedCategoryIndex];

  const handleMouseOver = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedCategory,
    }));
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
  });
});
