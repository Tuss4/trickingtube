$(document).ready(function(){
	$('li').mouseenter(function(){
		$(this).addClass('highlighted');
	});
	$('li').mouseleave(function(){
		$(this).removeClass('highlighted');
	});
});