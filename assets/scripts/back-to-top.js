// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// if($(window).scrollTop() + $(window).height() < $(document).height() - $(".section-footer").height()) {
//     $('#return-to-top').css("position","fixed");    //resetting it
//     $('#return-to-top').css("bottom","80px"); //resetting it
// }
// if($(window).scrollTop() + $(window).height() > $(document).height() - $(".section-footer").height()) {
//     $('#return-to-top').css("position","fixed"); // make it related
//     $('#return-to-top').css("bottom","225px"); //
//  }
