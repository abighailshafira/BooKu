/* eslint-disable linebreak-style */
import { createInputTemplate, createTableTemplate }
  from '../templates/template-creator';
import jsPDF from 'jspdf';
import'jspdf-autotable';

/* eslint-disable linebreak-style */
const InputPage = {
  async render() {
    return `
    <div class="content">
      <div class="input-content" id="inputContent"></div>
    </div>`;
  },

  async afterRender() {
    const inputContainer = document.querySelector('#inputContent');
    inputContainer.innerHTML += createInputTemplate() + createTableTemplate();

    const pdf = document.querySelector('#pdf');
    pdf.addEventListener('click', (e) => {
      e.preventDefault();
        const doc = new jsPDF()
        doc.autoTable({html: '#example'})
        doc.save('laporan.pdf');
    });
  },
};

export default InputPage;
