/* eslint-disable no-alert */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-underscore-dangle */
import RegisterDb from '../data/registerdb';
import { createFormRegisterTemplate } from '../views/templates/template-creator';

const FormRegister = {
  async init({ formRegisterContainer }) {
    this._formRegisterContainer = formRegisterContainer;
    this._id = 'rqdv5juczeskfw1e867';
    await this._renderForm();
  },

  async _renderForm() {
    this._formRegisterContainer.innerHTML = createFormRegisterTemplate();

    const button = document.querySelector('.submit');
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');
      const inputConfirm = document.querySelector('#inputConfirm');

      const form = document.querySelector('form');
      const data = {
        email: inputName.value,
        password: inputReview.value,
        confirm: inputConfirm.value,
        csrf: 'CIwNZNlR4XbisJF39I8yWnWX9wX4WFoz',
      };

      if (inputName.value === '') {
        alert('please input your email');
      } else if (inputReview.value === '') {
        alert('please input your password');
      } else if (inputConfirm.value === '') {
        alert('please input your confirm password');
      } else if (inputConfirm.value != inputReview.value) {
        alert('please input your password and confirm password Tidak sama!');
      } else {
        await RegisterDb.reviewRestaurant(data);
        form.reset();
        // this._renderReview(data.email, data.password, data.csrf);
      }
    });
  },

  // _renderReview(name, review) {
  //   const reviewContainer = document.querySelector('.reviews');
  //   const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    
  //   const dataReview = `
  //   <div class="review-item">
  //     <h4 class="review_name"><i class="fa fa-user" aria-hidden="true"></i> ${name} </h4>
  //     <p class="review_date">${date}</p>
  //     <p class="review_desc">${review}</p>
  //   </div>`;
  //   console.log(dataReview,'inipunya aku');

  //   // reviewContainer.innerHTML += dataReview;
  // },
};

export default FormRegister;
