import { createEvent } from '../api/events.js';
import { goTo } from '../router/index.js';

export default function CreateEvent() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>Crear nuevo evento</h2>
    <form id="eventForm">
      <input type="text" id="title" placeholder="Título" required />
      <input type="date" id="date" required />
      <input type="number" id="capacity" placeholder="Cupo máximo" required />
      <button type="submit">Guardar</button>
    </form>
  `;

  div.querySelector('#eventForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const newEvent = {
      title: div.querySelector('#title').value,
      date: div.querySelector('#date').value,
      capacity: parseInt(div.querySelector('#capacity').value),
    };
    await createEvent(newEvent);
    goTo('/dashboard');
  });

  return div;
}
