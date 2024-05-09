const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const slideWidth = slides[0].clientWidth; // Assuming all images have the same width
let counter = 0;

function slide() {
  counter++;
  if (counter === slides.length) {
    counter = 0;
    slider.style.transition = 'none'; // Disable transition for the jump to the first slide
    slider.style.transform = `translateX(0)`;
    setTimeout(() => {
      slider.style.transition = 'transform 0.5s ease'; // Re-enable transition after the jump
    }, 50);
  }
  slider.style.transform = `translateX(-${counter * slideWidth}px)`;
}

setInterval(slide, 3000); // Change slide every 3 seconds
