let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-image");
  let indicators = document.getElementsByClassName("indicator");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.opacity = "1";
  indicators[slideIndex-1].className += " active";
}

document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);

  document.getElementById('seeMenuOrderButton').onclick = function() {
    var currentTime = new Date();
    var currentDay = currentTime.getDay();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    // Convert current time to minutes since midnight
    var currentTimeInMinutes = currentHour * 60 + currentMinute;

    var isOpen = false;

    if (currentDay !== 1) { // If it's not Monday
      if ((currentTimeInMinutes >= 690 && currentTimeInMinutes <= 840) || 
          (currentTimeInMinutes >= 1050 && currentTimeInMinutes <= 1220)) { // 
        isOpen = true;
      }
    }

    if (!isOpen) {
      alert("We're sorry, the restaurant is currently closed. Please see our business hours.");
    } else {

      window.location.href = '/menu.html';
    }
  };
});
