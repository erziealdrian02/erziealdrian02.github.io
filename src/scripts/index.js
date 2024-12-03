import 'regenerator-runtime';
import '../styles/output.css';
import '../styles/js/script.js';

import App from './views/app';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    hamburger: document.querySelector('#hamburger'),
    navMenu: document.querySelector('#nav-menu'),

    header: document.querySelector('header'),
    toTop: document.querySelector('#to-top'),

    content: document.querySelector('#mainContent'),
  });

  app._initialAppShell();
});
