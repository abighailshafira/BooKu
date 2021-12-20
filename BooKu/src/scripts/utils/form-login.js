/* eslint-disable no-alert */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-underscore-dangle */
import LoginDb from '../data/logindb';
import { createFormLoginTemplate } from '../views/templates/template-creator';

const FormLogin = {
  async init({ formLoginContainer }) {
    this._formLoginContainer = formLoginContainer;
    this._id = 'rqdv5juczeskfw1e867';
    await this._renderForm();
  },

  async _renderForm() {
    this._formLoginContainer.innerHTML = createFormLoginTemplate();
    const button = document.querySelector('.submit');
    button.addEventListener('click', async (e) => {
      e.preventDefault();

      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');
      const form = document.querySelector('form');
      const data = {
        email: inputName.value,
        password: inputReview.value,
        csrf: 'CIwNZNlR4XbisJF39I8yWnWX9wX4WFoz',
      };

      if (inputName.value === '') {
        alert('Masukan email');
      } else if (inputReview.value === '') {
        alert('Masukan password');
      } else {
        await LoginDb.storeLogin(data);
        form.reset();
      }
    });
  },
};

export default FormLogin;
