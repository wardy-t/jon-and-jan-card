let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = setInterval(autoSlide, 3000); // Change slide every 3 seconds

console.log(slides)

function moveSlide(n) {
    currentIndex += n;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlide();
}

function autoSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlide();
}

function updateSlide() {
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
