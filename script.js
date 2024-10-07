let currentSlide = 0;
const imagesToShow = 3; // Número de imagens a serem exibidas

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const slides = document.querySelectorAll(".carousel-item");
    const totalImages = slides.length;

    // Atualiza o carrossel
    function updateCarousel() {
        const slidesContainer = document.querySelector(".carousel-images");
        slidesContainer.style.transform = `translateX(${-currentSlide * (slides[0].clientWidth + 10)}px)`;
    }

    // Lógica para o botão "próximo"
    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalImages;
        updateCarousel();
    });

    // Lógica para o botão "anterior"
    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    // Inicializa o carrossel
    updateCarousel();
});
