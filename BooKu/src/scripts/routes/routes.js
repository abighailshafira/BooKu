/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import Login from '../views/pages/login-page.js';
// import Detail from '../views/pages/detail';
import Register from '../views/pages/register-page.js';
import HomePage from '../views/pages/home-page.js';
import InputPage from '../views/pages/input-page.js';
import NotePage from '../views/pages/note-page.js';

const routes = {
  '/': Login,
  '/register': Register,
  // '/delete/transaksi/': DeleteTransaksi,
  '/home': HomePage,
  '/inputpage': InputPage,
  '/notepage': NotePage,
  '/detail/:id': Login,
};

export default routes;
