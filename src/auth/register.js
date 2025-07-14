import { getUserByUsername, registerUser } from '../api/users.js';
import { goTo } from '../router/index.js';

export async function register(username, password) {
  const exists = await getUserByUsername(username);
  if (exists) return alert('El usuario ya existe');
  const newUser = { username, password, role: 'visitor' };
  const saved = await registerUser(newUser);
  localStorage.setItem('user', JSON.stringify(saved));
  goTo('/dashboard');
}
