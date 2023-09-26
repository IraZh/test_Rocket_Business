const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
const paginationText = document.querySelector('.pagination-text');

let currentIndex = 0;

function updatePagination() {
    paginationText.textContent = `${currentIndex + 1}/${slides.length}`;
}

function showSlide(index) {
    slides.forEach((slide, slideIndex) => {
        if (slideIndex === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    updatePagination();
}

prevArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    } else {
        currentIndex = slides.length - 1; 
        showSlide(currentIndex);
    }
});

nextArrow.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    } else {
        currentIndex = 0;
        showSlide(currentIndex);
    }
});

showSlide(currentIndex);
