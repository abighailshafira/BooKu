/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/responsive.css';
import '../components/navigation-bar.js';
import '../components/side-bar.js';
import App from './views/app.js';
import swRegister from './utils/sw-register';

const app = new App({
  drawer: document.querySelector('#navigationMenu'),
  content: document.querySelector('#mainContent'),
});

const buttonDelete = document.querySelectorAll('#myLogout');
buttonDelete.forEach((button) => {
  button.addEventListener('click', () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    localStorage.removeItem('email_user');
    localStorage.removeItem('id_user');
    // alert('Berhasil keluar');
    window.location.assign('http://localhost:8080/');
  });
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
