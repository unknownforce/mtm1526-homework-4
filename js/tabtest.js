// JavaScript Document

$(document).ready(function() {
	
	$('.tab-buttons a').on('click', function (ev) {
		var tabToShow = $(this).attr('href');
		console.log(tabToShow);
		
		$(tabToShow).addClass('current'); // $('#tab-1')
			
		$(this).removeClass('current');
		
	});
});