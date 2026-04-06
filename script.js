document.addEventListener("DOMContentLoaded", () => {

  // ================= HERO SLIDER =================
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0;
  let sliderInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (dots[i]) dots[i].classList.remove("active");
    });

    if (slides[index]) slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function startSlider() {
    if (slides.length > 0) {
      showSlide(current);
      sliderInterval = setInterval(nextSlide, 6000);
    }
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      current = index;
      showSlide(current);
      clearInterval(sliderInterval);
      startSlider();
    });
  });

  startSlider();


  // ================= HERO FULL TYPING =================
  const heroTyping = document.getElementById("hero-typing");

  const words = [
    "I am a Frontend Developer",
    "I am a UI/UX Designer",
    "I am a Creative Thinker",
    "I am a Problem Solver"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeHero() {
    if (!heroTyping) return;

    let currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    heroTyping.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeHero, 1500);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeHero, isDeleting ? 50 : 100);
  }

  typeHero();


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


  // ================= CARD CLICK ANIMATION =================
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.95)";
      setTimeout(() => {
        card.style.transform = "";
      }, 150);
    });
  });


  // ================= NAVIGATION =================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
    });
  }


  // ================= LOADER TYPING =================
  const loaderText = "Initializing portfolio...";
  let loaderIndex = 0;

  function loaderTyping() {
    const loaderTypingElement = document.getElementById("loader-typing");

    if (!loaderTypingElement) return;

    if (loaderIndex < loaderText.length) {
      loaderTypingElement.innerHTML += loaderText.charAt(loaderIndex);
      loaderIndex++;
      setTimeout(loaderTyping, 40);
    }
  }

  loaderTyping();


  // ================= LOADER PROGRESS + SLOW FADE =================
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const percent = document.getElementById("loader-percent");

    let progress = 0;

    const interval = setInterval(() => {
      progress++;

      if (percent) percent.textContent = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          if (loader) loader.classList.add("hide");
        }, 500);
      }

    }, 30); // increase to 40–50 if you want slower
  });


  // ================= CUSTOM CURSOR =================
  const cursor = document.getElementById("cursor");

  if (cursor) {
    document.addEventListener("mousemove", e => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    });
  }


  // ================= ABOUT SECTION ANIMATION =================
  const aboutContent = document.querySelector(".about-content");

  function revealAbout() {
    if (!aboutContent) return;

    const sectionTop = aboutContent.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;

    if (sectionTop < triggerPoint) {
      aboutContent.classList.add("fade-in");
    }
  }

  window.addEventListener("scroll", revealAbout);
  revealAbout();

});