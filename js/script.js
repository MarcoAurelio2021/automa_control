const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('active')));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
  });
});

window.addEventListener('load', () => {
  const heroImages = document.querySelectorAll('.hero-image img');
  let current = 0;
  let interval = setInterval(nextImage, 3000);

  function nextImage() {
    heroImages.forEach(img => img.classList.remove('active'));
    current = (current + 1) % heroImages.length;
    heroImages[current].classList.add('active');
  }

  document.querySelector('.hero-image').addEventListener('mouseenter', () => clearInterval(interval));
  document.querySelector('.hero-image').addEventListener('mouseleave', () => interval = setInterval(nextImage, 3000));
});
