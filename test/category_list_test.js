Feature('CategoryList');

const categories = [
  { index: 2, name: '육아' },
  { index: 3, name: '여행' },
];

Scenario('원하는 카테고리를 클릭하면, 검은 배경으로 바뀐다.', (I) => {
  I.amOnPage('/');

  categories.forEach((category) => {
    const categoryElement = locate('.category-item').at(category.index);

    I.click(categoryElement);

    I.seeCssPropertiesOnElements(categoryElement, { 'background-color': 'rgb(29, 29, 31)' });
  });
});
