var slides = ["http://i.imgur.com/GJkGuhT.jpg", "http://i.imgur.com/HkeuWWc.jpg", "http://i.imgur.com/WHn6tz0.jpg", "http://i.imgur.com/gs2Gkok.jpg", "http://i.imgur.com/EsKPmSt.jpg"]; //Give direct links to your photos b/w "" and seperated by commas.
var delay = 3000; //Time that each photo will display for in milliseconds.
var transitionTime = 600; //Duration of the cross-fade transition in milliseconds.

//Do not change anything else!
var $slider = $("#slider");
var $transition = $("#transition");
var counter = 1;
var display = true;

function update() {
    if (display) {
        $slider.css({
            "background-image": "url(" + String(slides[counter]) + ")"
        });
        $transition.fadeOut(transitionTime);
        $slider.fadeIn(transitionTime);
    } else {
        $transition.css({
            "background-image": "url(" + String(slides[counter]) + ")"
        });
        $slider.fadeOut(transitionTime);
        $transition.fadeIn(transitionTime);
    }

    display = !display;
    counter++;
    counter = counter % slides.length;
}

$(document).ready(function () {
    $transition.css({
        "background-image": "url(" + String(slides[0]) + ")"
    }).show();
    setInterval(update, delay);
});