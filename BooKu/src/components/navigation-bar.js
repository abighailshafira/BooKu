class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="user">
      <a href="profile.html"></a>
      <p>dicoding</p>
    </div>`;
  }
}

customElements.define('navigation-bar', NavigationBar);
