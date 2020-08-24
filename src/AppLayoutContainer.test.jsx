import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import AppLayoutContainer from './AppLayoutContainer';

import categoriesFixture, {
  selectedCategoryFixture,
} from '../fixtures/categories';
import productsFixture from '../fixtures/products';

jest.mock('react-redux');
jest.mock('./assets');

describe('AppLayoutContainer', () => {
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
      <MemoryRouter>
        <AppLayoutContainer />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();
  });
});
