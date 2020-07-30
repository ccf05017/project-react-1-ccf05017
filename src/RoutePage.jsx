import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';

export default function RoutePage() {
  return (
    <>
      <h1>YenTopper</h1>
      <Switch>
        <Route to="/" component={Homepage} />
      </Switch>
    </>
  );
}
