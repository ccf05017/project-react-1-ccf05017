import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import ProductListContainer from './ProductListContainer';
import ProductDetailContainer from './ProductDetailContainer';

export default function ContentPage() {
  return (
    <Switch>
      <Route exact path="/" component={ProductListContainer} />
      <Route path="/products/:id" component={ProductDetailContainer} />
    </Switch>
  );
}
