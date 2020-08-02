Feature('ProductDetail');

Scenario('주문서를 작성해서 주문할 수 있다.', (I) => {
  I.amOnPage('/products/1');

  I.fillField('username', '홍길동');
  I.fillField('phoneNumber', '010-0000-0000');
  I.fillField('amount', '2');
  I.fillField('address', '지구 어딘가 저편에서');

  I.click('주문하기');

  I.see('주문이 완료됐습니다.');
  I.see('국민은행: 00-0000-0000-00');
});
