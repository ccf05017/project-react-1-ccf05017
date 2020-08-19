import React from 'react';

import styled from '@emotion/styled';
import OrderFormContainer from './OrderFormContainer';

const ProductDetailImage = styled('figure')`
  padding-bottom: 100%;
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.image});
  max-width: 500px;
  max-height: 500px;

  @media (min-width: 768px) {
    padding-bottom: 70%;
  }

  @media (min-width: 1024px) {
    padding-bottom: 50%;
  }

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
