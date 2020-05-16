let new_amenity = {};
$(() => {
  $('input[type=checkbox]').click(() => {
    if (this.checked){
      new_amenity[this.data('name')] = this.data('id');
    }else{
      delete new_amenity[this.data('name')];
    }
  });
  $('.amenities > H4').text(Object.values(new_amenity).join(', '));
});