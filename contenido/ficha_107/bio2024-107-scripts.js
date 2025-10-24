
document.addEventListener("DOMContentLoaded", function() {
    function setupMap(mapId) {
        const filterContainer = document.getElementById(`${mapId}-filters`);
        const contentContainer = document.getElementById(`${mapId}-content`);

        if (!filterContainer || !contentContainer) {
            console.error(`No se encontraron los contenedores para ${mapId}`);
            return;
        }

        // Buscar todos los checkboxes dentro del contenedor de filtros
        filterContainer.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
            const layerId = checkbox.id;
            const img = document.getElementById(`img-${layerId}`);

            if (!img) {
                console.warn(`No se encontró la imagen para ${layerId}`);
                return;
            }

            // Evento para mostrar/ocultar la imagen
            checkbox.addEventListener("change", function() {
                img.style.opacity = this.checked ? "1" : "0";
            });
        });
    }

    // Configurar todos los mapas en la página
    document.querySelectorAll("[id^=bio2024-layerMap]").forEach(mapElement => {
        setupMap(mapElement.id.replace("-filters", "").replace("-content", ""));
    });

    // Toggle .img-circle when .more icon is clicked (for ficha_107 layout)
    // Only one button expected with id="more-btn"
    const moreBtn = document.getElementById('more-btn');
    if (moreBtn) {
        moreBtn.setAttribute('tabindex', '0');
        moreBtn.setAttribute('role', 'button');
        moreBtn.setAttribute('aria-pressed', 'false');
        moreBtn.setAttribute('aria-expanded', 'false');

        function toggleImage() {
            const container = moreBtn.closest('.img-container-bg');
            if (!container) return;
            const imgCircle = container.querySelector('.img-circle');
            if (!imgCircle) return;

            const isHidden = imgCircle.classList.toggle('hidden');
            moreBtn.setAttribute('aria-pressed', String(!isHidden));
            moreBtn.setAttribute('aria-expanded', String(!isHidden));
        }

        moreBtn.addEventListener('click', toggleImage);
        moreBtn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                toggleImage();
            }
        });
    }
});
