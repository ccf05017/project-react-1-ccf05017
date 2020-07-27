import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from '../services/api';

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

    selectCategory(state, { payload: selectedCategory }) {
      return {
        ...state,
        selectedCategory,
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
