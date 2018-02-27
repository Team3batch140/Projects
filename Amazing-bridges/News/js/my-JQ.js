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