const API_SERVER = 'http://3.34.86.117:8000/';

export async function fetchCategories() {
  const url = `${API_SERVER}/categories`;
  const categories = await fetch(url);

  return categories;
}

export async function xxx() {
  // TODO: delete
}
