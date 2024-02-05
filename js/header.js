class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>    
    <nav class="navigation">
        <a href="/index.html">Zack Overflow</a>
        <ul>
            <a href="/index.html">Home</a>
            <a href="/projects.html">Projects</a>
            <a href="/contact.html">Contact</a>
        </ul>
    </nav>
    </header>
    `;
  }
}

customElements.define('my-header', MyHeader);