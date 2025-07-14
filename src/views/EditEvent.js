import { getEventById, updateEvent } from '../api/events.js';
import { goTo } from '../router/index.js';

export default function EditEvent() {
  const div = document.createElement('div');
  const id = localStorage.getItem('editEventId');

  getEventById(id).then(event => {
    div.innerHTML = `
      <h2>Editar evento</h2>
      <form id="editForm">
        <input type="text" id="title" value="${event.title}" required />
        <input type="date" id="date" value="${event.date}" required />
        <input type="number" id="capacity" value="${event.capacity}" required />
        <button type="submit">Actualizar</button>
      </form>
    `;

    div.querySelector('#editForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const updated = {
        title: div.querySelector('#title').value,
        date: div.querySelector('#date').value,
        capacity: parseInt(div.querySelector('#capacity').value)
      };
      await updateEvent(id, updated);
      goTo('/dashboard');
    });
  });

  return div;
}
