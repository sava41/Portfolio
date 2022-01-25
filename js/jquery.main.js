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