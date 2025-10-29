const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

function donateNow(type) {
  alert("Thank you for choosing to support us via ${type} Donation! ❤️");
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(
      "Thank you, ${name}! Your message has been received. We'll get back to you soon. 🐶"
    );
    event.target.reset();
  }
}

// Scroll Animation
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Initial check
