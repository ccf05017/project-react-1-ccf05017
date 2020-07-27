import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import categoriesFixture from '../fixtures/categories';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: categoriesFixture,
    }));

    useDispatch.mockImplementation(() => dispatch);

    dispatch.mockClear();
  });

  it('renders the HomePage', () => {
    const { container } = render((
      <App />
    ));

    expect(dispatch).toBeCalled();
    expect(container).toHaveTextContent('YenTopper');
  });
});
