import { createSlice } from '@reduxjs/toolkit';

import categoriesFixture from '../fixtures/categories';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    categories: [],
  },
  reducers: {
    getInitialState(state) {
      return {
        ...state,
        categories: categoriesFixture,
        // TODO: API 콜로 데이터를 가져오도록 변경 필요
      };
    },
  },
});

export const {
  getInitialState,
} = actions;

export default reducer;
