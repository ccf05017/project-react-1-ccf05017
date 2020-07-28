import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import HomePageContainer from './HomePageContainer';

import categoriesFixture from '../fixtures/categories';

jest.mock('react-redux');

describe('HomePageContainer', () => {
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

  it('renders the HomePage', () => {
    const { container } = render((
      <HomePageContainer />
    ));

    expect(container).toHaveTextContent('YenTopper');
  });

  context('when mouse over on category list', () => {
    it('select the category', () => {
      const targetCategoryIndex = 0;
      const categoryName = categoriesFixture[targetCategoryIndex].name;
      const categoryId = categoriesFixture[targetCategoryIndex].id;

      const { getByText } = render((
        <HomePageContainer />
      ));

      fireEvent.mouseOver(getByText(categoryName));

      expect(dispatch).toBeCalledWith({
        type: 'application/selectCategory',
        payload: categoryId,
      });
    });
  });
});
