const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', (I) => {
    I.seeElement('#query');
    // I.seeElement('.query'); // membuat test menjadi gagal
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
  
Scenario('liking one restaurant', async (I) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  
    I.amOnPage('/#/list');

    I.seeElement('.link_name a');

    const firstRestaurant = locate('.link_name a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');
    const likedRestaurantName = await I.grabTextFrom('.link_name');

    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('searching restaurants', async (I) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  
    I.amOnPage('/#/list');
  
    I.seeElement('.link_name a');
  
    const names = [];
  
    for (let i = 1; i <= 3; i++) {
      I.click(locate('.link_name a').at(i));
      I.seeElement('#likeButton');
      I.click('#likeButton');
      names.push(await I.grabTextFrom('.link_name'));
      I.amOnPage('/#/list');
    }
  
    I.amOnPage('/#/favorite');
    I.seeElement('#query');
  
    const searchQuery = names[1].substring(1, 3);
    const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);
  
    I.fillField('#query', searchQuery);
    I.pressKey('Enter');
  
    const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
    assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);
  
    matchingRestaurants.forEach(async (name, index) => {
      const visibleName = await I.grabTextFrom(locate('.link_name').at(index + 1));
      assert.strictEqual(name, visibleName);
    });
});