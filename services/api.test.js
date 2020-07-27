import { fetchCategories } from './api';

import categoriesFixture from '../fixtures/categories';

describe('fetchCategories', () => {
  it('get categories info from api server', async () => {
    global.fetch = jest.fn().mockReturnValue({
      async json() { return categoriesFixture; },
    });

    const categories = await fetchCategories();

    expect(categories).toEqual(categoriesFixture);
  });
});
