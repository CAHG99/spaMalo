export default function NotFound() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>404 - Página no encontrada</h2>
    <p>No tienes acceso a esta ruta o no existe.</p>
  `;
  return div;
}
