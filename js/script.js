$(document).ready(function(){

	$('#nav-contact-container').hover(function(){
		$('#contact-box-wrapper').fadeIn(500)
		},function(){
		$('#contact-box-wrapper').stop().fadeOut(250);
		})

})