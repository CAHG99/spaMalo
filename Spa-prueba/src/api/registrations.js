const API_URL = 'http://localhost:3000/registrations';

export async function getRegistrationsByUser(userId) {
  const res = await fetch(`${API_URL}?userId=${userId}`);
  return await res.json();
}

export async function registerToEvent(userId, eventId) {
  const res = await fetch(`${API_URL}?userId=${userId}&eventId=${eventId}`);
  const existing = await res.json();
  if (existing.length > 0) return { error: 'Ya estás registrado' };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, eventId })
  });

  return await response.json();
}
