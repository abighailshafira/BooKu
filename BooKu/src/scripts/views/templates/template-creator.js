/* eslint-disable linebreak-style */
const createHomeTemplate = () => `
<div class="wrapper">
    <div class="card card-pemasukan" >
        <div class="card-body">
            <div>
                <h5 tabindex="0">Pemasukan</h5>
                <h4 tabindex="0"><b>Rp 2.000.000</b></h4>
            </div>
        </div>
        <div class="card-footer py-3">
            <a href="">Lihat semua<i class="fa fa-angle-right"></i></a>
        </div>
    </div>
    <div class="card card-pengeluaran" >
        <div class="card-body">
            <div>
                <h5 tabindex="0">Pengeluaran</h5>
                <h4 tabindex="0"><b>Rp 500.000</b></h4>
            </div>
        </div>
        <div class="card-footer py-3">
            <a href="">Lihat semua<i class="fa fa-angle-right"></i></a>
        </div>
    </div>
    <div class="card card-total">
        <div class="card-body">
            <div>
                <h5 tabindex="0">Total</h5>
                <h4 tabindex="0"><b>Rp 1.500.000</b></h4>
            </div>
        </div>
        <div class="card-footer py-3">
            <a href="">Lihat semua<i class="fa fa-angle-right"></i></a>
        </div>
    </div>
</div>
<section id="containerChart" style="width: 100%">
    <canvas id="ChartTotal"></canvas>
</section>
`;

const createInputTemplate = () => `
<div class="row input-container">
    <div class="col-sm">
        <label for="input-title" class="form-label">Pengeluaran</label>
        <div class="input-group mb-3">
            <span class="input-group-text">Rp.</span>
            <input type="text" class="form-control" aria-label="Jumlah pengeluaran dalam rupiah">
        </div>
    </div>
    <div class="col-sm">
        <label for="input-title" class="form-label">Pemasukan</label>
        <div class="input-group mb-3">
            <span class="input-group-text">Rp.</span>
            <input type="text" class="form-control" aria-label="Jumlah pemasukan dalam rupiah">
        </div>
    </div>
    <div class="mb-3">
        <label for="input-title" class="form-label">Keterangan</label>
        <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="keterangan transaksi">
        </div>
    </div>
    <div class="mb-3">
        <button type="submit" class="btn btn-block">Tambah</button>
    </div>
</div> 
`;

const createTableTemplate = () => `
<div class="table-title">
    <h3 tabindex="0">Transaksi Pemasukan dan Pengeluaran</h3>
</div>
<div class="table-wrapper table-responsive">
    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button id="pdf" class="btn btn-warning me-md-2 export-button">Export Laporan</button>
    </div>
    <table id="example" class="table table-striped table-hover">
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
        <tbody>
            <tr>
                <td class="text-center">1</td>
                <td>12/12/2001</td>
                <td>Rp 200000</td>
                <td>Rp 100000</td>
                <td>Rp 100000</td>
                <td>Modal</td>
                <td class="text-center">
                    <button type="button" class="btn btn-danger" aria-label="Hapus data"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
            <tr>
                <td class="text-center">2</td>
                <td>12/12/2001</td>
                <td>Rp 200000</td>
                <td>Rp 100000</td>
                <td>Rp 100000</td>
                <td>Modal</td>
                <td class="text-center">
                    <button type="button" class="btn btn-danger" aria-label="Hapus data"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
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
`;

export {
  createHomeTemplate,
  createInputTemplate,
  createTableTemplate,
};
