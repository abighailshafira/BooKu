/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import LoginPage from '../views/pages/login-page.js';
import RegisterPage from '../views/pages/register-page.js';
import HomePage from '../views/pages/home-page.js';
import InputPage from '../views/pages/input-page.js';
import NotePage from '../views/pages/note-page.js';

const routes = {
  '/': LoginPage,
  '/register': RegisterPage,
  '/home': HomePage,
  '/inputpage': InputPage,
  '/notepage': NotePage,
};

export default routes;
