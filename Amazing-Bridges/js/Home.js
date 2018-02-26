// $(document).ready(function () {
//     var menu = $('#nav1');
//     $(window).scroll(function () {
//         if ($(window).scrollTop() >= 95) {
//             if (!menu.hasClass('navbar-fixed-top')) {
//                 menu.addClass('navbar-fixed-top', 0, "easeOutBounce");
//             }
//         }
//         else {
//             if (menu.hasClass('navbar-fixed-top')) {
//                 menu.removeClass('navbar-fixed-top', 0, "easeOutBounce");
//             }
//         }
//     });
// });
// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > 50) {
//         $('.menu').addClass('fixed');
//     } else {
//         $('.menu').removeClass('fixed');
//     }
// });
$("document").ready(function($){
    var nav = $('#nav1');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
});

// carousel


$(document).ready(function($) {

    $('#myCarousel').carousel({
        interval: 5000
    });

    $('#carousel-text').html($('#slide-content-0').html());

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click( function(){
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#myCarousel').carousel(id);
    });


    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-'+id).html());
    });
});


// back to top

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
(function(){
    $('#myBtn').click(function(){
        $('body,html').animate({scrollTop:0},600);
        return false;
    })
})(jQuery);