// Mobile Menu Toggle - Rebuilt
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const closeMenuBtn = document.querySelector('.close-menu');

function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

hamburger.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', closeMenu);

// Close menu when clicking overlay
menuOverlay.addEventListener('click', closeMenu);

// Close menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hide navbar on scroll down, show on scroll up
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 5;
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return;
    }

    if (Math.abs(currentScroll - lastScroll) < scrollThreshold) {
        return;
    }

    if (currentScroll > lastScroll && currentScroll > navbarHeight) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// Close menu when ESC key is pressed
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
    }
});