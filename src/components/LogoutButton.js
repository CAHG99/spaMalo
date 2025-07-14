import { logout } from '../auth/session.js';
import { goTo } from '../router/index.js';

export default function LogoutButton() {
  const btn = document.createElement('button');
  btn.textContent = 'Cerrar sesión';
  btn.style.marginBottom = '1rem';
  btn.addEventListener('click', () => {
    logout();
    goTo('/login');
  });
  return btn;
}
