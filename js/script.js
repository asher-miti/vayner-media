// MOBILE NAVBAR SLIDE ANIMATION
const navSlide = () => {
  const burger = document.querySelector(".logo__burger");
  const nav = document.querySelector(".logo__links");
  const navLinks = document.querySelectorAll(".logo__links li");

  burger.addEventListener("click", () => {
    //   Toggle navigation
    nav.classList.toggle("wrapper-active");

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
// END OF NAVBAR ANIMATION

// CONTACT FORM TRANSITION
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
// END OF TRANSITION
