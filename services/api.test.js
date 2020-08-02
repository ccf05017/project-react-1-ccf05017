import {
  fetchCategories,
  fetchProducts,
  fetchProduct,
  requestOrder,
} from './api';

import categoriesFixture from '../fixtures/categories';
import productsFixture, { productFixture } from '../fixtures/products';

describe('fetchCategories', () => {
  it('get categories info from api server', async () => {
    global.fetch = jest.fn().mockReturnValue({
      async json() { return categoriesFixture; },
    });

    const categories = await fetchCategories();

    expect(categories).toEqual(categoriesFixture);
  });
});

describe('fetchProducts', () => {
  it('get products info from api server', async () => {
    global.fetch = jest.fn().mockReturnValue({
      async json() { return productsFixture; },
    });

    const products = await fetchProducts();

    expect(products).toEqual(productsFixture);
  });
});

describe('fetchProduct', () => {
  it('get product info form api server', async () => {
    global.fetch = jest.fn().mockReturnValue({
      async json() { return productFixture; },
    });

    const product = await fetchProduct(productFixture.id);

    expect(product).toEqual(productFixture);
  });
});

describe('requestOrder', () => {
  it('order the product and get result', async () => {
    const { id } = productFixture;

    global.fetch = jest.fn().mockReturnValue({
      async json() {
        return ({
          status: true,
        });
      },
    });

    const orderResult = await requestOrder({
      id, username: '홍길동', phoneNumber: '010-0000-0000', amount: 0, address: '지구',
    });

    expect(orderResult).toEqual(true);
  });
});
