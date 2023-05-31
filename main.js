const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle('toggle');
  });
};
  
navSlide();
          

    // Toggle the footer links on small screens
const footerLinksToggle = () => {
  const footerLinks = document.querySelector('.footer-content ul');
  const toggleButton = document.createElement('button');
  toggleButton.classList.add('toggle-button');
  toggleButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
  footerLinks.parentNode.insertBefore(toggleButton, footerLinks.nextSibling);
  toggleButton.addEventListener('click', () => {
    footerLinks.classList.toggle('active');
    if (footerLinks.classList.contains('active')) {
      toggleButton.innerHTML = '<i class="fas fa-chevron-down"></i>';
    } else {
      toggleButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    }
  });
}

// Call the footer links toggle function on page load
window.addEventListener('load', () => {
  footerLinksToggle();
});


