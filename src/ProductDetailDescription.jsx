import React from 'react';

import styled from '@emotion/styled';

const ProductDetailDescriptionLayout = styled('div')`
  font-size: 1.4rem;
  padding-left: 1rem;
`;

export default function ProductDetailDescription({ product }) {
  return (
    <ProductDetailDescriptionLayout>
      <p>
        상품명:
        {' '}
        {product.title}
      </p>
      <p>
        가격:
        {' '}
        {product.price}
        {' '}
        원
      </p>
      <button type="button">주문하기</button>
    </ProductDetailDescriptionLayout>
  );
}
