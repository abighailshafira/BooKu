/* eslint-disable linebreak-style */
import { createInputTemplate, createTableTemplate }
  from '../templates/template-creator';
import TransaksiDB from '../../data/transaksidb';
import jsPDF from 'jspdf';
import'jspdf-autotable';

const InputPage = {
  async render() {
    return `
    <div class="content">
      <div class="input-content" id="inputContent"></div>

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
            <tbody class="data-transaksi">
            </tbody>
            <tfoot>
                <td colspan="2"><b>Jumlah</b></td>
                <td>Rp 400000</td>
                <td>Rp 200000</td>
                <td>Rp 200000</td>
                <td></td>
                <td></td>
            </tfoot>
        </table>
      </div>
    </div>`;
  },

  async afterRender() {
    const inputContainer = document.querySelector('#inputContent');
    inputContainer.innerHTML = createInputTemplate();
    // inputContainer.innerHTML += createInputTemplate() + createTableTemplate();

    const pdf = document.querySelector('#pdf');
    pdf.addEventListener('click', (e) => {
      e.preventDefault();
        const doc = new jsPDF()
        doc.autoTable({html: '#example'})
        doc.save('laporan.pdf');
    });

    // const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataTransaksi = document.querySelector('.data-transaksi');

    const lists = await TransaksiDB.listTransaksi();
    lists.forEach((list) => {
      dataTransaksi.innerHTML += createTableTemplate(list);
    });

    // const data = await RestaurantDbSource.detailRestaurant('rqdv5juczeskfw1e867');
    // restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);
  },
};

export default InputPage;
