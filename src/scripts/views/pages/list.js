import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
        <div class="loader" style="display: none;"></div>
        <div class="content">
            <h2 class="content__heading">Good and nice Restaurants</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
    `;
  },

  async afterRender() {
    const listPage = await RestaurantSource.listPage();
    const restaurantContainer = document.querySelector('#restaurants');
    listPage.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default List;