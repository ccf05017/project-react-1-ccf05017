import React from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialState } from './slice';

import HomePageContainer from './HomePageContainer';

export default function App() {
  const dispatch = useDispatch();

  dispatch(loadInitialState());

  return (
    <HomePageContainer />
  );
}
