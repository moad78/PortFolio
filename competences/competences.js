document.addEventListener("DOMContentLoaded", () => {
  // ===== Menu hamburger =====
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("menu-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

      // swap icône bars <-> x
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);
      }
    });

    // ferme si clic dehors
    document.addEventListener("click", (e) => {
      const clickedInside = nav.contains(e.target) || toggle.contains(e.target);
      if (!clickedInside && nav.classList.contains("active")) {
        nav.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        const icon = toggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      }
    });
  }

  // ===== Reveal au scroll =====
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    const targets = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(t => io.observe(t));
  } else {
    document.querySelectorAll(".reveal").forEach(t => t.classList.add("is-visible"));
  }

  // ===== Mini “tilt” léger (sans lib) sur les cartes =====
  const cards = document.querySelectorAll("[data-tilt]");
  if (!reduceMotion) {
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-4px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }
});
