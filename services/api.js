const API_SERVER = 'http://3.34.86.117:8000';

export async function fetchCategories() {
  const url = `${API_SERVER}/categories`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchProducts() {
  const url = `${API_SERVER}/products`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchProduct() {
  // TODO
}
