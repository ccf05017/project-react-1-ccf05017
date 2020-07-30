import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Homepage from './Homepage';

export default function RoutePage() {
  return (
    <>
      <h1>
        <Link to="/">
          YenTopper
        </Link>
      </h1>
      <Switch>
        <Route to="/" component={Homepage} />
      </Switch>
    </>
  );
}
