import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  loadInitialState,
  setCategories,
  selectCategory,
  setProducts,
  setProduct,
  loadProductDetail,
  changeOrderForm,
} from './slice';

import categoriesFixture from '../fixtures/categories';
import productsFixture, { productFixture } from '../fixtures/products';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('reducer', () => {
  context('when the application first loaded', () => {
    const initialState = {
      categories: [],
      selectedCategory: null,
      products: [],
      product: null,
      orderForm: {
        username: '',
        phoneNumber: '',
        amount: 0,
        address: '',
      },
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

  describe('setProducts', () => {
    it('can set product list', () => {
      const initialState = {
        products: [],
      };

      const state = reducer(initialState, setProducts(productsFixture));

      expect(state.products).toEqual(productsFixture);
    });
  });

  describe('setProduct', () => {
    it('cat set product state', () => {
      const initialState = {
        product: null,
      };

      const state = reducer(initialState, setProduct(productFixture));

      expect(state.product).toEqual(productFixture);
    });
  });

  describe('changeOrderForm', () => {
    it('can change OrderForm values', () => {
      const name = 'username';
      const value = '홍길동';

      const initialState = {
        orderForm: {
          username: '',
          phoneNumber: '',
          amount: 0,
          address: '',
        },
      };

      const state = reducer(initialState, changeOrderForm({ name, value }));

      expect(state.orderForm.username).toBe(value);
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
      expect(actions[1]).toEqual(setProducts(productsFixture));
    });
  });

  describe('loadProductDetail', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('can get product detail', async () => {
      await store.dispatch(loadProductDetail(productFixture.id));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setProduct(productFixture));
    });
  });
});
