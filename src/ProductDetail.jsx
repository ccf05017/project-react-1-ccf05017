import React from 'react';

import styled from '@emotion/styled';
import OrderFormContainer from './OrderFormContainer';

const ProductDetailImage = styled('figure')`
  height: 0;
  padding-bottom: 100%;
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.image});

  & > img {
    display: none;
  }
`;

export default function ProductDetail({ product }) {
  const imageServer = 'https://3.34.86.117:8000/images/';

  return (
    <>
      <h2>상품 상세</h2>
      <ProductDetailImage image={`${imageServer}${product.detailImgs[0]}`} />
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
      <OrderFormContainer />
    </>
  );
}
