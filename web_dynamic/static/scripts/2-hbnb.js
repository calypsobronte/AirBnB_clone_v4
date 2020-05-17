$(document).ready(function () {
    let new_amenity = {};
    $('input[type=checkbox]').click(function () {
        if (this.checked) {
            new_amenity[$(this).data('id')] = $(this).data('name');
        } else {
            delete new_amenity[$(this).data('id')];
        }
        $('.amenities h4').text(Object.values(new_amenity).join(', '));
    });
    $.get('http://localhost:5001/api/v1/status/', (data, status) => {
        if (data.status === 'OK') {
            $('DIV#api_status').addClass('available');
        } else {
			$('DIV#api_status').removeClass('available');
		}
    });
});	
	