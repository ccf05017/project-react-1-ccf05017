import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  loadInitialState,
  setCategories,
  selectCategory,
} from './slice';

import categoriesFixture from '../fixtures/categories';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('reducer', () => {
  context('when the application first loaded', () => {
    const initialState = {
      categories: [],
      selectedCategory: null,
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

  describe('selectCategory', () => {
    it('can select the category', () => {
      const initialState = {
        categories: categoriesFixture,
        selectedCategory: null,
      };

      const targetCategory = categoriesFixture[1];

      const state = reducer(initialState, selectCategory(targetCategory.id));

      expect(state.selectedCategory).toEqual(targetCategory);
    });
  });
});

describe('async actions', () => {
  let store;

  describe('loadInitialState', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('can get initial states', async () => {
      await store.dispatch(loadInitialState());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories(categoriesFixture));
    });
  });
});
