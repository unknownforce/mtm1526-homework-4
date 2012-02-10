// JavaScript Document

$(document).ready(function() {
	
	$('.tab-buttons a').on('click', function (ev) {
		var tabToShow = $(this).attr('href');
		
		var current = $('#tab-group .current').index();
		console.log(tabToShow);
	
		$(tabToShow).addClass('current');
		if (tabToShow == true){
			$(this).removeClass('current');
		}
		
		//}); 
			
	});
});