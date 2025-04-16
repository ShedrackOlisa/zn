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
         navbar.style.background = 'rgba(255, 255, 255, 0.98)';
     } else {
         navbar.style.background = 'rgba(255, 255, 255, 0.95)';
     }
 });