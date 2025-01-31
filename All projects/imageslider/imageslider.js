let index = 0;
const slides = document.querySelector(".slides");

function showSlide(n) {
    index = (n + 4) % 4; // Ensures cycling between 0-3
    slides.style.transform = `translateX(-${index * 100}%)`;
    console.log(index);
}

// Next Slide
function nextSlide() {
    showSlide(index+1);
}

// Previous Slide
function prevSlide() {
    showSlide(index - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
