import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders the title', () => {
    const { container } = render((
      <HomePage />
    ));

    expect(container).toHaveTextContent('YenTopper');
  });

  it('renders the categories', () => {
    const categories = ['생일', '육아', '여행', '결혼'];

    const { container } = render((
      <HomePage />
    ));

    categories.forEach((category) => {
      expect(container).toHaveTextContent(category);
    });
  });
});
