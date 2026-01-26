/* ============================================================
   FICHA 412 - CONTENIDO 2
   Script para: Carrusel de tarjetas y tooltips
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ficha 412 - Contenido 2 cargado');

    // ============================================================
    // CARRUSEL - Control de navegación
    // ============================================================
    
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselCards = document.querySelectorAll('.carousel-card');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    const indicators = document.querySelectorAll('.indicator');

    let currentSlide = 0;
    const totalSlides = carouselCards.length;

    /**
     * Navega a una diapositiva específica
     * @param {number} slideIndex - Índice de la diapositiva
     */
    function goToSlide(slideIndex) {
        currentSlide = slideIndex % totalSlides;
        
        // Actualizar scroll del carrusel
        const scrollAmount = carouselCards[currentSlide].offsetLeft;
        carouselContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });

        // Actualizar indicadores
        updateIndicators();
    }

    /**
     * Actualiza el estado visual de los indicadores
     */
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentSlide) {
                indicator.classList.add('active');
            }
        });
    }

    /**
     * Botón anterior
     */
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        });
    }

    /**
     * Botón siguiente
     */
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        });
    }

    /**
     * Indicadores (puntitos) - clic directo
     */
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            goToSlide(index);
        });
    });

    // ============================================================
    // TOOLTIPS - Interactividad de números sobre la imagen
    // ============================================================

    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#008493';
        });

        tooltip.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#000';
        });

        // Opcional: agregar clic para más interactividad
        tooltip.addEventListener('click', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltipNumber = this.querySelector('.tooltip-number').textContent;
            console.log('Tooltip seleccionado:', tooltipNumber, '-', tooltipText);
            // Aquí puedes agregar lógica adicional (abrir modal, etc.)
        });
    });

    // ============================================================
    // SOPORTE PARA NAVEGACIÓN CON TECLADO (opcional)
    // ============================================================

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (event.key === 'ArrowRight') {
            nextBtn.click();
        }
    });

    // ============================================================
    // INICIALIZACIÓN
    // ============================================================

    // Establecer la diapositiva inicial
    updateIndicators();
});
