Feature('CategoryList');

const categories = [
  { index: 1, name: '생일' },
  { index: 2, name: '육아' },
  { index: 3, name: '여행' },
  { index: 4, name: '결혼' },
];

Scenario('원하는 카테고리에 마우스를 갖다 대면, (O) 표기가 된다.', (I) => {
  I.amOnPage('/');

  categories.forEach((category) => {
    I.moveCursorTo(locate('ul li').at(category.index));

    I.see(`${category.name}(O)`);
  });
});
