document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // Set initial theme
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Hero image animation
    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            heroImg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        });
    }
    
    // Game card hover effect enhancement
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'var(--shadow)';
        });
    });
    
    // Tournament card hover effect
    document.querySelectorAll('.tournament-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'var(--shadow)';
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    
    // Share button functionality
    const shareButtons = document.querySelectorAll('.btn.secondary-btn, .mobile-game-actions .secondary-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (navigator.share) {
                // Use Web Share API if available (mobile devices)
                navigator.share({
                    title: 'Grand Theft Auto: San Andreas',
                    text: 'Check out this awesome game on GameHub!',
                    url: window.location.href
                })
                .then(() => console.log('Successful share'))
                .catch(error => console.log('Error sharing:', error));
            } else {
                // Fallback for desktop browsers
                copyToClipboard(window.location.href);
                showShareTooltip(button);
            }
        });
    });
    
    // Copy to clipboard function
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
    
    // Show tooltip function
    function showShareTooltip(button) {
        const tooltip = document.createElement('div');
        tooltip.className = 'share-tooltip';
        tooltip.textContent = 'Link copied to clipboard!';
        document.body.appendChild(tooltip);
        
        // Position tooltip near the button
        const rect = button.getBoundingClientRect();
        tooltip.style.position = 'fixed';
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - 40}px`;
        
        // Remove tooltip after 2 seconds
        setTimeout(() => {
            tooltip.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(tooltip);
            }, 300);
        }, 2000);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Category filter functionality
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real implementation, you would filter posts here
            // For now, we'll just log the selected category
            console.log(`Filtering by: ${this.textContent}`);
        });
    });
    
    // Pagination functionality
    const prevBtn = document.querySelector('.pagination .btn:first-child');
    const nextBtn = document.querySelector('.pagination .btn:last-child');
    const pageLinks = document.querySelectorAll('.page-numbers a');
    
    let currentPage = 1;
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all page links
            pageLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Update current page
            if (!isNaN(parseInt(this.textContent))) {
                currentPage = parseInt(this.textContent);
            }
            
            // In a real implementation, you would load the corresponding page
            console.log(`Loading page ${currentPage}`);
        });
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        currentPage++;
        updatePagination();
    });
    
    function updatePagination() {
        console.log(`Loading page ${currentPage}`);
        // In a real app, you would fetch and display the new page here
    }
});