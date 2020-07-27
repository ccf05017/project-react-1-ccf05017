Feature('Home');

Scenario('메뉴들을 볼 수 있다.', (I) => {
  I.amOnPage('/');

  I.see('hello');
});
