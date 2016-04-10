$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll <= 400) {
        $("#sticker").addClass("backColor");
        $('.name').removeClass('trans');
        $('#dot').removeClass('dot-color');
    } else {
    	$("#sticker").removeClass("backColor").addClass("toColor");
      $('.name').addClass('trans');
      $('#dot').addClass('dot-color');
    }
});