$(document).ready(function() {
	$('.thumbnail').css('opacity','0.8');
	$('.thumbnail').mouseover(function() {
		$(this).fadeTo(100,1);
		$('.thumbnail').not(this).fadeTo(100,0.6);

	});

});
