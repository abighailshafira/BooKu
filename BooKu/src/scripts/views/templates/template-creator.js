/* eslint-disable linebreak-style */
const createHomeTemplate = () => `
<div class="row">
    <div class="col-sm">
        <div class="card card-pemasukan" >
            <div class="card-body">
                <div>
                    <h5>Pemasukan</h5>
                    <h4><b>Rp 2.000.000</b></h4>
                </div>
            </div>
            <div class="card-footer">
                <a href="">View all</a>
            </div>
        </div>
    </div>
    <div class="col-sm">
        <div class="card card-pengeluaran" >
            <div class="card-body">
                <div>
                    <h5>Pengeluaran</h5>
                    <h4><b>Rp 500.000</b></h4>
                </div>
            </div>
            <div class="card-footer">
                <a href="">View all</a>
            </div>
        </div>
    </div>
    <div class="col-sm">
        <div class="card card-total">
            <div class="card-body">
                <div>
                    <h5>Total</h5>
                    <h4><b>Rp 1.500.000</b></h4>
                </div>
            </div>
            <div class="card-footer">
                <a href="">View all</a>
            </div>
        </div>
    </div>
</div>
<section>
    <canvas id="ChartTotal"></canvas>
</section>
`;

const createInputTemplate = () => `
<div class="row input-container">
    <div class="col-sm">
        <label for="input-title" class="form-label">Pengeluaran</label>
        <div class="input-group mb-3">
            <span class="input-group-text">Rp.</span>
            <input type="text" class="form-control" aria-label="Rupiah amount (with dot)">
        </div>
    </div>
    <div class="col-sm">
        <label for="input-title" class="form-label">Pemasukan</label>
        <div class="input-group mb-3">
            <span class="input-group-text">Rp.</span>
            <input type="text" class="form-control" aria-label="Rupiah amount (with dot)">
        </div>
    </div>
    <div class="mb-3">
        <label for="input-title" class="form-label">Keterangan</label>
        <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="description">
        </div>
    </div>
    <div class="mb-3">
        <button type="submit" class="btn btn-block">Tambah</button>
    </div>
</div> 
`;

const creatTableTemplate = () => `
<div class="table-title">
    <h3>Transaksi Pemasukan dan Pengeluaran</h3>
</div>
<div class="table-wrapper table-responsive">
    <table id="example" class="table table-striped table-hover" style="width:100%">
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
                <td>1</td>
                <td>12/12/2001</td>
                <td>Rp 200000</td>
                <td>Rp 100000</td>
                <td>Rp 100000</td>
                <td>Modal</td>
                <td>
                    <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>12/12/2001</td>
                <td>Rp 200000</td>
                <td>Rp 100000</td>
                <td>Rp 100000</td>
                <td>Modal</td>
                <td>
                    <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button>
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
  creatTableTemplate,
};
