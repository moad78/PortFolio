document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("menu-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", open);

      const icon = toggle.querySelector("i");
      icon.classList.toggle("fa-bars", !open);
      icon.classList.toggle("fa-xmark", open);
    });
  }

  // Reveal animation
  const targets = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(t => io.observe(t));
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value.trim();
  const mail = document.getElementById("mail").value.trim();
  const tel = document.getElementById("tel").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!prenom || !mail || !tel || !message) {
    alert("❌ Merci de remplir tous les champs.");
    return;
  }

  const destinataire = "seiseymoad@gmail.com"; 

  const subject = encodeURIComponent(
    "Contact depuis le portfolio – " + prenom
  );

  const body = encodeURIComponent(
    `Bonjour,

Vous avez reçu un nouveau message depuis le site portfolio. :

Prénom : ${prenom}
Email : ${mail}
Téléphone : ${tel}

Message :
${message}

---
Message envoyé depuis le portfolio`
  );

 
  window.location.href = `mailto:${destinataire}?subject=${subject}&body=${body}`;
});

