import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoryItemContainer from './CategoryItemContainer';

import categoriesFixture from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoryItemContainer', () => {
  const renderedCategoryIndex = 0;
  const selectedCategoryIndex = 1;
  const renderedCategoryName = categoriesFixture[renderedCategoryIndex].name;

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      selectedCategory: categoriesFixture[selectedCategoryIndex],
    }));
  });

  context('without selected', () => {
    it('renders the normal item', () => {
      const { container } = render((
        <CategoryItemContainer />
      ));

      expect(container).toHaveTextContent(renderedCategoryName);
    });
  });
});
