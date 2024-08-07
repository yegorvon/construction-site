
let currentSlide = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));

    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');

    setTimeout(showSlides, 5000);
}

document.addEventListener('DOMContentLoaded', showSlides);




document.addEventListener("DOMContentLoaded", function () {
    const year = new Date().getFullYear();
    document.getElementById("footer-year").textContent = year;


    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});


let currentSlideIndex = 0;
let slides = [];

function showSlide(index) {
    if (slides.length === 0) return;

    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    // Update the current slide index
    currentSlideIndex = index;
}

function changeSlide(n) {
    currentSlideIndex = (currentSlideIndex + n + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}
