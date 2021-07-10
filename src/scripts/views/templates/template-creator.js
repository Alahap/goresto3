import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant_name">${restaurant.name}</h2>
  <img tabindex="4" class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
  <div class="restaurant__info">
    <h4><span class="material-icons">place</span>${restaurant.city}</h4>
    <p>${restaurant.address}</p>
    <h4><span class="material-icons">star_rate</span>${restaurant.rating}</h4>
    <div class="info_category">
      <h3>Category : ${restaurant.categories.map((category) => category.name).join(', ')}</h3>
      <h3>Foods</h3> ${restaurant.menus.foods.map((food) => food.name).join(', ')}
      <h3>Drinks</h3> ${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}
    </div>
  </div>
  <div class="restaurant_description">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
    <h3>Customer Reviews<h3>
    <div class="review-container">
    ${restaurant.customerReviews.map((review) => `
      <div class="review-card">
        <p class="review-name">${review.name}</p>
        <p class="review-comment">${review.review}</p>
        <p class="review-date">${review.date}</p>
      </div>
    `).join('')}
    </div>
  </div>

  <div id="addReviewContainer" class="detail-form">
    <form>
      <label for="inputName">Name</label>
      <input type="text" name="nama" class="inputName" id="inputName" placeholder="Enter Name">
      <label for="inputReview">Review</label>
      <textarea name="review" class="inputReview" id="inputReview" placeholder="Enter Review"></textarea>
      <button type="submit" class="btnSubmit">Send</button>
    </form>
  </div>

  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__image" alt="${restaurant.name || '-'}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span>${restaurant.rating || '-'}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <div class="link_name"><a tabindex="0" href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></div>
        <h4><span class="material-icons">place</span>${restaurant.city}</h4>
        <p>${restaurant.description || '-'}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};