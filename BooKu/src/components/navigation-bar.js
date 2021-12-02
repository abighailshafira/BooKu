class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="user">
      <a href=""></a>
      <p>dicoding</p>
    </div>`;
  }
}

customElements.define('navigation-bar', NavigationBar);
