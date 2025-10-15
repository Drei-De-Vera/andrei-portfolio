// ===== Theme Toggle =====
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ===== Scroll Animation =====
const sections = document.querySelectorAll(".fade-in");
const revealOnScroll = () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add("visible");
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== Toggle Project Details =====
function toggleDetails(projectId) {
  const details = document.getElementById(projectId);
  if (details.style.display === "none" || details.style.display === "")
    details.style.display = "block";
  else details.style.display = "none";
}

// ===== Email Confirmation =====
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          alert("✅ Thank you! Your message has been sent.");
          contactForm.reset();
        } else {
          alert("❌ Oops! Something went wrong. Please try again.");
        }
      })
      .catch(() => alert("❌ Network error. Please try again later."));
  });
}
