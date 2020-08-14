import React from 'react';

import styled from '@emotion/styled';

import ProductItemContainer from './ProductItemContainer';

const ProductsContainer = styled('div')`
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 0 14px;
`;

export default function ProductList({ products }) {
  return (
    <>
      <ProductsContainer>
        <h2>상품</h2>
        <ul>
          {products.map((product) => (
            <ProductItemContainer
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      </ProductsContainer>
    </>
  );
}
