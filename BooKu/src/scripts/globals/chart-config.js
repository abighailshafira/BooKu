/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import TransaksiDb from '../data/transaksidb';

const convertRupiah = require('rupiah-format');

const charts = TransaksiDb.chart(1);
console.log(charts);

charts.then((data) => {
  const dataku = [data.transaksi.sum_bulan5, data.transaksi.sum_bulan6, data.transaksi.sum_bulan7, data.transaksi.sum_bulan8, data.transaksi.sum_bulan9, data.transaksi.sum_bulan10, data.transaksi.sum_bulan11, data.transaksi.sum_bulan12];
  localStorage.setItem('m1', data.transaksi.sum_bulan1);
  localStorage.setItem('m2', data.transaksi.sum_bulan2);
  localStorage.setItem('m3', data.transaksi.sum_bulan3);
  localStorage.setItem('m4', data.transaksi.sum_bulan4);
  localStorage.setItem('m5', data.transaksi.sum_bulan5);
  localStorage.setItem('m6', data.transaksi.sum_bulan6);
  localStorage.setItem('m7', data.transaksi.sum_bulan7);
  localStorage.setItem('m8', data.transaksi.sum_bulan8);
  localStorage.setItem('m9', data.transaksi.sum_bulan9);
  localStorage.setItem('m10', data.transaksi.sum_bulan10);
  localStorage.setItem('m11', data.transaksi.sum_bulan11);
  localStorage.setItem('m12', data.transaksi.sum_bulan12);
  localStorage.setItem('p1', data.transaksi.p1);
  localStorage.setItem('p2', data.transaksi.p2);
  localStorage.setItem('total', data.transaksi.total);
  return dataku;
});

const configChart = {
  type: 'line',
  data: {
    labels: ['January', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    datasets: [{
      label: 'Grafik Per-Bulan',
      data: [localStorage.getItem('m1'),
        localStorage.getItem('m2'),
        localStorage.getItem('m3'),
        localStorage.getItem('m4'),
        localStorage.getItem('m5'),
        localStorage.getItem('m6'),
        localStorage.getItem('m7'),
        localStorage.getItem('m8'),
        localStorage.getItem('m9'),
        localStorage.getItem('m10'),
        localStorage.getItem('m11'),
        localStorage.getItem('m12')],
      borderColor: '#3d405b',
    }],
  },
  options: {
    responsive: true,
    mainAspectRatio: false,
  },
};

export default configChart;
