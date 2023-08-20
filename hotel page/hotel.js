let dropdown_container_1 = document.querySelector(".dropdown-container-1");
let dropdown_container_2 = document.querySelector(".dropdown-container-2");
let dropdown_hidden_1 = document.querySelector(".dropdown-hidden-1");
let dropdown_hidden_2 = document.querySelector(".dropdown-hidden-2");
let body = document.querySelector("body");

// Function to close the dropdown when clicking outside
function closeDropdown() {
    dropdown_hidden_1.classList.remove("dropdown-visible-1");
    dropdown_hidden_2.classList.remove("dropdown-visible-2");
}

// Click event listener for dropdown container 1
dropdown_container_1.addEventListener("click", () => {
    dropdown_hidden_1.classList.toggle("dropdown-visible-1");
    dropdown_hidden_2.classList.remove("dropdown-visible-2");
});

// Click event listener for dropdown container 2
dropdown_container_2.addEventListener("click", () => {
    dropdown_hidden_2.classList.toggle("dropdown-visible-2");
    dropdown_hidden_1.classList.remove("dropdown-visible-1");
});

// Global click event listener to close dropdown when clicking outside
body.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown-container-1") && !event.target.closest(".dropdown-container-2")) {
        closeDropdown();
    }
});

// Focusout event listener for dropdown container 1
dropdown_container_1.addEventListener("focusout", () => {
    closeDropdown();
});

// ----------------------------------------------------------------------------------------------
// Start Swiper
var swiper = new Swiper(".slide-content-1", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
  },
  autoplay: {
      delay: 3000,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          autoplay: false, // Stop autoplay on small screens
          loop: false,
      },
      768: { // Adjusted breakpoint
          slidesPerView: 1,
          autoplay: false, // Stop autoplay on small screens
          loop: false,
      },
      992: {
          slidesPerView: 2,
          autoplay: false, // Stop autoplay on small screens
          loop: false,
      },
      1200: {
          slidesPerView: 3,
      },
  },
});
