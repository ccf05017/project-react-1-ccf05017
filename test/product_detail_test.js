Feature('ProductDetail');

const product = { index: 1, title: '생일축하해', price: 8000 };

Scenario('상품 상세 정보를 확인할 수 있다.', (I) => {
  I.amOnPage(`/products/${product.index}`);

  I.see('상품 상세');
  I.see(`[YenTopper] ${product.title}`);
  I.see(`${product.price}원`);
});

Scenario('주문서 모달창을 볼 수 있다.', (I) => {
  I.amOnPage(`/products/${product.index}`);

  I.amOnPage('/products/1');

  I.click('주문하기');

  I.see('주문서');
});
