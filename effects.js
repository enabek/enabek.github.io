$(document).ready(function() {
  $(window).scroll(function() {
    var bottom_of_object = $(".main-text").offset().top + $(".main-text").outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        $(".main-text").animate({'opacity':'1'},700);
      };
  });
});