/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import HomePage from '../views/pages/home-page.js';
import InputPage from '../views/pages/input-page.js';
import NotePage from '../views/pages/note-page.js';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/inputpage': InputPage,
  '/notepage': NotePage,
};

export default routes;
