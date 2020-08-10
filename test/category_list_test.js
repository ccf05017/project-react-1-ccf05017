Feature('CategoryList');

const categories = [
  { index: 2, name: '육아' },
  { index: 3, name: '여행' },
];

Scenario('원하는 카테고리를 클릭하면, (O) 표기가 된다.', (I) => {
  I.amOnPage('/');

  categories.forEach((category) => {
    I.click(locate('.category-item').at(category.index));

    I.see(`${category.name}(O)`);
  });
});
