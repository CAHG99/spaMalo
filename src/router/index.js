import { getCurrentUser } from '../auth/session.js';

const routes = {
  '/': () => import('../views/Login.js'),
  '/login': () => import('../views/Login.js'),
  '/register': () => import('../views/Register.js'),
  '/dashboard': () => import('../views/Dashboard.js'),
  '/dashboard/visitor': () => import('../views/VisitorDashboard.js'),
  '/dashboard/events/create': () => import('../views/CreateEvent.js'),
  '/dashboard/events/edit': () => import('../views/EditEvent.js'),
  '/not-found': () => import('../views/NotFound.js')
};

export async function navigate(path) {
  const user = getCurrentUser();

  if (!user && path.startsWith('/dashboard')) {
    path = '/not-found';
  }

  if (user && (path === '/login' || path === '/register')) {
    path = '/dashboard';
  }

  if (path === '/dashboard') {
    path = user?.role === 'admin' ? '/dashboard' : '/dashboard/visitor';
  }

  if ((path.includes('create') || path.includes('edit')) && user?.role !== 'admin') {
    path = '/not-found';
  }

  const route = routes[path] || routes['/not-found'];
  const module = await route();
  document.getElementById('app').innerHTML = '';
  document.getElementById('app').appendChild(module.default());
}

window.onpopstate = () => navigate(window.location.pathname);

export function goTo(path) {
  history.pushState({}, '', path);
  navigate(path);
}
