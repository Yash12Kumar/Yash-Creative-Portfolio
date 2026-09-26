// ===============================
// YASH PORTFOLIO — EDIT THIS FILE
// ===============================

// Change this email to your own email before publishing.
const YOUR_EMAIL = "yashkoli7211@gmail.com";
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const glow = document.querySelector(".cursor-glow");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

window.addEventListener("pointermove", e => {
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("projectForm")?.addEventListener("submit", e => {
  e.preventDefault();

  if (YOUR_EMAIL === "your-email@example.com") {
    alert("Please edit YOUR_EMAIL in script.js first.");
    return;
  }

  const data = new FormData(e.currentTarget);
  const subject = `New Design Project — ${data.get("service") || "Project"}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Service: ${data.get("service")}`,
    `Budget: ${data.get("budget") || "Not specified"}`,
    "",
    "Project details:",
    data.get("details")
  ].join("\n");

  data.append("access_key", "42319a4b-ac92-4b86-a939-06f2e27368ca");

fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: data
})
  .then(response => response.json())
  .then(result => {
    if (result.success) {
      alert("Message sent successfully!");
      document.getElementById("projectForm").reset();
    } else {
      alert("Message could not be sent.");
      console.log(result);
    }
  })
  .catch(error => {
    console.log(error);
    alert("Something went wrong.");
  });
});
