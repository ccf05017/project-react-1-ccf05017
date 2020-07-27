import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import categoriesFixture from '../fixtures/categories';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: categoriesFixture,
    }));
  });

  it('renders the HomePage', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('YenTopper');
  });
});
