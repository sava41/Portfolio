// init Isotope
var $grid = null;
$(window).on('load resize', function () {
    $grid = $('.portfolio-container').isotope({
        itemSelector: '.mix',
        transitionDuration: 0,
        percentPosition: true,
        masonry: {
            columnWidth: '.mix'
        }
    })
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

// bind filter button click
$('.portfolio-controls').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
        filter: filterValue
    });
});

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

// smooth scroll
$('a.smooth ').on('click', function (e) {
    // e.preventDefault();
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 1
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});


// mp4 img attributes
var videoAttr = { 'autoplay': true, 'loop': true, 'mute': true, 'playsinline': true, 'poster': "images/loading.svg"};
var imgMP4s = Array.prototype.map.call(
    document.querySelectorAll('img[src*=".mp4"]'),
    function(img){

    var src = img.src;
    img.src = null;

    img.addEventListener('error', function(e){
        console.log('MP4 in image not supported. Replacing with video', e); 
        var video = document.createElement('video');

        for (var key in videoAttr) { video.setAttribute(key, videoAttr[key]); }

        for (var imgAttr = img.attributes, len = imgAttr.length, i = 0; i < len; i++) { 
            video.setAttribute(imgAttr[i].name,  imgAttr[i].value); 
        }

        img.parentNode.insertBefore(video, img);
        img.parentNode.removeChild(img);
    });

    img.src = src;
  });


// code hilight
$(document).ready(function () {
    hljs.highlightAll();
});