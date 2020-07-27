import reducer, {
  getInitialState,
} from './slice';

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
});
