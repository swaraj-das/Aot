document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector(".slides");
  const slideWidth = slides.clientWidth;
  const dotsContainer = document.querySelector(".dots");
  const dots = [];
  const arrows = document.querySelectorAll('.arrow');

  // Create dots
  for (let i = 0; i < slides.children.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dotsContainer.appendChild(dot);
      dots.push(dot);
      dot.addEventListener("click", function() {
          goToSlide(i);
      });
  }
  dots[0].classList.add("active");

  let currentIndex = 0;

  function goToSlide(index) {
      if (index < 0 || index >= slides.children.length || index === currentIndex) {
          return;
      }

      slides.style.transform = `translateX(-${index * slideWidth}px)`;
      dots[currentIndex].classList.remove("active");
      dots[index].classList.add("active");
      currentIndex = index;
  }

  function nextSlide() {
      const nextIndex = (currentIndex + 1) % slides.children.length;
      goToSlide(nextIndex);
  }

  function prevSlide() {
      const prevIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
      goToSlide(prevIndex);
  }

  arrows.forEach(arrow => {
      arrow.addEventListener('click', function() {
          if (arrow.classList.contains('prev')) {
              prevSlide();
          } else if (arrow.classList.contains('next')) {
              nextSlide();
          }
      });
  });

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});










