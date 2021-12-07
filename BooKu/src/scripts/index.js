/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/responsive.css';
import '../components/navigation-bar.js';
import '../components/skip-to-content.js';
import '../components/navbar-brand.js';
import App from './views/app.js';
import swRegister from './utils/sw-register';

const app = new App({
  drawer: document.querySelector('#navigationMenu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
