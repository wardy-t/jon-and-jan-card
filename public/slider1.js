let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(n) {
    currentIndex += n;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Loop back to the first slide
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Go to the last slide
    }
    updateSlide();
}

function updateSlide() {
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
