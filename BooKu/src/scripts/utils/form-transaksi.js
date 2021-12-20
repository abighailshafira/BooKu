/* eslint-disable no-alert */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-underscore-dangle */
import TransaksiDb from '../data/transaksidb';
import { createFormTransaksiTemplate } from '../views/templates/template-creator';

const FormReviewInitiator = {
  async init({ formReviewContainer,id }) {
    this._formReviewContainer = formReviewContainer;
    this._id = id;
    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer.innerHTML = createFormTransaksiTemplate();
    if(localStorage.getItem("auth") != "1"){
      window.location.assign("http://localhost:8080/#/")
      alert('anda belum login')
    }
    const button = document.querySelector('.submit');
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const birthday = new Date();
      console.log('masuk pa eko Transaksinya');

      const inputPemasukan = document.querySelector('#inputPemasukan');
      const inputPengeluaran = document.querySelector('#inputPengeluaran');
      const inputKeterangan = document.querySelector('#inputKeterangan');
      const form = document.querySelector('form');
      const data = {
        tgl_transaksi: birthday.getFullYear()+'-'+birthday.getMonth() + '-' + birthday.getDate(),
        pemasukan: inputPemasukan.value,
        pengeluaran: inputPengeluaran.value,
        keterangan: inputKeterangan.value,
        user_id: localStorage.getItem("id_user"),

        csrf: 'CIwNZNlR4XbisJF39I8yWnWX9wX4WFoz',
      };

      if (inputPengeluaran.value === '') {
        alert('please input your outcome');
      } else if (inputPemasukan.value === '') {
        alert('please input your income');
      } else if (inputKeterangan.value === '') {
        alert('please input your catatan');
      }  else {
        await TransaksiDb.reviewRestaurant(data);
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

export default FormReviewInitiator;
