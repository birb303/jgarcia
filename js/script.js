const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  });
});

// =============================================
// STICKY HEADER - Hide on scroll down, show on scroll up
// =============================================
const headerWrapper = document.querySelector(".line");
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
  const currentScrollY = window.scrollY;
  
  // Add shadow when scrolled
  if (currentScrollY > 50) {
    headerWrapper.classList.add("header-scrolled");
  } else {
    headerWrapper.classList.remove("header-scrolled");
  }
  
  // Hide/show header based on scroll direction
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down & past 100px - hide header
    headerWrapper.classList.add("header-hidden");
  } else {
    // Scrolling up - show header
    headerWrapper.classList.remove("header-hidden");
  }
  
  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateHeader();
    });
    ticking = true;
  }
});
