const createNoteTemplate = () => `
<div class="sticky-notes">
   <button class="add-notes" type="button">+</button>
</div>
<div class="footer-note">
   <p><strong>Catatan:</strong> Klik 2x untuk menghapus note</p>
</div>
`;

const createFormRegisterTemplate = () => `
<div class="navbar">
  <a class="navbar-brand">B<span>oo</span>Ku</a>
</div>

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
`;

const createFormLoginTemplate = () => `
<div class="navbar">
  <a class="navbar-brand">B<span>oo</span>Ku</a>
</div>

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
              <input type="text" name="name" id="inputName" placeholder="Email">
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
`;

const createFormTransaksiTemplate = () => `
<div class="card-body">
  <form class="form-box px-3">
    <div class="row input-container">
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

      <div class="mb-3">
        <label for="input-title" class="form-label">Keterangan</label>
        <div class="input-group mb-3">
          <input type="text" id="inputKeterangan" class="form-control" aria-label="Keterangan transaksi">
        </div>
      </div>

      <div class="mb-3">
        <button type="submit" class="submit btn btn-block">Tambah</button>
      </div>
    </div>
  </form>
</div>
`;

let no = 1;
const convertRupiah = require('rupiah-format');

const createTableTemplate = (listku) => `
<tr>
  <td class="text-center">${no++}</td>
  <td>${listku.tgl_transaksi}</td>
  <td>${convertRupiah.convert(listku.pemasukan)}</td>
  <td>${convertRupiah.convert(listku.pengeluaran)}</td>
  <td>${convertRupiah.convert(listku.pemasukan - listku.pengeluaran) } </td>
  <td>${listku.keterangan}</td>
  <td class="text-center">
    <button id="transaksi" value="${listku.id}" class="btn btn-danger "><i class="fa fa-trash"></i></button>
  </td>
</tr>      
`;

export {
  createTableTemplate,
  createNoteTemplate,
  createFormRegisterTemplate,
  createFormLoginTemplate,
  createFormTransaksiTemplate,
};
