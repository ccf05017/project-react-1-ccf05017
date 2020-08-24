import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ProductItemContainer from './ProductItemContainer';

import { productFixture } from '../fixtures/products';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory() {
    return { push: mockPush };
  },
}));
jest.mock('./assets/index');

describe('ProductItemContainer', () => {
  function renderProductItemContainer() {
    return render((
      <ProductItemContainer product={productFixture} />
    ));
  }

  it('renders the ProductItem', () => {
    const { container } = renderProductItemContainer();

    expect(container).toHaveTextContent(productFixture.title);
    expect(container).toHaveTextContent(productFixture.price);
  });

  it('listens the click event', () => {
    const { getByText } = renderProductItemContainer();

    fireEvent.click(getByText(`상품명: ${productFixture.title}`));

    expect(mockPush).toBeCalledWith(`/products/${productFixture.id}`);
  });
});
