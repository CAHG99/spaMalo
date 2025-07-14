import { navigate } from './router/index.js';
document.addEventListener('DOMContentLoaded', () => {
  navigate(window.location.pathname);
});