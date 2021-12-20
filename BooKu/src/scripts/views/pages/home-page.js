/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
// import { createHomeTemplate } from '../templates/template-creator.js';

const convertRupiah = require('rupiah-format')

let pemasukan = localStorage.getItem("p1")
let pengeluaran = localStorage.getItem("p2")
let total = localStorage.getItem("total")

let RpPemasukan = convertRupiah.convert(pemasukan)
let RpPengeluaran = convertRupiah.convert(pengeluaran)
let RpTotal = convertRupiah.convert(total)

const HomePage = {
  async render() {
    return `
    <div class="content">
        <div class="home-title">
          <h2>Selamat datang di <strong>BooKu,</strong></h2>
          <p tabindex="0">Catat transaksi pemasukan dan pengeluaran usahamu di sini!</p>
        </div>

        <div class="home-content" id="homeContent">
                <div class="wrapper">
            <div class="card card-pemasukan" >
                <div class="card-body">
                    <div>
                        <h5 tabindex="0">Pemasukan</h5>
                        <h4 tabindex="0"><b>`+RpPemasukan+`</b></h4>
                    </div>
                </div>
                <div class="card-footer py-3">
                    <a href="#/inputpage">Lihat semua<i class="fa fa-angle-right"></i></a>
                </div>
            </div>
            <div class="card card-pengeluaran" >
                <div class="card-body">
                    <div>
                        <h5 tabindex="0">Pengeluaran</h5>
                        <h4 tabindex="0"><b>`+RpPengeluaran+`</b></h4>
                    </div>
                </div>
                <div class="card-footer py-3">
                    <a href="#/inputpage">Lihat semua<i class="fa fa-angle-right"></i></a>
                </div>
            </div>
            <div class="card card-total">
                <div class="card-body">
                    <div>
                        <h5 tabindex="0">Total</h5>
                        <h4 tabindex="0"><b>`+RpTotal+`</b></h4>
                    </div>
                </div>
                <div class="card-footer py-3">
                    <a href="#/inputpage">Lihat semua<i class="fa fa-angle-right"></i></a>
                </div>
            </div>
        </div>
        <section id="containerChart" style="width: 100%">
            <canvas id="ChartTotal"></canvas>
        </section>
        </div>
    </div>`;
  },

  async afterRender() {

  },
};

export default HomePage;
