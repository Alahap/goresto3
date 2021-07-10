class MenuBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class=menu_bar>
                <div class="header_menu">
                    <button id="menu">☰</button>
                </div>
                <div class="header_logo">
                    <a href="#/home">GORESTO</a>
                </div>
                <nav id="drawer" class="header_navigation">
                    <ul>
                        <li><a class="nav-link" href="#/home">Home</a></li>
                        <li><a class="nav-link" href="#/list">Resto</a></li>
                        <li><a class="nav-link" href="#/favorite">Favorite</a></li>
                        <li><a class="nav-link" target="_blank" href="https://www.linkedin.com/in/pahala-sitohang-0b5184208/">About</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }
}

customElements.define('menu-bar', MenuBar);