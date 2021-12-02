class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <input type="checkbox" id="sidebar-toggle" />
    <div class="sidebar">
      <div class="sidebar-header">
        <h3 class="brand">
          <span class="unlink"></span>
          <span>BooKu</span>
        </h3>
        <label class="bi bi-list-ul" for="sidebar-toggle"></label>
      </div>

      <div class="sidebar-menu">
        <ul>
          <li>
            <a href="">
              <span class="bi bi-house"></span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="bi bi-pencil"></span>
              <span>Input</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="bi bi-clipboard"></span>
              <span>Laporan</span>
            </a>
          </li>
          <li>
            <a href="#myModal" data-bs-toggle="modal">
              <span class="bi bi-box-arrow-right leave"></span>
              <span>Keluar</span>
            </a>
          </li>
        </ul>
      </div>
    </div>`;
  }
}

customElements.define('side-bar', SideBar);
