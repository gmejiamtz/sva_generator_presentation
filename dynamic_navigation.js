document.addEventListener("DOMContentLoaded", function () {
  // Function to check for sub-slides
  function hasSubSlides(slide) {
    const subSlides = slide.querySelectorAll("section");
    return subSlides.length > 0;
  }

  // Function to toggle navigation arrows
  function toggleNavigationArrows() {
    const currentSlide = Reveal.getCurrentSlide();

    if (hasSubSlides(currentSlide)) {
      // If the slide has sub-slides, show up/down arrows
      document.querySelector(".reveal .navigate-left").style.display = "none";
      document.querySelector(".reveal .navigate-right").style.display = "none";
      document.querySelector(".reveal .navigate-up").style.display = "block";
      document.querySelector(".reveal .navigate-down").style.display = "block";
    } else {
      // If the slide does not have sub-slides, show left/right arrows
      document.querySelector(".reveal .navigate-left").style.display = "block";
      document.querySelector(".reveal .navigate-right").style.display = "block";
      document.querySelector(".reveal .navigate-up").style.display = "none";
      document.querySelector(".reveal .navigate-down").style.display = "none";
    }
  }

  // Listen for slide change events to dynamically update navigation arrows
  Reveal.on("slidechanged", function (event) {
    toggleNavigationArrows();
  });

  // Initial call to check the first slide
  toggleNavigationArrows();
});
