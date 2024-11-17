// JavaScript for controlling the slider
let sliderIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');
let isPlaying = true;
let sliderInterval;

// Function to show the next slide
function showNextSlide() {
    sliderIndex = (sliderIndex + 1) % totalSlides;
    updateSlider();
}

// Function to update the slider position
function updateSlider() {
    slider.style.transform = 'translateX(' + (-sliderIndex * 100) + '%)';
}

// Start the slider autoplay
function startSlider() {
    sliderInterval = setInterval(showNextSlide, 3000); // Change every 3 seconds
    isPlaying = true;
}

// Stop the slider autoplay
function stopSlider() {
    clearInterval(sliderInterval);
    isPlaying = false;
}

// Event listeners for Pause/Play buttons
document.getElementById('pauseButton').addEventListener('click', function () {
    if (isPlaying) {
        stopSlider();
    }
});

document.getElementById('playButton').addEventListener('click', function () {
    if (!isPlaying) {
        startSlider();
    }
});

// Initialize the slider
startSlider();