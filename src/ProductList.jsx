import React from 'react';

import styled from '@emotion/styled';

import ProductItemContainer from './ProductItemContainer';

const ProductsLayout = styled('ul')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  column-gap: 1%;
`;

export default function ProductList({ products }) {
  return (
    <>
      <ProductsLayout>
        {products.map((product) => (
          <ProductItemContainer
            key={product.id}
            product={product}
          />
        ))}
      </ProductsLayout>
    </>
  );
}
