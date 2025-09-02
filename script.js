// Typed.js text animation
new Typed("#typed", {
  strings: [
    "Senior Data Engineer",
    "Cloud & Streaming Specialist",
    "AWS | Snowflake | Databricks"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

// Dark/Light mode toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", document.body.dataset.theme);
});

// Apply saved theme
if (localStorage.getItem("theme")) {
  document.body.dataset.theme = localStorage.getItem("theme");
} else {
  document.body.dataset.theme = "light";
}

// Animate progress bars when skills section is visible
const skillBars = document.querySelectorAll(".progress-fill");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        const width = bar.getAttribute("style").match(/width:\s*(\d+%)/)[1];
        bar.style.width = width;
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".skills").forEach(sec => observer.observe(sec));
