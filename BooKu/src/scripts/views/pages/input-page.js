/* eslint-disable linebreak-style */
import { createInputTemplate, createTableTemplate }
  from '../templates/template-creator';

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
  },
};

export default InputPage;
