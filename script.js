// ================= HERO SLIDER =================
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;
let sliderInterval;

// Show slide by index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

// Next slide
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Start auto slider
function startSlider() {
  sliderInterval = setInterval(nextSlide, 6000); // 6s per slide
}

// Dot click functionality
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current = index;
    showSlide(current);
    clearInterval(sliderInterval);
    startSlider();
  });
});

// Initialize slider
startSlider();

// ================= HERO TYPING EFFECT =================
const words = ["Frontend Developer", "UI/UX Designer", "Problem Solver"];
let i = 0, j = 0;
let isDeleting = false;

function type() {
  const typingElement = document.getElementById("typing");
  const currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  typingElement.textContent = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// ================= PROJECTS SCROLL REVEAL =================
const cards = document.querySelectorAll(".card");

function revealCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealCards);
revealCards();

// Optional click animation for cards
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});

// ================= NAVIGATION HAMBURGER =================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});

// ================= LOADER FADEOUT =================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// ================= CUSTOM CURSOR =================
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});
const aboutContent = document.querySelector(".about-content");

function revealAbout() {
    const sectionTop = aboutContent.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;

    if(sectionTop < triggerPoint){
        aboutContent.classList.add("fade-in");
    }
}

window.addEventListener("scroll", revealAbout);
revealAbout();