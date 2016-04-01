$(document).ready(function() {
	// when hovering over post change selected color to blue and others to red
	// each text should transition one after another to opposite sides
	var posts = $('#posts li a')
	var speed = 350;

	posts.hover(
		function() {
			$(this).addClass('selected').css('color', 'red');
			$('#posts li a:not(.selected)').css('opacity', '0.2');
			$('#posts li a:even:not(.selected)').stop().animate({'margin-left': '250px'}, speed);
			$('#posts li a:odd:not(.selected)').stop().animate({'margin-right':'250px'}, speed);
		},
		function() {
			$('#posts li a:not(.selected)').css('opacity', '1');
			$('#posts li a:even:not(.selected)').stop().animate({'margin-left': '0px'}, speed);
			$('#posts li a:odd:not(.selected)').stop().animate({'margin-right':'0px'}, speed);
			posts.removeClass('selected');
			posts.css('color', 'white');
		}
	);

	$(function() {
		$(document).tooltip();
	});
});