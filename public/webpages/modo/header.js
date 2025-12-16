
document.addEventListener('DOMContentLoaded', function () {
    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    const hero = document.querySelector('.hero-section');
    const pageHero = document.querySelector('.page-hero-section');

    if (header && hero) {
        window.addEventListener('scroll', function () {
            const heroHeight = hero.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > heroHeight) {
                header.classList.add('active');
            } else {
                header.classList.remove('active');
            }
        });
    }

    if (header && pageHero) {
        window.addEventListener('scroll', function () {
            const heroHeight = pageHero.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > heroHeight) {
                header.classList.add('active');
            } else {
                header.classList.remove('active');
            }
        });
    }
});
