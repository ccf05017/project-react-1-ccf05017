import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import HomepageContainer from './HomepageContainer';

import categoriesFixture, {
  selectedCategoryFixture,
} from '../fixtures/categories';
import productsFixture from '../fixtures/products';

jest.mock('react-redux');

describe('HomepageContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedCategory: selectedCategoryFixture,
      categories: categoriesFixture,
      products: productsFixture,
    }));
  });

  it('loads initial data', () => {
    render((
      <HomepageContainer />
    ));

    expect(dispatch).toBeCalled();
  });
});
