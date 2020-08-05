import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategories,
  fetchProducts,
  fetchProduct,
  requestOrder,
} from '../services/api';

const initialOrderForm = {
  username: '',
  phoneNumber: '',
  amount: 0,
  address: '',
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    categories: [],
    selectedCategory: null,
    products: [],
    product: null,
    orderForm: initialOrderForm,
    orderResult: null,
  },
  reducers: {
    setCategories(state, { payload: categories }) {
      return {
        ...state,
        categories,
      };
    },

    selectCategory(state, { payload: categoryId }) {
      return {
        ...state,
        selectedCategory: state.categories.find((category) => category.id === categoryId),
      };
    },

    setProducts(state, { payload: products }) {
      return {
        ...state,
        products,
      };
    },

    setProduct(state, { payload: product }) {
      return {
        ...state,
        product,
      };
    },

    changeOrderForm(state, { payload: { name, value } }) {
      return {
        ...state,
        orderForm: {
          ...state.orderForm,
          [name]: value,
        },
      };
    },

    clearOrderForm(state) {
      return {
        ...state,
        orderForm: initialOrderForm,
      };
    },

    setOrderResult(state, { payload: orderResult }) {
      return {
        ...state,
        orderResult,
      };
    },

    clearOrderResult(state) {
      return {
        ...state,
        orderResult: null,
      };
    },
  },
});

export const {
  setCategories,
  selectCategory,
  setProducts,
  setProduct,
  changeOrderForm,
  setOrderResult,
  clearOrderResult,
  clearOrderForm,
} = actions;

export function loadInitialState() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    const products = await fetchProducts();

    dispatch(setCategories(categories));
    dispatch(setProducts(products));
  };
}

export function loadProductDetail(productId) {
  return async (dispatch) => {
    const product = await fetchProduct(productId);

    dispatch(setProduct(product));
  };
}

export function orderProduct() {
  return async (dispatch, getState) => {
    const {
      product: { id }, orderForm: {
        username, phoneNumber, amount, address,
      },
    } = getState();

    const orderResult = await requestOrder({
      id, username, phoneNumber, amount, address,
    });

    dispatch(setOrderResult(orderResult));
  };
}

export default reducer;
