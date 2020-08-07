const API_SERVER = 'https://3.34.86.117:8000';

const headers = {
  'Content-Security-Policy': 'upgrade-insecure-requests',
  'Content-Type': 'application/json',
};

export async function fetchCategories() {
  const url = `${API_SERVER}/categories`;
  const response = await fetch(url, {
    headers,
  });
  const data = await response.json();

  return data;
}

export async function fetchProducts() {
  const url = `${API_SERVER}/products`;
  const response = await fetch(url, {
    headers,
  });
  const data = await response.json();

  return data;
}

export async function fetchProduct(productId) {
  const url = `${API_SERVER}/products/${productId}`;
  const response = await fetch(url, {
    headers,
  });
  const data = await response.json();

  return data;
}

export async function requestOrder({
  id, username, phoneNumber, amount, address,
}) {
  const message = `${id}를 ${username}(${phoneNumber})님이 ${address}로 ${amount}개 주문하셨습니다.`;
  const url = 'http://3.34.86.117:8081/send';

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ message }),
  });

  const data = await response.json();

  return data.status;
}
