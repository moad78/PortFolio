// ===== Menu hamburger + animations portfolio =====
document.addEventListener("DOMContentLoaded", () => {
  // ----- MENU -----
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("menu-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.classList.toggle("open", isOpen);

      // change l'icône (bars <-> x)
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);
      }
    });

    // ferme le menu si on clique en dehors (mobile)
    document.addEventListener("click", (e) => {
      const clickedInside = nav.contains(e.target) || toggle.contains(e.target);
      if (!clickedInside && nav.classList.contains("active")) {
        nav.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        toggle.classList.remove("open");
        const icon = toggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      }
    });

    // ferme le menu si on clique sur un lien (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
          nav.classList.remove("active");
          toggle.setAttribute("aria-expanded", "false");
          toggle.classList.remove("open");
          const icon = toggle.querySelector("i");
          if (icon) {
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
          }
        }
      });
    });
  }

  // ----- APPARITION AU SCROLL (sections + cartes) -----
  const revealTargets = document.querySelectorAll(".hero, .section, .card");

  // si l'utilisateur préfère réduire les animations, on respecte
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    revealTargets.forEach(el => el.classList.add("reveal"));

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => io.observe(el));
  }

  // ----- EFFET "TAP" sur les cartes -----
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mousedown", () => {
      card.style.transform = "translateY(-2px) scale(0.99)";
    });
    card.addEventListener("mouseup", () => {
      card.style.transform = "";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
});
