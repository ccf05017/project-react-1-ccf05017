import categoriesFixture from '../../fixtures/categories';
import productsFixture from '../../fixtures/products';

export async function fetchCategories() {
  return categoriesFixture;
}

export async function fetchProducts() {
  return productsFixture;
}
