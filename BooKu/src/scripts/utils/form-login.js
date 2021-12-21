/* eslint-disable no-alert */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-underscore-dangle */
import LoginDb from '../data/logindb';
import { createFormLoginTemplate } from '../views/templates/template-creator';

const FormLogin = {
  async init({ formLoginContainer }) {
    this._formLoginContainer = formLoginContainer;
    await this._renderForm();
  },

  async _renderForm() {
    this._formLoginContainer.innerHTML = createFormLoginTemplate();

    const button = document.querySelector('.submit');
    button.addEventListener('click', async (e) => {
      e.preventDefault();

      const inputName = document.querySelector('#inputName');
      const inputPassword = document.querySelector('#inputPassword');
      const form = document.querySelector('form');
      const data = {
        email: inputName.value,
        password: inputPassword.value,
        csrf: 'CIwNZNlR4XbisJF39I8yWnWX9wX4WFoz',
      };

      if (inputName.value === '') {
        alert('Masukan email');
      } else if (inputPassword.value === '') {
        alert('Masukan password');
      } else {
        await LoginDb.storeLogin(data);
        form.reset();
      }
    });
  },
};

export default FormLogin;
