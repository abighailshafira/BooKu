class Modal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="modal" id="myModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Are you sure want to logout?</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">
            <div class="mb-2 modal-body-button"><button type="submit">Logout</button></div>
            <div class="modal-body-button-o"><button data-bs-dismiss="modal">Cancel</button></div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('modal', Modal);
