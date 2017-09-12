$(document).ready(function () {
  loadParticles();
  setupEmailValidation();
  setupAstronautDrag();
});

function loadParticles() {
  particlesJS("background", {
    "particles": {
      "number": {
        "value": 355
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 0.4,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 100,
          "size": 2,
          "duration": 3,
          "opacity": 1,
          "speed": 100
        },
        "repulse": {
          "distance": 1500,
          "duration": 1
        }
      }
    },
    "retina_detect": true
  });
}

function setupEmailValidation() {

  var submitEmailButton = $(".email-submit");
  var emailTextbox = $(".email-input");


  submitEmailButton.on('click', function (e) {
    e.preventDefault();

    var email = emailTextbox.val();

    if (isValidEmail(email)) {

      $("body").append("<i class='fa fa-rocket rocket'></i>");

      var rocket = $(".rocket");
      rocket.offset(($("#rocket-btn").offset()));
      rocket.addClass("take-off");

      emailTextbox.addClass('valid');
      submitEmailButton.addClass('valid');
      submitEmailButton.text("Subscribed!");

      setTimeout(function () {
        emailTextbox.removeClass("valid").val("");
        submitEmailButton.removeClass('valid');
        submitEmailButton.html('<i id="rocket-btn" class="fa fa-rocket" aria-hidden="true"></i> Subscribe');
      }, 2000);

    } else {
      emailTextbox.addClass('invalid');
      submitEmailButton.addClass('invalid');

      setTimeout(function () {
        emailTextbox.removeClass("invalid");
        submitEmailButton.removeClass('invalid');
      }, 750);
    }
  });
}

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function setupAstronautDrag() {

  var revertDuration = 2500;

  $(".astronaut-container").draggable({
    revert: true,
    revertDuration: revertDuration
  });

  $(window).on('resize', function () {
    $(".astronaut-container").removeAttr('style');
  });
}