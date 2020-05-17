$(document).ready(function () {
let new_amenity = {};
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      new_amenity[$(this).data('id')] = $(this).data('name');
    }else {
      delete new_amenity[$(this).data('id')];
    }
  	$('.amenities h4').text(Object.values(new_amenity).join(', '));
  });
});
