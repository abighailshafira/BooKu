/* eslint-disable linebreak-style */
const createHomeTemplate = () => `
                <div class="row">
                    <div class="col-sm">
                        <div class="card card-pemasukan" >
                            <div class="card-body">
                                <div>
                                    <h5>Pemasukan</h5>
                                    <h4>Rp.2000.000</h4>
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
                                    <h4>Rp.500.000</h4>
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
                                    <h4>Rp.1500.000</h4>
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
                        <button type="submit" class="btn btn-block">Submit</button>
                    </div>
                </div> 
            `;

const creatTableTamplate = () => `
    <div class="table-wrapper">
        <div class="table-title">
            <h4>Detail transaksi</h4>
        </div>
        <table id="example" class="table table-striped" style="width:100%">
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
                    <td>200000</td>
                    <td>100000</td>
                    <td>100000</td>
                    <td>Uang keluar untuk modal</td>
                    <td>
                    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                    <label class="btn btn-outline-primary fa fa-trash" for="btncheck1"></label>
                </tr>
            </tbody>
        </table>
    </div>
`;

export {
  createHomeTemplate,
  createInputTemplate,
  creatTableTamplate,
};
