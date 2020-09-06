$(function () {
  $(document).scroll(function () {
    var $nav = $(".main-menu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

  if($(window).width() < 577){
    $(window).on('resize', function(){
        var newPhoneWidth = document.getElementById("iPhone").getBoundingClientRect().width;
        var newPhoneHeight = document.getElementById("iPhone").getBoundingClientRect().height;

        $(".phone-container").width(newPhoneWidth);
        $(".phone-container").height(newPhoneHeight);

        console.log(newPhoneWidth);

    });
  }

  // The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);


});
