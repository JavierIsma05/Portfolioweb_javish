const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('theme-amber');
    const isAmber = document.body.classList.contains('theme-amber');
    themeToggle.textContent = isAmber ? 'Tema azul' : 'Tema ámbar';
  });
}

if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 600);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === 'all' || category === filter;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Por favor completa todos los campos.';
      return;
    }

    if (!email.includes('@')) {
      formMessage.textContent = 'Introduce un correo válido.';
      return;
    }

    formMessage.textContent = 'Gracias por tu mensaje. Te responderé pronto.';
    contactForm.reset();
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
