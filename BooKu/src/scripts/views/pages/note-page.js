/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
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

    const stickyContainer = document.querySelector('.sticky-notes');
    const addNoteButton = document.querySelector('.add-notes');

    getNotes().forEach((note) => {
      const noteElement = createElementNotes(note.id, note.content);
      stickyContainer.insertBefore(noteElement, addNoteButton);
    });

    addNoteButton.addEventListener('click', () => addNotes());

    function getNotes() {
      return JSON.parse(localStorage.getItem('dbSticky-note') || '[]');
    }

    function saveNotes(notes) {
      localStorage.setItem('dbSticky-note', JSON.stringify(notes));
    }

    function createElementNotes(id, content) {
      const element = document.createElement('textarea');

      element.classList.add('notes');
      element.value = content;
      element.placeholder = 'Catatan baru';

      element.addEventListener('change', () => {
        updateNote(id, element.value);
      });

      element.addEventListener('dblclick', () => {
        const toDetele = confirm('Kamu yakin ingin menghapus note ini ?');

        if (toDetele) {
          deleteNote(id, element);
        }
      });

      return element;
    }

    function addNotes() {
      const Notes = getNotes();
      const noteObject = {
        id: Math.floor(Math.random() * 1000),
        content: '',
      };

      const noteElement = createElementNotes(noteObject.id, noteObject.content);
      stickyContainer.insertBefore(noteElement, addNoteButton);

      Notes.push(noteObject);
      saveNotes(Notes);
    }

    function updateNote(id, updateContent) {
      const Notes = getNotes();
      const targetNotes = Notes.filter((note) => note.id === id)[0];

      targetNotes.content = updateContent;
      saveNotes(Notes);
    }

    function deleteNote(id, element) {
      const Notes = getNotes().filter((note) => note.id !== id);

      saveNotes(Notes);
      stickyContainer.removeChild(element);
    }
  },
};

export default NotePage;
