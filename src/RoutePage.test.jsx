import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import RoutePage from './RoutePage';

describe('RoutePage', () => {
  const storeTitle = 'YenTopper';
  const categoryTitle = '카테고리';
  const productTitle = '상품';

  context('with path /', () => {
    it('renders the homepage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <RoutePage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent(storeTitle);
      expect(container).toHaveTextContent(categoryTitle);
      expect(container).toHaveTextContent(productTitle);
    });
  });
});
