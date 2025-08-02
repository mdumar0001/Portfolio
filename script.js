// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });

    // Update active nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Scroll animation for elements
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // For project cards - staggered animation
        if (entry.target.classList.contains("project-card")) {
          setTimeout(() => {
            entry.target.classList.add("appear");
          }, 200);
        }
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }
);

document.querySelectorAll(".animate-on-scroll, .project-card").forEach((el) => {
  observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = -scrollPosition * 0.5 + "px";
});

// Typewriter effect for hero text
const heroTitle = document.querySelector(".hero h1");
const originalText = heroTitle.innerHTML;
let charIndex = 0;

function typeWriter() {
  if (charIndex < originalText.length) {
    heroTitle.innerHTML =
      originalText.substring(0, charIndex + 1) +
      '<span class="blinking-cursor">|</span>';
    charIndex++;
    setTimeout(typeWriter, 50);
  } else {
    heroTitle.innerHTML =
      originalText + '<span class="blinking-cursor">|</span>';
  }
}

// Start typing after a delay
setTimeout(() => {
  heroTitle.innerHTML = "";
  typeWriter();
}, 500);
