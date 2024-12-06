import 'regenerator-runtime';
import '../styles/output.css';

import App from './views/app';

const app = new App({
  // Navbar Hamburger
  hamburger: document.querySelector('#hamburger'),
  navMenu: document.querySelector('#nav-menu'),

  // To The Top
  header: document.querySelector('header'),
  toTop: document.querySelector('#to-top'),

  // Tab On Programming side
  programmingTab: document.querySelector('#programming-tab'),
  toolsTab: document.querySelector('#tools-tab'),
  programmingContent: document.querySelector('#programming-content'),
  toolsContent: document.querySelector('#tools-content'),

  // Dark Mode Toggle
  darkButton: document.querySelector('#dark-button'),
  html: document.querySelector('html'),

  // Running Text
  typingElement: document.querySelector('.typing'),

  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
