const API_URL = 'http://localhost:3000/users';
export async function getUserByUsername(username) {
  const res = await fetch(`${API_URL}?username=${username}`);
  const data = await res.json();
  return data[0];
}
export async function registerUser(userData) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return await res.json();
}
