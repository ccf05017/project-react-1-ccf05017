import React from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialState } from './slice';

import Homepage from './Homepage';

export default function App() {
  const dispatch = useDispatch();

  dispatch(loadInitialState());

  return (
    <Homepage />
  );
}
