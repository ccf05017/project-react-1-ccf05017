Feature('HomePage');

const products = [
  {
    id: 1, typeId: 1, title: '생일축하해', price: 8000,
  },
  {
    id: 2, typeId: 2, title: '첫돌축하', price: 10000,
  },
  {
    id: 3, typeId: 3, title: '나는지금우한', price: 10000,
  },
  {
    id: 4, typeId: 4, title: '결혼축하해', price: 8000,
  },
];

const categories = [
  { id: 1, name: '생일' },
  { id: 2, name: '육아' },
  { id: 3, name: '여행' },
  { id: 4, name: '결혼' },
];

Scenario('상점 로고를 볼 수 있다.', (I) => {
  I.amOnPage('/');

  I.seeAttributesOnElements('img', { alt: 'YenTopper' });
});

Scenario('카테고리 목록을 볼 수 있다.', (I) => {
  I.amOnPage('/');

  categories.forEach((category) => {
    I.see(category.name);
  });
});

Scenario('초기 상품 목록을 볼 수 있다.', (I) => {
  I.amOnPage('/');

  products.forEach((product) => {
    I.see(product.title);
    I.see(product.price);
  });
});
