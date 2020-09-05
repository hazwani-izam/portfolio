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


});
