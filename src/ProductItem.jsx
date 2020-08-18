import React from 'react';

import styled from '@emotion/styled';

import { LogoImage } from './assets/index';

const ProductItemLayout = styled('li')`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;  
`;

const ProductImage = styled('figure')`
  height: 0;
  padding-bottom: 100%;
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${LogoImage});

  & > img {
    display: none;
  }
`;

export default function ProductItem({ product, onClick }) {
  return (
    <ProductItemLayout>
      <a href="" onClick={onClick}>
        <ProductImage>
          <img src={LogoImage} alt="상품사진" />
        </ProductImage>
        <p>{product.title}</p>
        <p>{product.price}</p>
      </a>
    </ProductItemLayout>
  );
}
