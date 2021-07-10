import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
    <div class="content">
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailPage(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);

    document.querySelector('.btnSubmit').addEventListener('click', async (e) => {
      e.preventDefault();
      const inputReview = document.querySelector('.inputReview');
      const form = document.querySelector('form');
      const inputName = document.querySelector('.inputName');

      const reviewData = {
        id: data.restaurant.id,
        name: inputName.value,
        review: inputReview.value,
      };

      if (inputName.value === '') {
        alert('Name cannot be empty!');
      } else if (inputReview.value === '') {
        alert('Review cannot be empty!');
      } else {
        await RestaurantSource.addReview(reviewData);
        form.reset();
        this._renderReview(reviewData.name, reviewData.review);
      }
    }),

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant: {
        id: url.id,
        pictureId: data.restaurant.pictureId,
        name: data.restaurant.name,
        description: data.restaurant.description,
        rating: data.restaurant.rating,
        city: data.restaurant.city
      },
    });
  },

  _renderReview(name, review) {
    const reviewContainer = document.querySelector('.review-container');
    const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    const dataReview = `
      <div class="review-card">
        <p class="review-name">${name}</p>
        <p class="review-comment">${review}</p>
        <p class="review-date">${date}</p>
      </div>
    `;

    reviewContainer.innerHTML += dataReview;
  },

};

export default Detail;