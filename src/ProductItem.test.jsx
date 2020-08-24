import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ProductItem from './ProductItem';

import { productFixture } from '../fixtures/products';

jest.mock('./assets/index');

describe('ProductItem', () => {
  const handleClick = jest.fn();

  it('listens the click event', () => {
    const { getByText } = render((
      <ProductItem
        product={productFixture}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText(`상품명: ${productFixture.title}`));

    expect(handleClick).toBeCalled();
  });
});
