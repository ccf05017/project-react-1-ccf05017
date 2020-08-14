import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomepageContainer from './HomepageContainer';
import ProductDetailContainer from './ProductDetailContainer';

export default function ContentPage() {
  return (
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/products/:id" component={ProductDetailContainer} />
    </Switch>
  );
}
