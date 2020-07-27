import { fetchCategories } from './api';

import categoriesFixture from '../fixtures/categories';

describe('fetchCategories', () => {
  it('get categories info from api server', async () => {
    const categories = await fetchCategories();

    expect(categories).toEqual(categoriesFixture);
  });
});
