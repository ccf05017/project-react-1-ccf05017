Feature('ProductDetail');

const product = { index: 1, title: '생일축하해', price: 8000 };

Scenario('상품 상세 정보를 확인할 수 있다.', (I) => {
  I.amOnPage(`/products/${product.index}`);

  I.see('상품 상세');
  I.see(`상품명: ${product.title}`);
  I.see(`가격: ${product.price}`);
});
