import { createSlice } from '@reduxjs/toolkit';

import categoriesFixture from '../fixtures/categories';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories(state, { payload: categories }) {
      return {
        ...state,
        categories,
      };
    },
  },
});

export const {
  setCategories,
} = actions;

export function getInitialState() {
  return async (dispatch) => {
    const categories = categoriesFixture;

    dispatch(setCategories(categories));
  };
}

export default reducer;
