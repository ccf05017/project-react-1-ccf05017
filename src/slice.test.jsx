import reducer, {
  getInitialState,
} from './slice';

import categoriesFixture from '../fixtures/categories';

describe('reducer', () => {
  describe('getInitialState', () => {
    it('can get initial states', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, getInitialState());

      expect(state.categories).toHaveLength(4);
    });
  });

  describe('setCategories', () => {
    it('can set categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categoriesFixture));

      expect(state.categories).toEqual(categoriesFixture);
    });
  });
});
