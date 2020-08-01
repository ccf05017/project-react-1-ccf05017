import categoriesFixture from '../../fixtures/categories';
import productsFixture from '../../fixtures/products';

export async function fetchCategories() {
  return categoriesFixture;
}

export async function fetchProducts() {
  return productsFixture;
}

export async function fetchProduct(productId) {
  return productsFixture.find((product) => product.id === productId);
}

export async function requestOrder() {
  return true;
}
