document.addEventListener('DOMContentLoaded', function () {
    // ---------------------------------------------------------------
    // Theme toggle functionality
    // ---------------------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        const currentTheme = localStorage.getItem('theme');

        // Set initial theme
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }

        // Toggle theme on button click
        themeToggle.addEventListener('click', function () {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // ---------------------------------------------------------------
    // Mobile menu toggle
    // ---------------------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // Backdrop behind the open drawer
        const scrim = document.createElement('div');
        scrim.className = 'nav-scrim';
        document.body.appendChild(scrim);

        const setNav = function (open) {
            hamburger.classList.toggle('active', open);
            navLinks.classList.toggle('active', open);
            document.body.classList.toggle('nav-open', open);
            hamburger.setAttribute('aria-expanded', String(open));
            hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        };

        hamburger.setAttribute('role', 'button');
        hamburger.setAttribute('tabindex', '0');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');

        hamburger.addEventListener('click', function () {
            setNav(!navLinks.classList.contains('active'));
        });

        hamburger.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setNav(!navLinks.classList.contains('active'));
            }
        });

        scrim.addEventListener('click', function () {
            setNav(false);
        });

        document.querySelectorAll('.nav-links a').forEach(function (link) {
            link.addEventListener('click', function () {
                setNav(false);
            });
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                setNav(false);
                hamburger.focus();
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 900) setNav(false);
        });
    }

    // ---------------------------------------------------------------
    // Hero image animation
    // ---------------------------------------------------------------
    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            heroImg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }, { passive: true });
    }

    // ---------------------------------------------------------------
    // Game card hover effect enhancement
    // ---------------------------------------------------------------
    document.querySelectorAll('.game-card').forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.boxShadow = 'var(--shadow)';
        });
    });

    // ---------------------------------------------------------------
    // Tournament card hover effect
    // ---------------------------------------------------------------
    document.querySelectorAll('.tournament-card').forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.boxShadow = 'var(--shadow)';
        });
    });

    // ---------------------------------------------------------------
    // Newsletter form submission
    // ---------------------------------------------------------------
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // ---------------------------------------------------------------
    // Smooth scrolling for anchor links
    // ---------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---------------------------------------------------------------
    // Share button functionality
    // ---------------------------------------------------------------
    const shareButtons = document.querySelectorAll(
        '.btn.secondary-btn, .mobile-game-actions .secondary-btn'
    );

    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }

        // Fallback for older / non-secure contexts
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.log('Copy failed:', err);
        }
        document.body.removeChild(textarea);
        return Promise.resolve();
    }

    function showShareTooltip(button) {
        const tooltip = document.createElement('div');
        tooltip.className = 'share-tooltip';
        tooltip.textContent = 'Link copied to clipboard!';
        document.body.appendChild(tooltip);

        // Position tooltip near the button
        const rect = button.getBoundingClientRect();
        tooltip.style.position = 'fixed';
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.top - 40}px`;

        // Remove tooltip after 2 seconds
        setTimeout(function () {
            tooltip.classList.add('fade-out');
            setTimeout(function () {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 300);
        }, 2000);
    }

    shareButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (navigator.share) {
                // Use Web Share API if available (mobile devices)
                navigator.share({
                    title: 'Grand Theft Auto: San Andreas',
                    text: 'Check out this awesome game on GameHub!',
                    url: window.location.href
                })
                    .then(function () { console.log('Successful share'); })
                    .catch(function (error) { console.log('Error sharing:', error); });
            } else {
                // Fallback for desktop browsers
                copyToClipboard(window.location.href);
                showShareTooltip(button);
            }
        });
    });

    // ---------------------------------------------------------------
    // Category filter functionality
    // ---------------------------------------------------------------
    const categoryBtns = document.querySelectorAll('.category-btn');

    categoryBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            categoryBtns.forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');

            // In a real implementation, you would filter posts here
            console.log(`Filtering by: ${this.textContent}`);
        });
    });

    // ---------------------------------------------------------------
    // Pagination functionality
    // ---------------------------------------------------------------
    const pagination = document.querySelector('.pagination');
    const pageLinks = document.querySelectorAll('.page-numbers a');

    let currentPage = 1;

    function updatePagination() {
        console.log(`Loading page ${currentPage}`);
        // In a real app, you would fetch and display the new page here
    }

    pageLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            pageLinks.forEach(function (l) { l.classList.remove('active'); });
            this.classList.add('active');

            if (!isNaN(parseInt(this.textContent, 10))) {
                currentPage = parseInt(this.textContent, 10);
            }

            updatePagination();
        });
    });

    if (pagination) {
        const prevBtn = pagination.querySelector('.btn:first-child');
        const nextBtn = pagination.querySelector('.btn:last-child');

        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                if (currentPage > 1) {
                    currentPage--;
                    updatePagination();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                currentPage++;
                updatePagination();
            });
        }
    }

});