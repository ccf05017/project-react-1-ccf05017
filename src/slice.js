import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    categories: [],
    selectedCategory: null,
    products: [],
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
  },
});

export const {
  setCategories,
  selectCategory,
  setProducts,
} = actions;

export function loadInitialState() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export default reducer;
