import React from 'react';

import { useSelector } from 'react-redux';

import OrderResult from './OrderResult';

export default function OrderResultContainer() {
  const { orderResult } = useSelector((state) => ({
    orderResult: state.orderResult,
  }));

  return (
    <OrderResult orderResult={orderResult} />
  );
}
