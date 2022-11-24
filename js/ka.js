$(function () {


  AOS.init();



  //DirectTop
  $(window).scroll(function () {
    var $scrollTop = $(this).scrollTop();
    console.log($scrollTop);

    if ($scrollTop < 800) {
      $('.toTop .top').fadeOut();
    } else {
      $('.toTop .top').fadeIn();
    }
  });

  $('.toTop .top').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 500)
  });




})