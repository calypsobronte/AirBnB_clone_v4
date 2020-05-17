$(document).ready(function () {
  const NewAmenity = {};
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      NewAmenity[$(this).data('id')] = $(this).data('name');
    } else {
      delete NewAmenity[$(this).data('id')];
    }
    $('.amenities h4').text(Object.values(NewAmenity).join(', '));
  });
  $.get('http://localhost:5001/api/v1/status/', (data, status) => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (info) {
      for (const place of info) {
        $('section.places').append(
          '<article><div class="title_box"><h2>' +
          place.name +
          '</h2><div class="price_by_night">' +
          place.price_by_night +
          '</div></div><div class="information">' +
          '<div class="max_guest">' +
          place.max_guest +
          'Guest' +
          (place.max_guest ? 1 : 's') +
          '</div>' +
          '<div class="number_rooms">' +
          place.number_rooms +
          'Bedroom' +
          (place.number_rooms ? 1 : 's') +
          '</div>' +
          '<div class="number_bathrooms">' +
          place.number_bathrooms +
          'Bathroom' +
          (place.number_bathrooms ? 1 : 's') +
          '</div></div>' +
          '<div class="description">' +
          place.description +
          '</div></article>');
      }
    }
  });
});
