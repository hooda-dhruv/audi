// This code initializes the Swiper.js slider.
var swiper = new Swiper(".mySwiper", {
  // Sets the default number of slides to show
  slidesPerView: 3,
  
  // Sets the space between slides
  spaceBetween: 30,
  
  // This enables the navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // This part makes the slider responsive for smaller screens
  breakpoints: {
    // When window width is less than 768px
    320: {
      slidesPerView: 1, // Show 1 slide
      spaceBetween: 10
    },
    // When window width is between 768px and 1024px
    768: {
      slidesPerView: 2, // Show 2 slides
      spaceBetween: 20
    },
    // When window width is 1024px or more
    1024: {
        slidesPerView: 3, // Show 3 slides
        spaceBetween: 30
    }
  }
});

// A small bonus to show that buttons are "working"
document.querySelectorAll('.btn, .card-content a').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the page from jumping to the top
        alert("Button clicked! You can link this to another page.");
    });
});
// --- JAVASCRIPT FOR RESPONSIVE MENU ---
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        // This adds or removes the "active" class from the menu itself
        navMenu.classList.toggle("active");
    });
}
// When the "Menu" button is clicked...
menuToggle.addEventListener("click", () => {
    // This adds or removes the ".active" class from the menu
    navMenu.classList.toggle("active");
});