class MainContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="mainContent" id="mainContent"></div>
        `;
    }
}

customElements.define('main-content', MainContent);