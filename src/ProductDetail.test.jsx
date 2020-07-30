import React from 'react';

import { render } from '@testing-library/react';

import ProductDetail from './ProductDetail';

import { productFixture } from '../fixtures/products';

describe('ProductDetail', () => {
  const productDetailTitle = '상품 상세';

  it('renders the product detail', () => {
    const { container } = render((
      <ProductDetail productId={productFixture.id} />
    ));

    expect(container).toHaveTextContent(productDetailTitle);
    expect(container).toHaveTextContent(`상품명: ${productFixture.title}`);
    expect(container).toHaveTextContent(`가격: ${productFixture.price}`);
  });
});
