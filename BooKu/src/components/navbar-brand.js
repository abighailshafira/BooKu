/* eslint-disable linebreak-style */
class NavbarBrand extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="navbar">
      <a class="navbar-brand" href="index.html">B<span>oo</span>Ku</a>
    </div>`;
  }
}

customElements.define('navbar-brand', NavbarBrand);
