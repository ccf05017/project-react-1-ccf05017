const filteredProductsFixture = [
  {
    id: 1, typeId: 1, title: '생일축하해', price: 8000, detailImgs: ['birthday_detail_1.jpeg', 'birthday_detail_2.jpeg', 'birthday_detail_3.jpeg'], img: 'birthday_1.jpeg',
  },
];

const productFixture = {
  id: 1, typeId: 1, title: '생일축하해', price: 8000, detailImgs: ['birthday_detail_1.jpeg', 'birthday_detail_2.jpeg', 'birthday_detail_3.jpeg'], img: 'birthday_1.jpeg',
};

const productsFixture = [
  {
    id: 1, typeId: 1, title: '생일축하해', price: 8000, detailImgs: ['birthday_detail_1.jpeg', 'birthday_detail_2.jpeg', 'birthday_detail_3.jpeg'], img: 'birthday_1.jpeg',
  },
  {
    id: 2, typeId: 2, title: '첫돌축하', price: 10000, detailImgs: [], img: 'baby_1.jpeg',
  },
  {
    id: 3, typeId: 3, title: '나는지금우한', price: 10000, detailImgs: [], img: 'travel_1.jpeg',
  },
  {
    id: 4, typeId: 4, title: '결혼축하해', price: 8000, detailImgs: [], img: 'wedding_1.jpeg',
  },
];

export { filteredProductsFixture, productFixture };

export default productsFixture;
