$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll <= 400) {
        $("#sticker").addClass("backColor");
        $('.name').removeClass('trans');
        $('#dot').removeClass('dot-color');

        var links = $(".nav-link");
        if ( links.hasClass("active") ) {
          links.removeClass("active");
        }
        $('.home').addClass("active");

    } else if ( scroll >= 500 && scroll <= 1200) {
        $("#sticker").removeClass("backColor").addClass("toColor");
        $('.name').addClass('trans');
        $('#dot').addClass('dot-color');

        var links = $(".nav-link");
        if ( links.hasClass("active") ) {
          links.removeClass("active");
        }
        $('.about').addClass("active");

    } else if ( scroll >= 1300 && scroll <= 1500 ) {
        var links = $(".nav-link");
        if ( links.hasClass("active") ) {
          links.removeClass("active");
        }
        $('.projects').addClass("active");

    } else if ( scroll >= 1800 ) {
        var links = $(".nav-link");
        if ( links.hasClass("active") ) {
          links.removeClass("active");
        }
        $('.contact').addClass("active");
    }
});