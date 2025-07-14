import { login } from '../auth/login.js';

export default function Login() {
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>Iniciar sesión</h2>
    <form id="loginForm">
      <input type="text" placeholder="Usuario" required id="username" />
      <input type="password" placeholder="Contraseña" required id="password" />
      <button type="submit">Ingresar</button>
    </form>
  `;

  container.querySelector('#loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = container.querySelector('#username').value;
    const password = container.querySelector('#password').value;
    await login(username, password);
  });

  return container;
}
