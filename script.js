document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const slideWidth = slides.clientWidth;
  const dotsContainer = document.querySelector(".dots");
  const dots = [];
  const arrows = document.querySelectorAll(".arrow");

  // Create dots
  for (let i = 0; i < slides.children.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
    dots.push(dot);
    dot.addEventListener("click", function () {
      goToSlide(i);
    });
  }
  dots[0].classList.add("active");

  let currentIndex = 0;

  function goToSlide(index) {
    if (
      index < 0 ||
      index >= slides.children.length ||
      index === currentIndex
    ) {
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
    const prevIndex =
      (currentIndex - 1 + slides.children.length) % slides.children.length;
    goToSlide(prevIndex);
  }

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", function () {
      if (arrow.classList.contains("prev")) {
        prevSlide();
      } else if (arrow.classList.contains("next")) {
        nextSlide();
      }
    });
  });

  setInterval(nextSlide, 5000); // Change slide every 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the navigation links
  const homeLink = document.querySelector(".home-link");
  const aboutLink = document.querySelector(".about-link");
  const courseLink = document.querySelector(".course-link");

  // Get the sections
  const homeSection = document.getElementById("home-section");
  const aboutSection = document.getElementById("about-section");
  const courseSection = document.getElementById("course-section");

  // Add click event listeners to the navigation links
  homeLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Option 1: Using scrollIntoView with behavior: smooth (modern browsers)
    homeSection.scrollIntoView({ behavior: "smooth" });

    // Option 2: Using a custom smooth scrolling function (for older browsers)
    // You can find implementations of smooth scrolling functions online.
  });

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  courseLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    courseSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("message-form");

  messageForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the user's message
    const message = document.getElementById("message").value;

    // You can handle the message submission here, for example, send it to a server

    // For demonstration purposes, let's just log the message to the console
    console.log("User's Message:", message);

    // Optionally, you can clear the textarea after submitting the message
    document.getElementById("message").value = "";
  });
});

const researchBox = document.getElementById("researchBox");
researchBox.addEventListener("click", () => {
  researchBox.classList.toggle("expanded");
});
