import { getEvents, deleteEvent } from '../api/events.js';
import { goTo } from '../router/index.js';
import LogoutButton from '../components/LogoutButton.js';

export default function Dashboard() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>Panel de administrador</h2>
    <button id="create">+ Crear nuevo evento</button>
    <ul id="eventList"></ul>
  `;
  div.prepend(LogoutButton());

  div.querySelector('#create').addEventListener('click', () => {
    goTo('/dashboard/events/create');
  });

  const ul = div.querySelector('#eventList');

  getEvents().then(events => {
    events.forEach(event => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${event.title}</strong> - ${event.date}
        <button data-id="${event.id}" class="edit">Editar</button>
        <button data-id="${event.id}" class="delete">Eliminar</button>
      `;
      ul.appendChild(li);
    });

    ul.querySelectorAll('.edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        localStorage.setItem('editEventId', id);
        goTo('/dashboard/events/edit');
      });
    });

    ul.querySelectorAll('.delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (confirm('¿Eliminar evento?')) {
          await deleteEvent(btn.dataset.id);
          goTo('/dashboard');
        }
      });
    });
  });

  return div;
}
