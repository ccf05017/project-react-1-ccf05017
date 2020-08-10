import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Header';
import HomepageContainer from './HomepageContainer';
import ProductDetailContainer from './ProductDetailContainer';

export default function RoutePage() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomepageContainer} />
        <Route path="/products/:id" component={ProductDetailContainer} />
      </Switch>
    </>
  );
}
