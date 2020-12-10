$(document).ready(function() {
	
	$('.js--section-feature').waypoint(function(direction){
		if(direction == 'down') {
		$('nav').addClass('stucky');
	} else {
		$('nav').removeClass('stucky');
	}
	
	},{
		offset: '60px'
	});
	
	
	/* scroll to button */
	$('.js--scroll-to-plan').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-paln').offset().top}, 1000);
	});
	
	$('.js--scroll-to-start').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000);
	});
	

});

