// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("navLinks");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu on link click (mobile)
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("nav-link")) {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Active link highlight (scrollspy)
const links = Array.from(document.querySelectorAll(".nav-link"));
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = "#" + entry.target.id;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
    });
  },
  { root: null, threshold: 0.25 }
);

sections.forEach((s) => obs.observe(s));
