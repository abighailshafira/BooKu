/* eslint-disable linebreak-style */
import LoginDb from '../../data/logindb';
import TransaksiDb from '../../data/transaksidb';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { createTableTemplate } from '../templates/template-creator';
import FormTransaksiInitiator from '../../utils/form-transaksi';

const convertRupiah = require('rupiah-format')

let pemasukan = localStorage.getItem("p1")
let pengeluaran = localStorage.getItem("p2")
let total = localStorage.getItem("total")

let RpPemasukan = convertRupiah.convert(pemasukan)
let RpPengeluaran = convertRupiah.convert(pengeluaran)
let RpTotal = convertRupiah.convert(total)

const InputPage = {
  async render() {
    return `
    <div class="content">
      <div class="input-content" id="formTransaksiContainer"></div>

      <div class="table-title">
        <h3 tabindex="0">Transaksi Pemasukan dan Pengeluaran</h3>
      </div>

      <div class="table-wrapper table-responsive">
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button id="pdf" class="btn btn-warning me-md-2">Export Laporan</button>
        </div>
        
        <table id="example" class="table table-striped table-hover ">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Tanggal</th>
                    <th>Pemasukan</th>
                    <th>Pengeluaran</th>
                    <th>Total</th>
                    <th>Keterangan</th>
                    <th>Hapus</th>
                </tr>
            </thead>
            <tbody class="dataTransaksi">
            </tbody>
            <tfoot>
                <td colspan="2"><b>Jumlah</b></td>
                <td>`+RpPemasukan+`</td>
                <td>`+RpPengeluaran+`</td>
                <td>`+RpTotal+`</td>
                <td></td>
                <td></td>
            </tfoot>
        </table>
      </div>
    </div>`;
  },

  async afterRender() {
    const pdf = document.querySelector('#pdf');
    pdf.addEventListener('click', (e) => {
      e.preventDefault();
        const doc = new jsPDF()
        doc.autoTable({html: '#example'})
        doc.save('laporan.pdf');
    });

    const TransaksiContainer = document.querySelector('.dataTransaksi');

    const transaksi = await TransaksiDb.listRestaurant();
    transaksi.forEach((listku) => {
      TransaksiContainer.innerHTML += createTableTemplate(listku);
    });

    const data = await LoginDb.detailRestaurant('rqdv5juczeskfw1e867');

    await FormTransaksiInitiator.init({
      formTransaksiContainer: document.querySelector('#formTransaksiContainer'),
      id: data.restaurant.id,
    });

    const buttonDelete = document.querySelectorAll("#transaksi");
    buttonDelete.forEach((button) => {
      button.addEventListener('click', () => {
        TransaksiDb.deleteTransaksi(button.value);
        alert('Berhasil Menghapus Transaksi');
        location.reload();
      });
    });
  }
};

export default InputPage;
