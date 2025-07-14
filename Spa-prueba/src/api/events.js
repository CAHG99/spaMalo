const API_URL = 'http://localhost:3000/events';
export async function getEvents() {
  const res = await fetch(API_URL);
  return await res.json();
}
export async function getEventById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}
export async function createEvent(eventData) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData)
  });
  return await res.json();
}
export async function updateEvent(id, eventData) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData)
  });
  return await res.json();
}
export async function deleteEvent(id) {
  return await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
