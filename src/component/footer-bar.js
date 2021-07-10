class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="footer">
            <p>Copyright &copy2021 - GORESTO <br>Ad Experimentum Web-App from 
            <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">
            Dicoding's Restaurant-api</a> By ALAHAP</p>
        </div>
        `;
    }
}

customElements.define('footer-bar', FooterBar);