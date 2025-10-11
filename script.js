function toggleNavMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const toggle = document.querySelector('.nav-toggle');
        const isShown = navMenu.classList.toggle('show');
        // animate hamburger
        if (toggle) toggle.classList.toggle('open', isShown);
        // accessibility
        if (toggle) toggle.setAttribute('aria-expanded', isShown ? 'true' : 'false');
}

// Close menu when clicking any nav link (mobile behavior)
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.nav-toggle');
    if (!navMenu) return;
    navMenu.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && window.innerWidth <= 768) {
            navMenu.classList.remove('show');
            if (toggle) toggle.classList.remove('open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
    });
});
