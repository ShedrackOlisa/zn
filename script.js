 // Mobile Menu Toggle
 const hamburger = document.querySelector('.hamburger');
 const mobileMenu = document.querySelector('.mobile-menu');

 hamburger.addEventListener('click', () => {
     mobileMenu.classList.toggle('active');
 });

 // Close menu when clicking outside
 document.addEventListener('click', (e) => {
     if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
         mobileMenu.classList.remove('active');
     }
 });

 // Close menu when clicking a link
 mobileMenu.querySelectorAll('a').forEach(link => {
     link.addEventListener('click', () => {
         mobileMenu.classList.remove('active');
     });
 });

 // Smooth scroll and sticky nav (same as previous)
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 window.addEventListener('scroll', function() {
     const navbar = document.querySelector('.navbar');
     if (window.scrollY > 50) {
         navbar.style.background = '45deg, #ea00ff, #bdd7e6';
     } else {
         navbar.style.background = '45deg, #ea00ff, #bdd7e6';
     }
 });



 let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 5; // Minimum pixels scrolled to trigger
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        // At top of page, always show navbar
        navbar.classList.remove('hidden');
        return;
    }

    if (Math.abs(currentScroll - lastScroll) < scrollThreshold) {
        // Ignore tiny scrolls
        return;
    }

    if (currentScroll > lastScroll && currentScroll > navbarHeight) {
        // Scroll DOWN
        navbar.classList.add('hidden');
    } else {
        // Scroll UP
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});