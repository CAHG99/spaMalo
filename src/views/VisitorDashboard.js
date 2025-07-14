import { getEvents } from '../api/events.js';
import { registerToEvent } from '../api/registrations.js';
import { getCurrentUser } from '../auth/session.js';
import LogoutButton from '../components/LogoutButton.js';

export default function VisitorDashboard() {
  const div = document.createElement('div');
  div.innerHTML = `<h2>Eventos disponibles</h2><ul id="eventList"></ul>`;
  div.prepend(LogoutButton());
  const list = div.querySelector('#eventList');

  getEvents().then(events => {
    events.forEach(event => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${event.title}</strong> - ${event.date} - Cupo: ${event.capacity}
        <button data-id="${event.id}" class="registerBtn">Inscribirse</button>
      `;
      list.appendChild(li);
    });

    list.querySelectorAll('.registerBtn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const user = getCurrentUser();
        const result = await registerToEvent(user.id, btn.dataset.id);
        if (result.error) {
          alert(result.error);
        } else {
          alert('Registro exitoso');
        }
      });
    });
  });

  return div;
}
