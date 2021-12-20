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

// const createTableTemplate = () => `
// <div class="table-title">
//     <h3 tabindex="0">Transaksi Pemasukan dan Pengeluaran</h3>
// </div>
// <div class="table-wrapper table-responsive">
//     <div class="d-grid gap-2 d-md-flex justify-content-md-start">
//         <button id="pdf" class="btn btn-warning me-md-2 export-button">Export Laporan</button>
//     </div>
//     <table id="example" class="table table-striped table-hover">
//         <thead>
//             <tr>
//                 <th>No</th>
//                 <th>Tanggal</th>
//                 <th>Pemasukan</th>
//                 <th>Pengeluaran</th>
//                 <th>Total</th>
//                 <th>Keterangan</th>
//                 <th>Hapus</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td class="text-center">1</td>
//                 <td>12/12/2001</td>
//                 <td>Rp 200000</td>
//                 <td>Rp 100000</td>
//                 <td>Rp 100000</td>
//                 <td>Modal</td>
//                 <td class="text-center">
//                     <button type="button" class="btn btn-danger" aria-label="Hapus data"><i class="fa fa-trash"></i></button>
//                 </td>
//             </tr>
//             <tr>
//                 <td class="text-center">2</td>
//                 <td>12/12/2001</td>
//                 <td>Rp 200000</td>
//                 <td>Rp 100000</td>
//                 <td>Rp 100000</td>
//                 <td>Modal</td>
//                 <td class="text-center">
//                     <button type="button" class="btn btn-danger" aria-label="Hapus data"><i class="fa fa-trash"></i></button>
//                 </td>
//             </tr>
//         </tbody>
//         <tfoot>
//             <td colspan="2"><b>Jumlah</b></td>
//             <td>Rp 400000</td>
//             <td>Rp 200000</td>
//             <td>Rp 200000</td>
//             <td></td>
//             <td></td>
//         </tfoot>
//     </table>
// </div>
// `;

// const createTableTemplate = (listku) => `
// <tr>
//   <td>${listku.id}</td>
//   <td>${listku.tgl_transaksi}</td>
//   <td>Rp ${listku.pemasukan}</td>
//   <td>Rp ${listku.pengeluaran}</td>
//   <td>Rp 100000</td>
//   <td>${listku.keterangan}</td>
//   <td>
//       <button onclick="goDoSomething(${listku.id});" class="btn btn-danger"><i class="fa fa-trash"></i></button>
//   </td>
// </tr>`;

const createNoteTemplate = () => `
<div class="sticky-notes">
   <button class="add-notes" type="button">+</button>
</div>
<div class="footer-note">
   <p><strong>Catatan:</strong> Klik 2x untuk menghapus note</p>
</div>
`;

const createFormRegisterTemplate = () => `
<header>
  <div class="navbar">
    <a class="navbar-brand">B<span>oo</span>Ku</a>
  </div>
</header>

<main>
  <div class="form-container">
    <div class="container">
      <div class="row px-3">
        <div class="card col-lg-10 col-xl-9 flex-row mx-auto px-0">
          <div class="img-left d-none d-md-flex"></div>
          
          <div class="card-body">
            <h4 class="title text-center mt-5">Registrasi Akun</h4>
            <form class="form-box px-3">
              <div class="form-input">
                <span><i class="fa fa-envelope-o"></i></span>
                <input
                    type="email"
                    name="email"
                    id="inputName"
                    placeholder="Email"
                    required
                />
              </div>

              <div class="form-input">
                <span><i class="fa fa-key"></i></span>
                <input type="password" name="review" id="inputReview" placeholder="Password" aria-label="input Password">
              </div>

              <div class="form-input">
                <span><i class="fa fa-key"></i></span>
                <input
                    type="password"
                    name="confirmPassword"
                    id="inputConfirm"
                    placeholder="Ulangi Password"
                    required
                />
              </div>

              <div class="mb-3">
                <button type="submit" class="submit btn btn-block">Daftar</button>
              </div>

              <div class="text-center mb-2">
                Sudah memiliki akun?
                <a
                    href="/"
                    class="link"
                    aria-label="klik di sini jika kamu telah memiliki akun"
                    >Masuk</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
`;

const createFormLoginTemplate = () => `
<header>
  <div class="navbar">
    <a class="navbar-brand">B<span>oo</span>Ku</a>
  </div>
</header>

<main>
  <div class="form-container">
    <div class="container">
      <div class="row px-3">
        <div class="card col-lg-10 col-xl-9 flex-row mx-auto px-0">
          <div class="img-left d-none d-md-flex"></div>

          <div class="card-body">
            <h4 class="title text-center mt-5" tabindex="0">
              Selamat datang di BooKu!
            </h4>

            <form class="form-box px-3" action="/#/home">
              <div class="form-input">
                <span><i class="fa fa-envelope-o"></i></span>
                <input type="text" name="name" id="inputName" placeholder="email">
              </div>

              <div class="form-input">
                <span><i class="fa fa-key"></i></span>
                <input type="password" name="review" id="inputReview" placeholder="Password" aria-label="input Password">
              </div>

              <div class="mb-3">
                <button type="submit" class="submit btn btn-block">Masuk</button>
              </div>

              <div class="text-center">
                Belum memiliki akun? 
                <a
                  href="/#/register"
                  class="link"
                  aria-label="klik di sini jika kamu belum memiliki akun"
                  >Daftar</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
`;

const createFormTransaksiTemplate = () => `
<div class="card-body">
  <form class="form-box px-3">
    <div class="col-sm-12">
      <div class="col-sm">
        <label for="input-title" class="form-label">Pengeluaran</label>
        <div class="input-group mb-3">
          <span class="input-group-text">Rp.</span>
          <input type="text" id="inputPengeluaran" class="form-control" aria-label="Jumlah pengeluaran dalam rupiah">
        </div>
      </div>

      <div class="col-sm">
        <label for="input-title" class="form-label">Pemasukan</label>
        <div class="input-group mb-3">
          <span class="input-group-text">Rp.</span>
          <input type="text" id="inputPemasukan" class="form-control" aria-label="Jumlah pemasukan dalam rupiah">
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label for="input-title" class="form-label">Keterangan</label>
      <div class="input-group mb-3">
        <input type="text" id="inputKeterangan" class="form-control" aria-label="keterangan transaksi">
      </div>
    </div>

    <div class="mb-3">
      <button type="submit" class="submit btn btn-block">Tambah</button>
    </div>
  </form>
</div>
`;

const createTableTemplate = (listku) => `
<tr>
  <td>${listku.id}</td>
  <td>${listku.tgl_transaksi}</td>
  <td>Rp ${listku.pemasukan}</td>
  <td>Rp ${listku.pengeluaran}</td>
  <td>Rp ${listku.pemasukan - listku.pengeluaran} </td>
  <td>${listku.keterangan}</td>
  <td>
    <button id="transaksiku" value="${listku.id}" class="btn btn-danger "><i class="fa fa-trash"></i></button>
  </td>
</tr>      
`;

export {
  createHomeTemplate,
  createInputTemplate,
  createTableTemplate,
  createNoteTemplate,
  createFormRegisterTemplate,
  createFormLoginTemplate,
  createFormTransaksiTemplate,
};
