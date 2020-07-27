import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import HomePageContainer from './HomePageContainer';

import categoriesFixture from '../fixtures/categories';

jest.mock('react-redux');

describe('HomePageContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: categoriesFixture,
    }));
  });

  it('renders the HomePage', () => {
    const { container } = render((
      <HomePageContainer />
    ));

    expect(container).toHaveTextContent('YenTopper');
  });
});
