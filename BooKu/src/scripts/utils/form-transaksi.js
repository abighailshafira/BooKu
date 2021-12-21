/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-underscore-dangle */
import TransaksiDb from '../data/transaksidb';
import { createFormTransaksiTemplate } from '../views/templates/template-creator';

const FormTransaksiInitiator = {
  async init({ formTransaksiContainer, id }) {
    this._formTransaksiContainer = formTransaksiContainer;
    this._id = id;
    await this._renderForm();
  },

  async _renderForm() {
    this._formTransaksiContainer.innerHTML = createFormTransaksiTemplate();

    if (localStorage.getItem('auth') != '1') {
      window.location.assign('http://localhost:8080/#/');
      alert('Anda belum login');
    }

    const button = document.querySelector('.submit');
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const tanggal = new Date();

      const inputPemasukan = document.querySelector('#inputPemasukan');
      const inputPengeluaran = document.querySelector('#inputPengeluaran');
      const inputKeterangan = document.querySelector('#inputKeterangan');
      const form = document.querySelector('form');
      const data = {
        tgl_transaksi: `${tanggal.getFullYear()}-${tanggal.getMonth()}-${tanggal.getDate()}`,
        pemasukan: inputPemasukan.value,
        pengeluaran: inputPengeluaran.value,
        keterangan: inputKeterangan.value,
        user_id: localStorage.getItem('id_user'),
        csrf: 'CIwNZNlR4XbisJF39I8yWnWX9wX4WFoz',
      };

      if (inputPengeluaran.value === '') {
        alert('Masukan total pengeluaran');
      } else if (inputPemasukan.value === '') {
        alert('Masukan total pemasukan');
      } else if (inputKeterangan.value === '') {
        alert('Masukan keterangan transaksi');
      } else {
        await TransaksiDb.storeTransaksi(data);
        form.reset();
      }
    });
  },
};

export default FormTransaksiInitiator;
