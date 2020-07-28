import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoryItemContainer from './CategoryItemContainer';

import categoriesFixture from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoryItemContainer', () => {
  const renderedCategoryIndex = 0;
  const selectedCategoryIndex = 1;
  const renderedCategory = categoriesFixture[renderedCategoryIndex];
  const selectedCategory = categoriesFixture[selectedCategoryIndex];

  const handleMouseOver = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedCategory,
    }));
  });

  function renderCategoryItemContainer() {
    return render((
      <CategoryItemContainer
        category={renderedCategory}
        onMouseOver={handleMouseOver}
      />
    ));
  }

  context('without selected', () => {
    it('renders the normal item', () => {
      const { container } = renderCategoryItemContainer();

      expect(container).toHaveTextContent(renderedCategory.name);
    });
  });
});
