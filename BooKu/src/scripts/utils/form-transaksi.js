/* eslint-disable no-alert */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-underscore-dangle */
import RestaurantDbSource from '../data/transaksidb';
// import { createFormReviewTemplate } from '../views/templates/templateku';

const FormReviewInitiator = {
  async init({ formReviewContainer }) {
    this._formReviewContainer = formReviewContainer;
    this._id = 'rqdv5juczeskfw1e867';
    await this._renderForm();
  },

  async _renderForm() {
    // this._formReviewContainer.innerHTML = createFormReviewTemplate();
    const button = document.querySelector('.submit');
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      
      const inputDate = document.querySelector('#inputDate');
      const inputPemasukan = document.querySelector('#inputPemasukan');
      const inputPengeluaran = document.querySelector('#inputPengeluaran');
      const inputKeterangan = document.querySelector('#inputKeterangan');
      
      const form = document.querySelector('form');
      const data = {
        tgl_transaksi: '2019-04-04',
        pemasukan: inputPemasukan.value,
        pengeluaran: inputPengeluaran.value,
        keterangan: inputKeterangan.value,
        user_id: '2',

        csrf: 'CIwNZNlR4XbisJF39I8yWnWX9wX4WFoz',
      };

      if (inputPengeluaran.value === '') {
        alert('please input your outcome');
      } else if (inputPemasukan.value === '') {
        alert('please input your income');
      } else if (inputKeterangan.value === '') {
        alert('please input your catatan');
      }  else {
        await RestaurantDbSource.reviewRestaurant(data);
        form.reset();
	      // this._renderReview(data.email, data.password, data.csrf);
      }
    });
  },

  _renderReview(name, review) {
    const reviewContainer = document.querySelector('.reviews');
    const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    
    const dataReview = `
    <div class="review-item">
      <h4 class="review_name"><i class="fa fa-user" aria-hidden="true"></i> ${name} </h4>
      <p class="review_date">${date}</p>
      <p class="review_desc">${review}</p>
    </div>`;
    console.log(dataReview,'inipunya aku');

    // reviewContainer.innerHTML += dataReview;
  },
};

export default FormReviewInitiator;
