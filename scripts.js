// Menú móvil
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu interés! Te contactaremos pronto para coordinar tu sesión golden.');
    this.reset();
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de typing en el hero
const heroText = "Capturamos Tu Magia en la Golden Hour";
let i = 0;
const typingEffect = () => {
    if (i < heroText.length) {
        document.querySelector('.hero h1').textContent = heroText.substring(0, i+1);
        i++;
        setTimeout(typingEffect, 100);
    }
};

// Iniciar efecto typing cuando la página cargue
window.addEventListener('load', typingEffect);

// Crear partículas doradas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición inicial aleatoria
        particle.style.left = `${Math.random() * 100}vw`;
        
        // Color aleatorio entre tonos dorados
        const colors = ['#FFD700', '#FFEC8B', '#FFA500', '#FF8C00'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        // Duración de animación aleatoria
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Retraso aleatorio
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Inicializar partículas
createParticles();