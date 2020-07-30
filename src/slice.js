import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories, fetchProducts } from '../services/api';

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
    const products = await fetchProducts();

    dispatch(setCategories(categories));
    dispatch(setProducts(products));
  };
}

export function loadProductDetail(productId) {
  // TODO: 상품 상세 정보를 가져와서 리덕스 상태에 등록하도록 기능 구현 필요
  // 1. setProduct
  // 2. 상태 업데이트 하기 위한 자료 받아오기
}

export default reducer;
