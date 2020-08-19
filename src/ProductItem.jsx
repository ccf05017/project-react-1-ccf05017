import React from 'react';

import styled from '@emotion/styled';

import IMG_API_SERVER from '../services/imageApi';

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

export default function ProductItem({ product, onClick }) {
  return (
    <ProductItemLayout>
      <a href="" onClick={onClick}>
        <ProductImage image={`${IMG_API_SERVER}/${product.img}`}>
          <img src={`${IMG_API_SERVER}/${product.img}`} alt="상품사진" />
        </ProductImage>
        <p>{`상품명: ${product.title}`}</p>
        <p>{`가격: ${product.price}원`}</p>
      </a>
    </ProductItemLayout>
  );
}
