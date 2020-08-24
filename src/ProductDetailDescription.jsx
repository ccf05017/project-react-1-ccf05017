import React from 'react';

import styled from '@emotion/styled';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const ProductDetailDescriptionLayout = styled('div')`
  padding-top: 0.5rem;
  flex-grow: 1;
  padding-left: 1rem;
`;

const ProductDetailMainTitle = styled('p')`
  font-weight: 700;
  font-size: 1.5rem;
`;

const ProductDetailSubTitle = styled('p')`
  font-size: 1.2rem;
  color: #999;
  line-height: 20px;
  padding: 4px 60px 0 0;
  margin-bottom: 1.5rem;
`;

const Price = styled('span')`
  font-weight: 600;
  font-size: 1.7rem;
  letter-spacing: -.5px;
  color: #333;
`;

const Won = styled('span')`
  padding: 0 7px 0 2px;
  font-weight: 700;
  font-size: 1rem;
  vertical-align: 2px;
`;

const useStyles = makeStyles(() => ({
  orderButton: {
    width: '100%',
    marginTop: '1rem',
  },
}));

export default function ProductDetailDescription({ product, openModal }) {
  const classes = useStyles();

  return (
    <ProductDetailDescriptionLayout>
      <ProductDetailMainTitle>
        [YenTopper]
        {' '}
        {product.title}
      </ProductDetailMainTitle>
      <ProductDetailSubTitle>
        부제목이 스윽 들어올 예정
      </ProductDetailSubTitle>
      <Price>
        {product.price}
        <Won>원</Won>
      </Price>
      <Button
        variant="outlined"
        color="secondary"
        onClick={openModal}
        className={classes.orderButton}
      >
        주문하기
      </Button>
    </ProductDetailDescriptionLayout>
  );
}
