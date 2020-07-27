import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from '../services/api';
import categories from '../fixtures/categories';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    categories: [],
    selectedCategory: null,
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
        selectedCategory: categories.find((category) => category.id === categoryId),
      };
    },
  },
});

export const {
  setCategories,
  selectCategory,
} = actions;

export function getInitialState() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export default reducer;
