import React from 'react';

import { render } from '@testing-library/react';

import HomePageContainer from './HomePageContainer';

describe('HomePageContainer', () => {
  it('renders the HomePage', () => {
    const { container } = render((
      <HomePageContainer />
    ));

    expect(container).toHaveTextContent('YenTopper');
  });
});
