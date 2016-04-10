$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $("#sticker").addClass("toColor");
    } else {
    	$("#sticker").removeClass("toColor")
    }
});


// $('#sticker').onePageNav({
// 	filter: ':not(.external)'
// });