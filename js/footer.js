class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <nav class="mobile"><a href="/index.html">Home</a></nav>
    <nav class="mobile"><a href="/projects.html">Projects</a></nav>
    <nav class="mobile"><a href="/contact.html">Contact</a></nav>
    </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);