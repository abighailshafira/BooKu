/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable new-cap */
import jsPDF from 'jspdf';
import TransaksiDb from '../../data/transaksidb';
import 'jspdf-autotable';
import { createTableTemplate } from '../templates/template-creator';
import FormTransaksiInitiator from '../../utils/form-transaksi';

const convertRupiah = require('rupiah-format');

const pemasukan = localStorage.getItem('p1');
const pengeluaran = localStorage.getItem('p2');
const total = localStorage.getItem('total');

const RpPemasukan = convertRupiah.convert(pemasukan);
const RpPengeluaran = convertRupiah.convert(pengeluaran);
const RpTotal = convertRupiah.convert(total);

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
            <button id="pdf" class="btn btn-warning me-md-2 export-button">Export Laporan</button>
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
                <td>${RpPemasukan}</td>
                <td>${RpPengeluaran}</td>
                <td>${RpTotal}</td>
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
      const doc = new jsPDF();
      doc.autoTable({ html: '#example' });
      doc.save('laporan.pdf');
    });

    const TransaksiContainer = document.querySelector('.dataTransaksi');

    const transaksi = await TransaksiDb.listTransaksi();

    transaksi.forEach((listku) => {
      TransaksiContainer.innerHTML += createTableTemplate(listku);
    });

    await FormTransaksiInitiator.init({
      formTransaksiContainer: document.querySelector('#formTransaksiContainer'),
    });

    const buttonDelete = document.querySelectorAll('#transaksi');
    buttonDelete.forEach((button) => {
      button.addEventListener('click', () => {
        TransaksiDb.deleteTransaksi(button.value);
        alert('Berhasil menghapus transaksi');
        location.reload();
      });
    });
  },
};

export default InputPage;
