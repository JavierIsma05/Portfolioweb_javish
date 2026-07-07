const revealElements = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('.counter');
const typingText = document.getElementById('typingText');

function setVisible(element) {
  element.classList.add('visible');
  if (element.classList.contains('counter')) {
    animateCounter(element);
  }
}

document.body.classList.add('js-animations');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));
  counters.forEach((counter) => observer.observe(counter));
} else {
  revealElements.forEach(setVisible);
  counters.forEach(setVisible);
}

function animateCounter(counter) {
  const target = Number(counter.dataset.target || 0);
  const duration = 1200;
  const startTime = performance.now();

  const tick = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * target);
    counter.textContent = `${value}${target === 100 ? '%' : '+'}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      counter.textContent = `${target}${target === 100 ? '%' : '+'}`;
    }
  };

  requestAnimationFrame(tick);
}

const typingWords = [
  'Azure',
  'automatización',
  'bases de datos',
  'testing',
  'despliegue',
  'aplicaciones móviles'
];

let typingIndex = 0;
let charIndex = 0;

function typeText() {
  if (!typingText) return;

  const word = typingWords[typingIndex];
  typingText.textContent = word.slice(0, charIndex);
  charIndex += 1;

  if (charIndex > word.length) {
    setTimeout(() => {
      charIndex = 0;
      typingIndex = (typingIndex + 1) % typingWords.length;
      typeText();
    }, 1200);
    return;
  }

  setTimeout(typeText, 90);
}

typeText();
