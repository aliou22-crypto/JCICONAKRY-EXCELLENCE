document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const year = document.getElementById("year");
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("open");
    });
  }

  if (form && formMessage) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        formMessage.textContent = "Veuillez remplir tous les champs avant d'envoyer votre message.";
        formMessage.className = "form-message error";
        return;
      }

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!emailValid) {
        formMessage.textContent = "Veuillez entrer une adresse e-mail valide.";
        formMessage.className = "form-message error";
        return;
      }

      formMessage.textContent = `Merci ${name}, votre message a bien été envoyé. Nous vous répondrons très bientôt.`;
      formMessage.className = "form-message success";
      form.reset();
    });
  }
});
