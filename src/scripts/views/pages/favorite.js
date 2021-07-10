import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import FavoriteRestoSearchView from './liked-restaurants/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-restaurants/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './liked-restaurants/favorite-resto-search-presenter';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestaurants: FavoriteRestoIdb })
  },
};

export default Favorite;