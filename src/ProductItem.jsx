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
  background-image: url(${(props) => props.image});

  & > img {
    display: none;
  }
`;

const imageServer = 'https://3.34.86.117:8000/images/';

export default function ProductItem({ product, onClick }) {
  return (
    <ProductItemLayout>
      <a href="" onClick={onClick}>
        <ProductImage image={`${imageServer}${product.img}`}>
          <img src={`${imageServer}${product.img}`} alt="상품사진" />
        </ProductImage>
        <p>{`상품명: ${product.title}`}</p>
        <p>{`가격: ${product.price}원`}</p>
      </a>
    </ProductItemLayout>
  );
}
