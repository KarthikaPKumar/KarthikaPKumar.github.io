// Mobile nav
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("navLinks");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (e) => {
    const a = e.target.closest(".nav-link");
    if (!a) return;
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

// Year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Scrollspy active nav link
const links = Array.from(document.querySelectorAll(".nav-link"));
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = "#" + entry.target.id;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
    });
  },
  { threshold: 0.25 }
);

sections.forEach((s) => observer.observe(s));

// Theme toggle (dark/light) with persistence
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(mode) {
  root.classList.toggle("theme-light", mode === "light");
  root.classList.toggle("theme-dark", mode !== "light");
  localStorage.setItem("theme", mode);
}

const saved = localStorage.getItem("theme");
if (saved) setTheme(saved);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = root.classList.contains("theme-light");
    setTheme(isLight ? "dark" : "light");
  });
}
