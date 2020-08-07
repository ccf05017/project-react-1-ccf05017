Feature('ProductDetail');

const formData = {
  username: '홍길동',
  phoneNumber: '010-0000-0000',
  amount: '2',
  address: '화성',
};

Scenario('주문서를 작성해서 주문할 수 있다.', (I) => {
  I.amOnPage('/products/1');

  Object.entries(formData).forEach(([fieldName, value]) => {
    I.fillField(fieldName, value);
  });

  I.click('주문하기');

  I.see('주문이 완료됐습니다.');
  I.see('국민은행: 00-0000-0000-00');

  Object.entries(formData).forEach(([fieldName, value]) => {
    I.dontSeeInField(fieldName, value);
  });
});

Scenario('주문 완료 후 다른 상품 상세 조회 했을 때, 이전 주문 결과가 보이지 않는다.', (I) => {
  I.amOnPage('/products/1');

  Object.entries(formData).forEach(([fieldName, value]) => {
    I.fillField(fieldName, value);
  });

  I.click('주문하기');
  I.see('주문이 완료됐습니다.');
  I.see('국민은행: 00-0000-0000-00');

  I.click('YenTopper');
  I.click('생일축하해');

  I.dontSee('주문이 완료됐습니다.');
  I.dontSee('국민은행: 00-0000-0000-00');
});
