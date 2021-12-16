/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { createNoteTemplate } from '../templates/template-creator.js';

const NotePage = {
  async render() {
    return `
    <div class="content">
        <div class="note-title">
            <h2>Sticky Note</h2>
            <p>Tulis catatan anda di sini!</p>
        </div>
        <div class="note-content" id="noteContent"></div>
    </div>`;
  },

  async afterRender() {
    const noteContainer = document.querySelector('#noteContent');
    noteContainer.innerHTML += createNoteTemplate();
  },
};

export default NotePage;
