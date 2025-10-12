// --- LÓGICA PARA O MENU HAMBÚRGUER (MOBILE) ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' para mostrar/esconder o menu
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link (para navegação na mesma página)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// --- LÓGICA PARA ROLAGEM SUAVE (SMOOTH SCROLL) ---
// Esta parte é uma versão aprimorada da sua, selecionando todos os links que começam com '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});