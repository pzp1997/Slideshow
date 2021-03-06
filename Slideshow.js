var slides = ["http://i.imgur.com/GJkGuhT.jpg", "http://i.imgur.com/HkeuWWc.jpg", "http://i.imgur.com/WHn6tz0.jpg", "http://i.imgur.com/gs2Gkok.jpg", "http://i.imgur.com/EsKPmSt.jpg"]; //Give direct links to your photos b/w "" and seperated by commas.
var delay = 3000; //Time that each photo will display for in milliseconds.
var transitionTime = 600; //Duration of the cross-fade transition in milliseconds.
var automatic = true; //toggle automatic update
var buttons = true; //toggle the previous/next buttons
var arrowKeys = true; //toggle the left/right arrow keys for previous/next

//Do not change anything else!
var $slider = $("#slider");
var $transition = $("#transition");
var displaySlider = true;
var counter, timer;

function update() {
  if (displaySlider) {
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

  displaySlider = !displaySlider;
  counter++;
  counter = counter % slides.length;
}

function manualUpdate() {
  clearInterval(timer);
  update();
  timer = setInterval(update, delay);
}

function previous() {
  if (counter === 0) {
    if (slides.length < 2) {
      counter = 0;
    } else {
      counter = slides.length - 2;
    }
  } else if (counter === 1) {
    counter = slides.length - 1;
  } else {
    counter -= 2;
  }
  manualUpdate();
}

$(document).ready(function() {
  if (slides.length < 2) {
    counter = 0;
  } else {
    counter = 1;
  }
  $transition.css({
    "background-image": "url(" + String(slides[0]) + ")"
  }).show();

  if (automatic) {
    timer = setInterval(update, delay);
  }

  if (buttons) {
    $("#back").click(function() {
      previous();
    });
    $("#next").click(function() {
      manualUpdate();
    });
  } else {
    $("#back").hide();
    $("#next").hide();
  }

  if (arrowKeys) {
    $(document).keyup(function(event) {
      switch (event.which) {
        case 37:
          previous();
          break;
        case 39:
          manualUpdate();
          break;
      }
    });
  }
});
