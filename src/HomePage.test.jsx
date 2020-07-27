import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

import categoriesFixture from '../fixtures/categories';

describe('HomePage', () => {
  function renderHomePage() {
    return render((
      <HomePage categories={categoriesFixture} />
    ));
  }

  it('renders the title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('YenTopper');
  });

  it('renders the categories', () => {
    const { container } = renderHomePage();

    categoriesFixture.forEach((category) => {
      expect(container).toHaveTextContent(category.name);
    });
  });
});
