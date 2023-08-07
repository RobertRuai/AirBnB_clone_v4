$(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', data => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});

// Function to create and append an article tag representing a place
function createPlaceArticle(name, description) {
  const article = $('<article>');
  article.html(`
     <article>
	  <div class="title_box">
	    <h2>${{ place.name }}</h2>
	    <div class="price_by_night">${{ place.price_by_night }}</div>
	  </div>
	  <div class="information">
	    <div class="max_guest">${{ place.max_guest }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>
            <div class="number_rooms">${{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
            <div class="number_bathrooms">${{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
	  </div>
          <div class="description">
	    ${{ place.description }}
          </div>
    </article>
            `);
  $('SECTION.places').append(article);
}

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: "POST",
  contentType: 'application/json',
  data: JSON.sringify({})
  success: function (responseData) {
    for (const place of responseData.places) {
      const name = place.name;
      const description = place.description;
      createPlaceArticle(name, description);
    }
  },
  error: function(error) {
    console.error('Error:', error);
  }
});
