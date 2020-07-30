import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Homepage from './Homepage';

function ProductDetail() {
  return (
    <h2>상품 상세</h2>
  );
}

export default function RoutePage() {
  return (
    <>
      <h1>
        <Link to="/">
          YenTopper
        </Link>
      </h1>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </>
  );
}
