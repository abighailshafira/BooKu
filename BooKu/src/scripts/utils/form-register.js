/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-underscore-dangle */
import RegisterDb from '../data/registerdb';
import { createFormRegisterTemplate } from '../views/templates/template-creator';

const FormRegister = {
  async init({ formRegisterContainer }) {
    this._formRegisterContainer = formRegisterContainer;
    await this._renderForm();
  },

  async _renderForm() {
    this._formRegisterContainer.innerHTML = createFormRegisterTemplate();

    const button = document.querySelector('.submit');
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const inputName = document.querySelector('#inputName');
      const inputPassword = document.querySelector('#inputPassword');
      const inputConfirm = document.querySelector('#inputConfirm');
      const form = document.querySelector('form');
      const data = {
        email: inputName.value,
        password: inputPassword.value,
        confirm: inputConfirm.value,
        csrf: 'CIwNZNlR4XbisJF39I8yWnWX9wX4WFoz',
      };

      if (inputName.value === '') {
        alert('Masukan email');
      } else if (inputPassword.value === '') {
        alert('Masukan password');
      } else if (inputConfirm.value === '') {
        alert('Masukan konfirmasi password');
      } else if (inputConfirm.value != inputPassword.value) {
        alert('Password dan konfirmasi password tidak sama!');
      } else {
        await RegisterDb.storeRegister(data);
        form.reset();
      }
    });
  },
};

export default FormRegister;
