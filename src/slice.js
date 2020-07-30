import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories, fetchProducts } from '../services/api';

import { productFixture } from '../fixtures/products';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    categories: [],
    selectedCategory: null,
    products: [],
    product: null,
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
  },
});

export const {
  setCategories,
  selectCategory,
  setProducts,
  setProduct,
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
    dispatch(setCategories(productFixture));
  };
}

export default reducer;
