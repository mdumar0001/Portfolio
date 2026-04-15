// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Projects Data
const projects = [
  {
    id: 1,
    title: "Smart Agriculture System",
    description:
      "ML based system for smart crop recommendation and yield prediction to optimize farming practices and increase productivity.",
    techStack: ["Python", "NLTK", "Flask", "sklearn", "TensorFlow", "pandas"],
    category: "aiml",
    image: "images/smart_agriculture.png",
    liveLink: "https://smart-agriculture-system-he49.onrender.com",
    githubLink: "https://github.com/mdumar0001/Smart-Agriculture-System",
  },
  {
    id: 2,
    title: "AI Code Debugger Fixer & Translator",
    description:
      "AI-powered tool that analyzes code snippets, identifies bugs, provides fixes, and translates code between programming languages.",
    techStack: [
      "React",
      "Express",
      "Google-Gemini",
      "CodeMirror",
      "MongoDB",
      "Tailwind CSS",
    ],
    category: "aiml",
    image: "images/ai_code_debugger.png",
    liveLink: "https://code-debugger-fixer-translator-2-clients.onrender.com/",
    githubLink: "https://github.com/mdumar0001/Code-Debugger-Fixer-Translator",
  },
  {
    id: 3,
    title: "Doctor's appointment booking system",
    description:
      "MERN stack application for booking doctor appointments with user authentication, doctor profiles, and appointment scheduling features.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    category: "mern",
    image: "images/doctors.png",
    liveLink: "https://prescripto-alpha-cyan.vercel.app/",
    githubLink: "https://github.com/mdumar0001/PRESCRIPTO",
  },
  {
    id: 4,
    title: "MERN E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    category: "mern",
    image: "images/ecommerce.png",
    liveLink: "https://umar-stores1.vercel.app/",
    githubLink: "https://github.com/mdumar0001/Umar-Stores1",
  },
  {
    id: 5,
    title: "Responsive Burger Website",
    description:
      "Built responsive burger website with scroll-triggered animations using ScrollReveal, implemented dynamic navbar that highlights sections on scroll.",
    techStack: ["HTML", "CSS", "JavaScript", "ScrollReveal"],
    category: "html-css-js",
    image: "images/burger.png",
    liveLink: "https://responsive-burger-website-qbe9.vercel.app",
    githubLink: "https://github.com/mdumar0001/responsive-burger-website",
  },
  {
    id: 6,
    title: "Responsive Chips Ordering Platform",
    description:
      "Developed a custom chips system mimicking material design principles, implemented responsive behavior using CSS media queries, utilizing DOM manipulation and custom scroll animation library.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "html-css-js",
    image: "images/preview.png",
    liveLink: "https://responsive-chips-website-livid.vercel.app",
    githubLink: "https://github.com/mdumar0001/Responsive-chips-website",
  },
];

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1000);
});

// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  setTimeout(() => {
    cursorFollower.style.left = e.clientX + "px";
    cursorFollower.style.top = e.clientY + "px";
  }, 100);
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
  cursorFollower.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
  cursorFollower.style.opacity = "0";
});

// Hover effect on buttons
const hoverElements = document.querySelectorAll("a, button, .btn");
hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(1.5)";
    cursorFollower.style.transform = "scale(1.5)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursorFollower.style.transform = "scale(1)";
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
let isDarkMode = true;

themeToggle.addEventListener("click", () => {
  if (isDarkMode) {
    document.body.setAttribute("data-theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    isDarkMode = false;
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    isDarkMode = true;
  }
});

// Set default theme
document.body.setAttribute("data-theme", "dark");

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update active nav link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});

// Update active nav link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Typed Text Effect
const typedTextSpan = document.querySelector(".typed-text");
const textArray = [
  "MERN Stack Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
  "Full Stack Developer",
];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1,
    );
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, 500);
  }
}

setTimeout(type, 1000);

// Load Projects
function loadProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  let filteredProjects = projects;
  if (filter !== "all") {
    filteredProjects = projects.filter((p) => p.category === filter);
  }

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
        <div class="project-card" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    ${project.liveLink !== "#" ? `<a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : ""}
                    ${project.githubLink !== "#" ? `<a href="${project.githubLink}" target="_blank"><i class="fab fa-github"></i></a>` : ""}
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 100)}${project.description.length > 100 ? "..." : ""}</p>
                <div class="project-tech">
                    ${project.techStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Project Filters
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    loadProjects(filter);
  });
});

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Show success message
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. I will get back to you soon!",
      icon: "success",
      confirmButtonColor: "#6c63ff",
      background: "#1a1a2e",
      color: "#fff",
    });

    contactForm.reset();
  });
}

// Download CV
document.getElementById("downloadCV")?.addEventListener("click", (e) => {
  e.preventDefault();
  Swal.fire({
    title: "CV Download",
    text: "CV download feature coming soon!",
    icon: "info",
    confirmButtonColor: "#6c63ff",
    background: "#1a1a2e",
    color: "#fff",
  });
});

// Initialize projects
loadProjects();

// Add animation to cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
    }
  });
}, observerOptions);

document
  .querySelectorAll(".skill-card, .project-card, .cert-card")
  .forEach((el) => {
    observer.observe(el);
  });

// Parallax effect for hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
