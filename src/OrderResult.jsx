import React from 'react';

import OrderSuccessMessage from './OrderSuccessMessage';

import OrderFailMessage from './OrderFailMessage';

export default function OrderResult({ orderResult }) {
  return (
    <div>
      {
        (orderResult)
          ? <OrderSuccessMessage />
          : <OrderFailMessage />
      }
    </div>
  );
}
