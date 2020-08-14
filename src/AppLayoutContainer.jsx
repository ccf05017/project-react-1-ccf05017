import React from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialState } from './slice';

import AppLayout from './AppLayout';

export default function AppLayoutContainer() {
  const dispatch = useDispatch();

  dispatch(loadInitialState());

  return (
    <AppLayout />
  );
}
