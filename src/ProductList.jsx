import React from 'react';

import styled from '@emotion/styled';

import ProductItemContainer from './ProductItemContainer';

const ProductsContainer = styled('div')`
  margin-top: 45px;
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
