// ===== Menu Mobile =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Fecha menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ===== Header Scroll =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Form Submission =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Efeito de loading no botão
    const btn = contactForm.querySelector('.btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;

    // Simula envio
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Mensagem enviada!';
        btn.style.background = 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)';
        btn.style.boxShadow = '0 8px 30px rgba(46, 204, 113, 0.35)';

        // Reseta o formulário após alguns segundos
        setTimeout(() => {
            contactForm.reset();
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.boxShadow = '';
            btn.disabled = false;
        }, 2500);
    }, 1800);
});

// ===== Smooth scroll para links internos =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        e.preventDefault();

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = 80;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY -
                offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Animação sutil ao carregar (fade in) =====
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    setTimeout(() => {
        hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
});