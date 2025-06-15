document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger-menu');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
  });
});

// Sleek fade-in on scroll for all sections
function revealOnScroll() {
  const reveals = document.querySelectorAll('section, .fun-facts-section, .footer');
  const windowHeight = window.innerHeight;
  reveals.forEach(function(el) {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.style.opacity = 1;
      el.style.transform = 'none';
      el.style.transition = 'opacity 0.8s, transform 0.8s';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      // Optionally close burger menu on mobile
      const navLinksDiv = document.querySelector('.nav-links');
      const burger = document.getElementById('burger-menu');
      navLinksDiv.classList.remove('active');
      burger.classList.remove('open');
    }
  });
});

// Enhance: Slide-up animation for home hero text
function revealHeroText() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const heroH1 = hero.querySelector('h1');
  const heroPs = hero.querySelectorAll('p');
  const windowHeight = window.innerHeight;
  const elementTop = hero.getBoundingClientRect().top;
  if (elementTop < windowHeight - 80) {
    if (heroH1) heroH1.style.opacity = '';
    heroPs.forEach(p => p.style.opacity = '');
    // Remove transform so CSS animation can play
    if (heroH1) heroH1.style.transform = '';
    heroPs.forEach(p => p.style.transform = '');
  }
}
window.addEventListener('scroll', revealHeroText);
window.addEventListener('DOMContentLoaded', revealHeroText);
