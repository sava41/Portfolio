$(document).ready(function () {

    'use strict';

    if ($('.portfolio-container').length) {
        $(window).on('load', function () {

            var isotop = $('.portfolio-container').isotope({
                itemSelector: '.mix',
                transitionDuration: 0
            });

            $('.portfolio-controls').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                isotop.isotope({
                    filter: filterValue
                });
            });

            $('.portfolio-controls').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });

        });
    }

});

// smooth scroll

$('a.smooth ').on('click',function (e) {
    // e.preventDefault();
    var target = this.hash,
    $target = $(target);

   $('html, body').stop().animate({
     'scrollTop': $target.offset().top-1
    }, 900, 'swing', function () {
     window.location.hash = target;
    });
});

// code hilight

$(document).ready(function(){
    hljs.initHighlightingOnLoad();
});