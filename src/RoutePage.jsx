import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomepageContainer from './HomepageContainer';
import ProductDetailContainer from './ProductDetailContainer';

export default function RoutePage() {
  return (
    <>
      <h1>
        <Link to="/">
          YenTopper
        </Link>
      </h1>
      <Switch>
        <Route exact path="/" component={HomepageContainer} />
        <Route path="/products/:id" component={ProductDetailContainer} />
      </Switch>
    </>
  );
}
