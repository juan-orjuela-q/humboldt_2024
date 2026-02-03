document.addEventListener("DOMContentLoaded", function () {
  // Sistema de tabs
  document.querySelectorAll(".tab a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remover clase active de todos los padres
      document.querySelectorAll(".tab").forEach((tab) => {
        tab.classList.remove("active");
      });

      // Agregar clase active al padre del enlace clickeado
      this.parentElement.classList.add("active");

      const target = this.getAttribute("href");

      // Ocultar todos los contenidos de pestañas
      document.querySelectorAll(".tab-content > div").forEach((content) => {
        content.style.display = "none";
      });

      // Mostrar el contenido objetivo con fadeIn
      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.style.display = "flex";
        targetElement.style.opacity = "0";

        let opacity = 0;
        const fadeIn = setInterval(() => {
          if (opacity >= 1) {
            clearInterval(fadeIn);
          }
          targetElement.style.opacity = opacity.toString();
          opacity += 0.1;
        }, 60); // 600ms total (60ms * 10 steps)
      }
    });
  });

});

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
                console.warn(`No se encontrÃ³ la imagen para ${layerId}`);
                return;
            }

            // Evento para mostrar/ocultar la imagen
            checkbox.addEventListener("change", function() {
                img.style.opacity = this.checked ? "1" : "0";
            });
        });
    }

    // Configurar todos los mapas en la pÃ¡gina
    document.querySelectorAll("[id^=bio2024-layerMap]").forEach(mapElement => {
        setupMap(mapElement.id.replace("-filters", "").replace("-content", ""));
    });
});