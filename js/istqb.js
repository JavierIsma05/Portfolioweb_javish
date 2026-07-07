const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('[data-carousel="prev"]');
const nextButton = document.querySelector('[data-carousel="next"]');
let currentSlide = 0;

function updateCarousel() {
  carouselSlides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}

if (prevButton && nextButton) {
  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    updateCarousel();
  });
}

const yearDetail = document.getElementById('year-detail');
if (yearDetail) {
  yearDetail.textContent = new Date().getFullYear();
}
