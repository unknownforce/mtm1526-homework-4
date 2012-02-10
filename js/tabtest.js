// JavaScript Document

$(document).ready(function() {
	
	$('.tab-buttons a').on('click', function (ev) {
		var tabToShow = $(this).attr('href');
		$('#tab-group .current').removeClass('current');
		var current = $('#tab-group .current').index();
		console.log(tabToShow);
	
		$(tabToShow).addClass('current');
		
		
		//}); 
			
	});
});