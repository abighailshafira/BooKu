/* eslint-disable linebreak-style */
import { createInputTemplate, creatTableTemplate }
  from '../templates/template-creator';

/* eslint-disable linebreak-style */
const InputPage = {
  async render() {
    return `
    <div class="content">
      <div class="input-title">
        <h3>Transaksi Pemasukan dan Pengeluaran</h3>
      </div>
      <div class="input-content" id="inputContent"></div>
    </div>`;
  },

  async afterRender() {
    const inputContainer = document.querySelector('#inputContent');
    inputContainer.innerHTML += createInputTemplate() + creatTableTemplate();
  },
};

export default InputPage;
