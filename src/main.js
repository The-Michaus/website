// Font Awesome icons
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTrophy } from '@fortawesome/free-solid-svg-icons';

// Tailwind CSS entry
import './style.css';

// Register icons and watch DOM for FA icon replacement
library.add(faInstagram, faPinterest, faLinkedinIn, faCheck, faTrophy);
dom.watch();

window.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarSupportedContent');

  // Navbar toggle: show/hide nav on mobile
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      navbarToggler.setAttribute('aria-expanded', String(!isExpanded));
      navbarCollapse.classList.toggle('show');
    });
  }

  // Close navbar when a nav link is clicked on mobile
  const navLinks = document.querySelectorAll('#navbarSupportedContent .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.setAttribute('aria-expanded', 'false');
        navbarCollapse.classList.remove('show');
      }
    });
  });

  // Scrollspy: highlight active nav link based on visible section
  const sections = document.querySelectorAll('section[id]');
  const navLinkMap = {};

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      navLinkMap[href.slice(1)] = link;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const link = navLinkMap[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.values(navLinkMap).forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    {
      // Activate when section enters the top half of the viewport
      rootMargin: '0px 0px -50% 0px',
      threshold: 0,
    }
  );

  sections.forEach(section => observer.observe(section));
});
