/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { createHomeTemplate } from '../templates/template-creator.js';

const HomePage = {
  async render() {
    return `
    <div class="content">
        <div class="home-title">
            <h2>Hello 
            <strong>Dicoding,</strong>
            </h2>
            <p>Catat transaksi pemasukan dan pengeluaran usahamu di sini!</p>
        </div>
        <div class="home-content" id="homeContent"></div>
    </div>`;
  },

  async afterRender() {
    const homeContainer = document.querySelector('#homeContent');
    homeContainer.innerHTML += createHomeTemplate();
  },
};

export default HomePage;
