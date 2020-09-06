$(function () {
  $(document).scroll(function () {
    var $nav = $(".main-menu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });


    // smooth scroll
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        300,
        'linear'
      )
    })

    $('.portfolio-trigger').click(function() {
      $('.portfolio-trigger').removeClass('active');
      $(this).addClass('active');
    });
});
