Feature('Home');

const categories = ['생일', '육아', '여행', '결혼'];

Scenario('점포명을 볼 수 있다.', (I) => {
  I.amOnPage('/');

  I.see('YenTopper');
});

Scenario('케이크 토퍼 카테고리들을 볼 수 있다.', (I) => {
  I.amOnPage('/');

  categories.forEach((category) => {
    I.see(category);
  });
});
