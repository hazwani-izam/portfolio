// calculate diagram svg height
// $(window).on('load resize', function () {
//     var diagramWidth = $(".diagram").width();
//     var newDiagramHeight = diagramWidth * (350/1080);
//     $('.diagram').height(newDiagramHeight);
// });

// start animation when element is in view
function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

jQuery( document ).ready( function() {
	$(window).on("load scroll",function(e){
		if( isOnScreen( jQuery('#diagram1 .diagram') ) ) { /* Pass element id/class you want to check */
      $("#diagram1").find(".bar").removeClass("pause");
 		}

    if( isOnScreen( jQuery('#diagram2 .diagram') ) ) { /* Pass element id/class you want to check */
      $("#diagram2").find(".bar").removeClass("pause");
 		}

	});
});
