import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import categoriesFixture, {
  selectedCategoryFixture,
} from '../fixtures/categories';

import productsFixture from '../fixtures/products';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      categories: categoriesFixture,
      selectedCategory: selectedCategoryFixture,
      products: productsFixture,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders the HomePage', () => {
    const categoryHeader = '카테고리';

    const { container } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();
    expect(container).toHaveTextContent(categoryHeader);
  });
});
