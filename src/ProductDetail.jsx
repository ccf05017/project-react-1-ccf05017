import React from 'react';

import styled from '@emotion/styled';
import OrderFormContainer from './OrderFormContainer';

const ProductDetailLayout = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const ProductDetailImage = styled('figure')`
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.image});
  flex-shrink: 0;
  width: 100%;
  padding-bottom: 100%;

  @media(min-width: 768px) {
    width: 400px;
    height: 400px;
    padding-bottom: 0;
  }

  & > img {
    display: none;
  }
`;

const ProductDetailTitle = styled('h2')`
  padding-bottom: 1rem;
`;

const ProductDetailDescription = styled('div')`
  font-size: 1.4rem;
  padding-left: 1rem;
`;

export default function ProductDetail({ product }) {
  const imageServer = 'https://3.34.86.117:8000/images/';

  return (
    <>
      <ProductDetailTitle>상품 상세</ProductDetailTitle>
      <ProductDetailLayout>
        <ProductDetailImage image={`${imageServer}${product.detailImgs[0]}`}>
          <img src={`${imageServer}${product.detailImgs[0]}`} alt="birthday_product_detail" />
        </ProductDetailImage>
        <ProductDetailDescription>
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
        </ProductDetailDescription>
      </ProductDetailLayout>
      <OrderFormContainer />
    </>
  );
}
