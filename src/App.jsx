import React from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialState } from './slice';

import CategoryListContainer from './CategoryListContainer';

export default function App() {
  const dispatch = useDispatch();

  dispatch(loadInitialState());

  return (
    <CategoryListContainer />
  );
}
