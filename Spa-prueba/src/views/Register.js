import { register } from '../auth/register.js';

export default function Register() {
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>Registro de usuario</h2>
    <form id="registerForm">
      <input type="text" placeholder="Usuario" required id="username" />
      <input type="password" placeholder="Contraseña" required id="password" />
      <button type="submit">Registrarse</button>
    </form>
  `;

  container.querySelector('#registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = container.querySelector('#username').value;
    const password = container.querySelector('#password').value;
    await register(username, password);
  });

  return container;
}
