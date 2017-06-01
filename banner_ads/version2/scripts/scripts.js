(function () {
		//ISI AUTO SCROLL
		document.start = setInterval(function () {
				document.scroller = setInterval(function () {
						var div = document.getElementById('isi-holder');
						scrollMax = parseInt((div.scrollHeight - div.offsetHeight) - 5);
						if (div.scrollTop < scrollMax) {
								div.scrollTop++;
						} else {
								clearInterval(document.scroller);
						}
				}, 80);
				clearTimeout(document.start);
		}, 10200);
})();

$( document ).ready(function() {

	$('#references-link').click(function(){
		$('#references-window').toggleClass('inactive active');
	});
	
	$('#close').click(function(){
		$('#references-window').toggleClass('active inactive');
	});
});