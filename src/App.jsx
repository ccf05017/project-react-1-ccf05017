import React from 'react';

import { useDispatch } from 'react-redux';

import { getInitialState } from './slice';

import HomePageContainer from './HomePageContainer';

export default function App() {
  const dispatch = useDispatch();

  dispatch(getInitialState());

  return (
    <HomePageContainer />
  );
}
