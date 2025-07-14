import { getUserByUsername } from '../api/users.js';
import { goTo } from '../router/index.js';

export async function login(username, password) {
  const user = await getUserByUsername(username);
  if (!user) return alert('Usuario no encontrado');
  if (user.password !== password) return alert('Contraseña incorrecta');
  localStorage.setItem('user', JSON.stringify(user));
  goTo('/dashboard');
}
