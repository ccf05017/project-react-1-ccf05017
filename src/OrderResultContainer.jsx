import React from 'react';

import { useSelector } from 'react-redux';

export default function OrderResultContainer() {
  const orderSuccessMessage = '주문이 완료됐습니다.';
  const bankAccount = '국민은행: 00-0000-0000-00';

  const orderFailMessage = '주문이 실패했습니다.';

  const { orderResult } = useSelector((state) => ({
    orderResult: state.orderResult,
  }));

  function makeResultMessage() {
    if (orderResult) {
      return (
        <>
          <p>{orderSuccessMessage}</p>
          <p>{`${bankAccount}로 입금해주세요`}</p>
        </>
      );
    }

    return (
      <>
        <p>{orderFailMessage}</p>
      </>
    );
  }

  return (
    <div>{makeResultMessage()}</div>
  );
}
