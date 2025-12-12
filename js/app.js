const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("menu-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    // swap icône bars <-> x
    const icon = menuToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars", !isOpen);
      icon.classList.toggle("fa-xmark", isOpen);
    }
  });

  // Ferme si clic en dehors
  document.addEventListener("click", (e) => {
    const clickedInside = nav.contains(e.target) || menuToggle.contains(e.target);
    if (!clickedInside && nav.classList.contains("active")) {
      nav.classList.remove("active");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");

      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
      }
    }
  });

  // Ferme quand on clique sur un lien (mobile)
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");

        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      }
    });
  });
}
