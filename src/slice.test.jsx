import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  getInitialState,
  setCategories,
} from './slice';

import categoriesFixture from '../fixtures/categories';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('reducer', () => {
  context('when the application first loaded', () => {
    const initialState = {
      categories: [],
    };

    it('returns the initialStates', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
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

describe('async actions', () => {
  let store;

  describe('getInitialState', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('can get initial states', async () => {
      await store.dispatch(getInitialState());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories(categoriesFixture));
    });
  });
});
