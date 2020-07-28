Feature('CategoryList');

const categories = ['생일', '육아', '여행', '결혼'];

Scenario('원하는 카테고리에 마우스를 갖다 대면, (O) 표기가 된다.', (I) => {
  I.amOnPage('/');

  categories.forEach((category) => {
    I.moveMouseOver(`${category}`);

    I.see(`${category}(O)`);
  });
});
