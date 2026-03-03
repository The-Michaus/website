export function initNavbar() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarSupportedContent');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      navbarToggler.setAttribute('aria-expanded', String(!isExpanded));
      navbarCollapse.classList.toggle('show');
    });
  }

  const navLinks = document.querySelectorAll('#navbarSupportedContent .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.setAttribute('aria-expanded', 'false');
        navbarCollapse.classList.remove('show');
      }
    });
  });
}
