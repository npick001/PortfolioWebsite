
let slideIndex = 0;

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return; 

    if (n >= slides.length) slideIndex = 0; 
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[slideIndex].classList.add('active');
}

// Add Keyboard Listener for Arrow Keys
document.addEventListener('keydown', (event) => {
    // Only listen if there's a carousel on the screen
    if (document.querySelectorAll('.carousel-slide').length > 0) {
        if (event.key === 'ArrowLeft') {
            moveSlide(-1);
        } else if (event.key === 'ArrowRight') {
            moveSlide(1);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        fetchImagesFromBackend();
    }
});

function fetchImagesFromBackend() {
    fetch('/api/headshots')
        .then(response => response.json()) 
        .then(data => {
            buildCarousel(data.images);
        })
        .catch(error => console.error("Error loading images:", error));
}

function buildCarousel(imagePaths) {
    const container = document.querySelector('.carousel-container');
    
    // Generate the Image Slides dynamically
    imagePaths.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Headshot ${index + 1}`;
        
        slide.appendChild(img);
        
        container.insertBefore(slide, container.querySelector('.carousel-btn.prev'));
    });
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    if (n >= slides.length) slideIndex = 0; 
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}