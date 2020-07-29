import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryListContainer from './CategoryListContainer';

import categoriesFixture from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoryListContainer', () => {
  const dispatch = jest.fn();
  const selectedCategoryIndex = 1;

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: categoriesFixture,
      selectedCategory: categoriesFixture[selectedCategoryIndex],
    }));

    useDispatch.mockImplementation(() => dispatch);

    dispatch.mockClear();
  });

  it('renders the CategoryListContainer', () => {
    const categoryTitle = '카테고리';

    const { container } = render((
      <CategoryListContainer />
    ));

    expect(container).toHaveTextContent(categoryTitle);
  });
});
