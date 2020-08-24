import React from 'react';

import { useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { clearCategoryFilter } from './slice';

import HeaderLogoContainer from './HeaderLogoContainer';

jest.mock('react-redux');
jest.mock('./assets');

describe('HeaderLogoContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  context('when clicked', () => {
    it('clear category filter', () => {
      const logoText = 'YenTopper';

      const { getByAltText } = render((
        <MemoryRouter>
          <HeaderLogoContainer />
        </MemoryRouter>
      ));

      fireEvent.click(getByAltText(logoText));

      expect(dispatch).toBeCalledWith(clearCategoryFilter());
    });
  });
});
