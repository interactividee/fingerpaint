$( document ).ready(function() {
	//initiate jScrollPane, set time length of scroll, set height of scrollDrag
	var element = $('.scroll-pane').jScrollPane({ animateDuration: 200000, showArrows:false, verticalDragMinHeight: 8});
	
	//declare element reference for API
	jscrollpane_api = element.data('jsp');

	//auto-scroll function with stopper on hover
	setTimeout(function(){
		//check to see if user is hovering
		var isHovered = $('#ISI').is(':hover');
		if (isHovered == false) {
			jscrollpane_api.scrollToY(4160, true);
			$('#ISI').hover(function() {
				$('.jspPane, .jspDrag').stop();
			});
		}
	}, 60000);
	
	//third screen, button hover treatment
	$('#buttonLink').hover(function(){
		$('#cta').css('background-color','#81c96b');
	}, function(){
		$('#cta').css('background-color','#62bb46');
		});
});
