/* eslint-disable linebreak-style */
import { createInputTemplate, creatTableTamplate }
  from '../templates/template-creator';

/* eslint-disable linebreak-style */
const InputPage = {
  async render() {
    return `
        <div class="content">
            <div class="input-title">
                <h2>Transaksi Pemasukan dan Pengeluaran</h2>
            </div>
            <div class="input-content" id="inputContent">
            </div>
        </div>
            `;
  },

  async afterRender() {
    const moviesContainer = document.querySelector('#inputContent');
    moviesContainer.innerHTML += createInputTemplate() + creatTableTamplate();
  },
};

export default InputPage;
