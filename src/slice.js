import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategories,
  fetchProducts,
  fetchProduct,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
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

    orderSuccess(state) {
      return {
        ...state,
        orderResult: true,
      };
    },

    orderFail(state) {
      return {
        ...state,
        orderResult: false,
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
  orderSuccess,
  orderFail,
  clearOrderResult,
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
  return async (dispatch) => {

  };
}

export default reducer;
