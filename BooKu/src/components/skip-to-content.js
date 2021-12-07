class SkipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<a href="#mainContent" class="skip-link">Menuju ke konten</a>';
  }
}

customElements.define('skip-to-content', SkipToContent);
