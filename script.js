// Cursor personalizado
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const speed = 0.15;
    const followerSpeed = 0.08;
    
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    followerX += (mouseX - followerX) * followerSpeed;
    followerY += (mouseY - followerY) * followerSpeed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Efecto hover en enlaces y botones
document.querySelectorAll('a, button, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Partículas animadas
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particles.appendChild(particle);
    }
}

createParticles();

// Efecto de escritura tipo máquina
function typeWriter() {
    const element = document.getElementById('typewriter');
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--primary-color)';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            element.style.borderRight = 'none';
        }
    }
    
    setTimeout(type, 500);
}

window.addEventListener('load', typeWriter);

// Efecto parallax en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero && heroImage) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Menu hamburguesa para móviles
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navIndicator = document.querySelector('.nav-indicator');

// Función para actualizar el indicador de navegación
function updateNavIndicator() {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink && navIndicator) {
        const linkRect = activeLink.getBoundingClientRect();
        const menuRect = navMenu.getBoundingClientRect();
        const left = linkRect.left - menuRect.left;
        const width = linkRect.width;
        
        navIndicator.style.width = width + 'px';
        navIndicator.style.left = left + 'px';
    }
}

// Actualizar indicador al cargar
setTimeout(updateNavIndicator, 100);

// Actualizar indicador al cambiar tamaño de ventana
window.addEventListener('resize', updateNavIndicator);

// Navegación activa basada en scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
                updateNavIndicator();
            }
        }
    });
}

window.addEventListener('scroll', highlightNavOnScroll);

// Efecto hover en el indicador
navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const linkRect = e.target.getBoundingClientRect();
        const menuRect = navMenu.getBoundingClientRect();
        const left = linkRect.left - menuRect.left;
        const width = linkRect.width;
        
        navIndicator.style.width = width + 'px';
        navIndicator.style.left = left + 'px';
        navIndicator.style.opacity = '0.6';
    });
});

navMenu.addEventListener('mouseleave', () => {
    navIndicator.style.opacity = '1';
    updateNavIndicator();
});

// Click en enlaces de navegación
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        updateNavIndicator();
    });
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    }
    
    // Efecto hide/show navbar
    if (currentScroll > lastScroll && currentScroll > 80) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Formulario de contacto
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar tu lógica para enviar el formulario
    // Por ejemplo, usando fetch para enviar a un servidor
    
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    contactForm.reset();
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.service-card, .stat, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contador animado para las estadísticas
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const isPercentage = element.textContent.includes('%');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (isPercentage ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (isPercentage ? '%' : '+');
        }
    }, 16);
};

// Efecto 3D en tarjetas de servicio
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// Activar contador cuando sea visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.stat-number');
            const target = parseInt(number.textContent);
            animateCounter(number, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});
// ============ CARRUSEL DINÁMICO ============
class Carousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.slides = Array.from(document.querySelectorAll('.carousel-slide'));
        this.prevButton = document.querySelector('.carousel-control.prev');
        this.nextButton = document.querySelector('.carousel-control.next');
        this.indicators = Array.from(document.querySelectorAll('.indicator'));
        
        this.currentIndex = 0;
        this.isAnimating = false;
        this.autoplayInterval = null;
        
        this.init();
    }
    
    init() {
        // Event listeners para controles
        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());
        
        // Event listeners para indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Soporte para gestos táctiles
        let startX = 0;
        let currentX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            this.stopAutoplay();
        });
        
        this.track.addEventListener('touchmove', (e) => {
            currentX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', () => {
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            this.startAutoplay();
        });
        
        // Pausar autoplay al hover
        this.track.addEventListener('mouseenter', () => this.stopAutoplay());
        this.track.addEventListener('mouseleave', () => this.startAutoplay());
        
        // Teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // Iniciar autoplay
        this.startAutoplay();
        
        // Efecto parallax en el carrusel
        this.addParallaxEffect();
    }
    
    updateCarousel(smooth = true) {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        const offset = -this.currentIndex * 100;
        this.track.style.transition = smooth ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
        this.track.style.transform = `translateX(${offset}%)`;
        
        // Actualizar indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
        
        // Agregar animación de entrada al slide activo
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentIndex);
        });
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    
    next() {
        if (this.isAnimating) return;
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateCarousel();
    }
    
    prev() {
        if (this.isAnimating) return;
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
    }
    
    goToSlide(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        this.currentIndex = index;
        this.updateCarousel();
    }
    
    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => this.next(), 4000);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    addParallaxEffect() {
        window.addEventListener('scroll', () => {
            const gallery = document.querySelector('.gallery');
            if (!gallery) return;
            
            const rect = gallery.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            if (scrollPercent >= 0 && scrollPercent <= 1) {
                const currentSlide = this.slides[this.currentIndex];
                const image = currentSlide.querySelector('.carousel-image svg');
                if (image) {
                    const offset = (scrollPercent - 0.5) * 30;
                    image.style.transform = `scale(1.05) translateY(${offset}px)`;
                }
            }
        });
    }
}

// Inicializar carrusel cuando el DOM esté listo
if (document.querySelector('.carousel-track')) {
    const carousel = new Carousel();
}