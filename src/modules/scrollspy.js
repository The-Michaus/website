export function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navbarSupportedContent .nav-link');
  const navLinkMap = {};

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href?.startsWith('#')) navLinkMap[href.slice(1)] = link;
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
    { rootMargin: '0px 0px -50% 0px', threshold: 0 }
  );

  sections.forEach(section => observer.observe(section));
}
