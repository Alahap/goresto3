const Home = {
    async render() {
        return `
        <div class="hero" role="img" aria-label="chef_resto">
            <div class="hero_inner" tabindex="0">
                <h2 class="hero_title">Aneka Resto Primadona Indonesia</h2>
                <p class="hero_tagline">Jelajahi berbagai resto yang menyediakan menu makanan, fasilitas dan pelayanan yang baik<p>
            </div>
        </div>
        <div id="restaurant_name_list" class="restaurant_name_list"></div>
        <section class="post">
            <div class="article_header" tabindex="0">
                <h3>Primadona Resto</h3>
            </div>
            <div class="article_group">
                <article class="main_article" tabindex="0">
                    <img src="./article/vegan.png" alt="vegan-menu">
                    <h3>Meals</h3>
                    <p>Tersedia berbagai menu makanan yang enak</p>
                </article>
                <article class="main_article" tabindex="0">
                    <img src="./article/free-WiFi.png" alt="free-wifi">
                    <h3>Facility</h3>
                    <p>Tempat yang unik dan menarik serta tersedia berbagai fasilitas yang akan memanjakan <i>customer</i></p>
                    </article>
                <article class="main_article" tabindex="0">
                    <img src="./article/waiter.png" alt="waiter">
                    <h3>Service</h3>
                    <p>Pelayanan yang baik dan menyenangkan adalah prioritas</p>
                </article>
            </div>
        </section>
    `;
    },

    async afterRender() {
        const loading = document.querySelector('h3');
        loading.style.fontSize = '36px';
    },

};

export default Home;