// aide de l'ia + video youtube regarder pour comprebdre
//pour le menu hamburger


  const menuToggle = document.querySelector('.menu-toggle');
  const navLiens = document.querySelector('.nav-liens');

  menuToggle.addEventListener('click', () => {
    navLiens.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-times');
  });