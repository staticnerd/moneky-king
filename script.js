// ==========================================
// MONKEY KING CINEMATIC WEBSITE
// PREMIUM INTERACTIONS
// ==========================================

// FADE UP ANIMATION

const fadeElements = document.querySelectorAll(
  '.section, .hero, .stat-box, .overview-card, .vision-card, .business-card, .team-card, .pdf-card, .audience-card, .timeline-item'
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

}, {
  threshold:0.12
});

fadeElements.forEach((el) => {

  el.classList.add('fade-up');

  observer.observe(el);

});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 40){

    navbar.style.background =
      'rgba(231,216,181,0.97)';

    navbar.style.boxShadow =
      '0 12px 40px rgba(0,0,0,0.08)';

    navbar.style.borderBottom =
      '1px solid rgba(0,0,0,0.05)';

  } else {

    navbar.style.background =
      'rgba(231,216,181,0.45)';

    navbar.style.boxShadow = 'none';

  }

});

// ==========================================
// HERO PARALLAX EFFECT
// ==========================================

window.addEventListener('scroll', () => {

  const scrolled = window.pageYOffset;

  const heroImage =
    document.querySelector('.hero-art img');

  if(heroImage){

    heroImage.style.transform =
      `translateY(${scrolled * 0.04}px)`;

  }

});

// ==========================================
// SMOOTH ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 180;

    const sectionHeight =
      section.clientHeight;

    if(pageYOffset >= sectionTop){

      current = section.getAttribute('id');

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove('active-link');

    if(link.getAttribute('href') === `#${current}`){

      link.classList.add('active-link');

    }

  });

});

// ==========================================
// HOVER GLOW EFFECT
// ==========================================

const cards = document.querySelectorAll(
  '.overview-card, .vision-card, .team-card, .pdf-card'
);

cards.forEach((card) => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background =
      `radial-gradient(circle at ${x}px ${y}px,
      rgba(183,134,46,0.10),
      rgba(255,255,255,0.02) 45%)`;

  });

  card.addEventListener('mouseleave', () => {

    card.style.background = '';

  });

});

// ==========================================
// CINEMATIC BUTTON INTERACTION
// ==========================================

const buttons = document.querySelectorAll(
  '.btn-primary, .btn-secondary, .download-btn'
);

buttons.forEach((button) => {

  button.addEventListener('mouseenter', () => {

    button.style.transform =
      'translateY(-3px) scale(1.01)';

  });

  button.addEventListener('mouseleave', () => {

    button.style.transform =
      'translateY(0px) scale(1)';

  });

});

// ==========================================
// MOBILE NAV AUTO SCROLL
// ==========================================

const mobileNav = document.querySelector('nav');

if(window.innerWidth < 768){

  navLinks.forEach((link) => {

    link.addEventListener('click', () => {

      setTimeout(() => {

        mobileNav.scrollLeft =
          link.offsetLeft - 20;

      }, 200);

    });

  });

}

// ==========================================
// GALLERY CINEMATIC HOVER
// ==========================================

const galleryItems = document.querySelectorAll(
  '.gallery-item, .gallery-large'
);

galleryItems.forEach((item) => {

  item.addEventListener('mouseenter', () => {

    item.style.transform =
      'scale(1.02)';

    item.style.transition =
      '0.7s ease';

  });

  item.addEventListener('mouseleave', () => {

    item.style.transform =
      'scale(1)';

  });

});

// ==========================================
// HERO TEXT ENTRANCE
// ==========================================

window.addEventListener('load', () => {

  document.body.classList.add('loaded');

});

// ==========================================
// LIGHT CINEMATIC SCROLL EFFECT
// ==========================================

window.addEventListener('scroll', () => {

  const scrollY = window.scrollY;

  document.body.style.backgroundPositionY =
    `${scrollY * 0.2}px`;

});

// ==========================================
// PREVENT IMAGE DRAG
// ==========================================

document.querySelectorAll('img').forEach((img) => {

  img.setAttribute('draggable', false);

});

// ==========================================
// END
// ==========================================