/**
 * Portfolio Common UI Components
 */

document.addEventListener('DOMContentLoaded', () => {
    setupNavbar();
    setupFooter();
    highlightActiveLink();
});

// 1. Inject the Navbar
function setupNavbar() {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (!navPlaceholder) return;

    navPlaceholder.innerHTML = `
        <header class="navbar">
            <div class="nav-container">
                <a href="/" class="logo">Dev<span>Portfolio</span></a>
                <button class="mobile-menu-toggle" aria-label="Toggle Menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
                <nav class="nav-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/skills">Skills</a>
                    <a href="/projects">Projects</a>
                    <a href="/articles">Articles</a>
                    <a href="/contact" class="nav-cta">Contact</a>
                </nav>
            </div>
        </header>
    `;

    // Handle Mobile Toggle
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('open');
    });
}

// 2. Inject the Footer
function setupFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    const currentYear = new Date().getFullYear();
    footerPlaceholder.innerHTML = `
        <footer>
            <p>&copy; ${currentYear} [Your Name]. Built with C++ & Drogon.</p>
        </footer>
    `;
}

// 3. Highlight current page in Navbar
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Remove active class first
        link.classList.remove('active-link');
        
        // Exact match or root match
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        }
    });
}