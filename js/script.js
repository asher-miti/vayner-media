// Mobile navbar slide animation
const navSlide = () => {
  const burger = document.querySelector(".logo__burger");
  const nav = document.querySelector(".logo__links");
  const navLinks = document.querySelectorAll(".logo__links li");

  burger.addEventListener("click", () => {
    //   Toggle navigation
    nav.classList.toggle("logo__active");

    //   Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
