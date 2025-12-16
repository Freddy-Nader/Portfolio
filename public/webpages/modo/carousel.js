
document.addEventListener('DOMContentLoaded', function () {
    // Carousel Logic
    const track = document.querySelector('.carousel-track');
    if (track) {
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        const slides = Array.from(track.children);

        let currentSlide = 0;
        const totalSlides = slides.length;

        const getItemsToShow = () => {
            if (window.innerWidth < 600) return 1;
            if (window.innerWidth < 900) return 2;
            return 3;
        };

        const updateCarousel = () => {
            const itemsToShow = getItemsToShow();
            const slideWidth = slides[0].getBoundingClientRect().width;
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.gap) || 0;

            // Ensure we don't go out of bounds if resize happens
            const maxIndex = totalSlides - itemsToShow;
            if (currentSlide > maxIndex) currentSlide = maxIndex;
            if (currentSlide < 0) currentSlide = 0;

            const moveAmount = (slideWidth + gap) * currentSlide;
            track.style.transform = `translateX(-${moveAmount}px)`;

            // Update button states
            prevButton.style.opacity = currentSlide === 0 ? '0.5' : '1';
            prevButton.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';

            nextButton.style.opacity = currentSlide >= maxIndex ? '0.5' : '1';
            nextButton.style.pointerEvents = currentSlide >= maxIndex ? 'none' : 'auto';
        };

        nextButton.addEventListener('click', () => {
            const itemsToShow = getItemsToShow();
            const maxIndex = totalSlides - itemsToShow;
            if (currentSlide < maxIndex) {
                currentSlide++;
                updateCarousel();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        });

        // Handle resize
        window.addEventListener('resize', updateCarousel);

        // Initial call
        // Use setTimeout to ensure layout is settled
        setTimeout(updateCarousel, 100);
    }
});
