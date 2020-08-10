const assert = require('assert');

Feature('ProductList');

const categories = [
  { index: 1, name: '생일' },
  { index: 2, name: '육아' },
  { index: 3, name: '여행' },
  { index: 4, name: '결혼' },
];

const products = [
  { index: 1, title: '생일축하해', price: 8000 },
  { index: 2, title: '첫돌축하', price: 10000 },
  { index: 3, title: '나는지금우한', price: 10000 },
  { index: 4, title: '결혼축하해', price: 8000 },
];

function getMatchedProduct(category) {
  return products.find(
    (product) => product.index === category.index,
  );
}

Scenario('상품 목록 제목을 볼 수 있다.', (I) => {
  I.amOnPage('/');

  I.see('상품');
});

Scenario('카테고리 별로 상품 목록을 확인 할 수 있다.', (I) => {
  I.amOnPage('/');

  categories.forEach((category) => {
    I.click(locate('.category-item').at(category.index));

    I.see(getMatchedProduct(category).title);
    I.see(getMatchedProduct(category).price);
  });
});

Scenario('상품 상세 페이지로 이동할 수 있다.', async (I) => {
  I.amOnPage('/');

  const birthdayCategory = categories.find(({ name }) => name === '생일');
  const birthdayProduct = products.find(({ title }) => title === '생일축하해');

  I.click(birthdayCategory.name);
  I.see(birthdayCategory.name);

  I.click(birthdayProduct.title);
  const url = await I.grabCurrentUrl();

  assert.equal(/\/products\/\d/.test(url), true);
});
