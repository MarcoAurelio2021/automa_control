// MENU HAMBÚRGUER
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('active')));

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
  });
});

// CARROSSEL HERO COM SWIPE
window.addEventListener('load', () => {
  const heroImages = document.querySelectorAll('.hero-image img');
  const heroContainer = document.querySelector('.hero-image');
  let current = 0;
  let interval = setInterval(nextImage, 3000);

  function nextImage() {
    heroImages.forEach(img => img.classList.remove('active'));
    current = (current + 1) % heroImages.length;
    heroImages[current].classList.add('active');
  }

  function prevImage() {
    heroImages.forEach(img => img.classList.remove('active'));
    current = (current - 1 + heroImages.length) % heroImages.length;
    heroImages[current].classList.add('active');
  }

  // PAUSAR AUTOPLAY AO HOVER
  heroContainer.addEventListener('mouseenter', () => clearInterval(interval));
  heroContainer.addEventListener('mouseleave', () => interval = setInterval(nextImage, 3000));

  // SWIPE TOUCH
  let startX = 0;
  let endX = 0;

  heroContainer.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  heroContainer.addEventListener('touchmove', e => {
    endX = e.touches[0].clientX;
  });

  heroContainer.addEventListener('touchend', () => {
    const diff = startX - endX;
    if(Math.abs(diff) > 50) { // mínimo para considerar swipe
      if(diff > 0) {
        nextImage(); // swipe para esquerda
      } else {
        prevImage(); // swipe para direita
      }
    }
    startX = 0;
    endX = 0;
  });
});
