$(document).ready(function(){

	$('.js-button__notice').click(function(){
		$('.box__event-layer').hide();
		$(this).next().toggle().attr('tabindex', 0).focus();
	});

	$('.js-button__close-layer').click(function(){
		$(this).parent().removeAttr("tabindex").hide();
		$(this).parents('.box__inner').find('.js-button__notice').focus();
	});

});