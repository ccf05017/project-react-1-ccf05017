import React from 'react';

export default function OrderSuccessMessage() {
  const orderSuccessMessage = '주문이 완료됐습니다.';
  const bankAccount = '국민은행: 00-0000-0000-00';

  return (
    <>
      <p>{orderSuccessMessage}</p>
      <p>{`${bankAccount}로 입금해주세요`}</p>
    </>
  );
}
