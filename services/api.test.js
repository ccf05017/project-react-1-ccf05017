import { fetchCategories, fetchProducts } from './api';

import categoriesFixture from '../fixtures/categories';
import productsFixture from '../fixtures/products';

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
