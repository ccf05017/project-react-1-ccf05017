import React from 'react';

import styled from '@emotion/styled';

import IMG_API_SERVER from '../services/imageApi';

import ProductDetailDescription from './ProductDetailDescription';
import OrderFormModal from './OrderFormModal';

const ProductDetailBody = styled('div')`
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
  min-width: 300px;

  @media(min-width: 768px) {
    min-width: 400px;
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

export default function ProductDetail({
  product, orderFormModalOpen, openModal, closeModal,
}) {
  return (
    <>
      <ProductDetailTitle>
        상품 상세
      </ProductDetailTitle>

      <ProductDetailBody>
        <ProductDetailImage image={`${IMG_API_SERVER}/${product.detailImgs[0]}`}>
          <img
            src={`${IMG_API_SERVER}/${product.detailImgs[0]}`}
            alt="birthday_product_detail"
          />
        </ProductDetailImage>
        <ProductDetailDescription
          product={product}
          openModal={openModal}
        />
      </ProductDetailBody>

      <OrderFormModal
        open={orderFormModalOpen}
        closeModal={closeModal}
      />
    </>
  );
}
