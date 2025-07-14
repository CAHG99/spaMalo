export function getCurrentUser() {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Usuario malformado en localStorage:', error);
    localStorage.removeItem('user'); // Limpia valor corrupto
    return null;
  }

}
export function isAuthenticated() {
  return !!localStorage.getItem('user');
}
export function logout() {
  localStorage.removeItem('user');
}
