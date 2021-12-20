class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    if(localStorage.getItem("auth") === "1"){
      this.innerHTML = `
      <input
        type="checkbox"
        id="sidebar-toggle"
        aria-label="Klik untuk membuka sidebar"
      />
      
      <div class="sidebar">
        <div class="sidebar-header">
          <div class="navbar">
            <a class="navbar-brand">B<span>oo</span>Ku</a>
          </div>
          <label class="fa fa-bars" for="sidebar-toggle"></label>
        </div>

        <div class="sidebar-menu" id="navigationMenu">
          <ul>
            <li>
              <a href="#/home">
                <span class="fa fa-home"></span>
                <span>Beranda</span>
              </a>
            </li>
            <li>
              <a href="#/inputpage">
                <span class="fa fa-clipboard"></span>
                <span>Transaksi</span>
              </a>
            </li>
            <li>
              <a href="#/notepage">
                <span class="fa fa-pencil"></span>
                <span>Catatan</span>
              </a>
            </li>
            <li>
              <a href="#myModal" data-bs-toggle="modal">
                <span class="fa fa-sign-out leave"></span>
                <span>Keluar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      `;
    }
  }
}

customElements.define('side-bar', SideBar);
