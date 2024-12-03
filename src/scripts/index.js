import 'regenerator-runtime';
import '../styles/output.css';
import '../styles/js/script.js';

import App from './views/app';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });

  app._initialAppShell();
});

console.log('Hamburger Button:', document.querySelector('#hamburgerButton'));
console.log('Navigation Drawer:', document.querySelector('#navigationDrawer'));
console.log('Main Content:', document.querySelector('#mainContent'));
