document.addEventListener("DOMContentLoaded", function () {
  // Sistema de tabs mejorado
  const GlobalTabs = {
    init: function () {
      this.bindEvents();
      this.initializeTabs();
    },

    bindEvents: function () {
      document.addEventListener("click", function (e) {
        const tabLink = e.target.closest("[data-tab-target]");
        if (tabLink) {
          e.preventDefault();
          GlobalTabs.switchTab(tabLink);
        }
      });
    },

    initializeTabs: function () {
      // Inicializar el primer tab de cada grupo como activo
      document.querySelectorAll("[data-tab-group]").forEach((group) => {
        const firstTab = group.querySelector(".tab.active, .tab:first-child");
        const firstContent = document.querySelector(
          firstTab
            ?.querySelector("[data-tab-target]")
            ?.getAttribute("data-tab-target"),
        );

        if (firstContent) {
          const displayType = GlobalTabs.getDisplayType(firstContent);
          firstContent.style.display = displayType;
          firstContent.style.opacity = "1";

          // Resaltar el escenario activo
          GlobalTabs.highlightActiveScenario(firstTab.textContent.trim());
        }
      });
    },

    switchTab: function (tabLink) {
      const tabContainer = tabLink.closest("[data-tab-group]");
      const targetId = tabLink.getAttribute("data-tab-target");

      if (!tabContainer || !targetId) return;

      const tabGroup = tabContainer.getAttribute("data-tab-group") || "default";

      // Activar tab clickeado y desactivar otros
      GlobalTabs.activateTab(tabLink, tabGroup);

      // Mostrar contenido correspondiente
      GlobalTabs.showContent(targetId, tabGroup);

      // Resaltar el escenario activo
      GlobalTabs.highlightActiveScenario(tabLink.textContent.trim());
    },

    activateTab: function (activeTab, group) {
      const selector =
        group === "default"
          ? "[data-tab-target]"
          : `[data-tab-group="${group}"] [data-tab-target]`;

      document.querySelectorAll(selector).forEach((tab) => {
        tab.parentElement.classList.remove("active");
      });

      activeTab.parentElement.classList.add("active");
    },

    showContent: function (targetId, group) {
      const contentSelector =
        group === "default"
          ? "[data-tab-content]"
          : `[data-tab-content-group="${group}"] [data-tab-content]`;

      document.querySelectorAll(contentSelector).forEach((content) => {
        content.style.display = "none";
        content.style.opacity = "0";
        content.classList.remove("active");
      });

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        GlobalTabs.fadeInContent(targetElement, group);
      }
    },

    fadeInContent: function (element, group) {
      const displayType = GlobalTabs.getDisplayType(element, group);
      element.style.display = displayType;
      element.style.opacity = "0";

      let opacity = 0;
      const fadeIn = setInterval(() => {
        if (opacity >= 1) {
          clearInterval(fadeIn);
          element.style.opacity = "1";
        }
        element.style.opacity = opacity.toString();
        opacity += 0.1;
      }, 60);
    },

    getDisplayType: function (element, group) {
      // Para este diseño específico, usar block
      return "block";
    },

    highlightActiveScenario: function (scenarioName) {
      // Resaltar la caja del escenario activo
      const scenarioBoxes = document.querySelectorAll(".scenario-box");
      scenarioBoxes.forEach((box) => {
        box.style.borderColor = "#e0e0e0";
        box.style.boxShadow = "none";

        const boxNumber = box.querySelector(".scenario-number").textContent;
        if (boxNumber === scenarioName) {
          box.style.borderColor = "#00748b";
          box.style.boxShadow = "0 5px 15px rgba(0, 116, 139, 0.2)";
        }
      });
    },
  };

  // Inicializar el sistema de tabs
  GlobalTabs.init();

  // Función para manejar filtros de mapas (si es necesario)
  function setupMapFilters() {
    const filterContainers = document.querySelectorAll(".map-filters");

    filterContainers.forEach((container) => {
      const checkboxes = container.querySelectorAll('input[type="checkbox"]');

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
          // Lógica para manejar filtros de capas del mapa
          console.log(`Checkbox ${this.id} cambiado a: ${this.checked}`);
          // Aquí puedes agregar lógica para mostrar/ocultar capas del mapa
        });
      });
    });
  }

  // Inicializar filtros si existen
  setupMapFilters();

  // Efecto hover en las variables
  const variableItems = document.querySelectorAll(".variables-list li");
  variableItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });
});

// contenido 4

document.addEventListener("DOMContentLoaded", function () {
  function setupMap(mapId) {
    const filterContainer = document.getElementById(`${mapId}-filters`);
    const contentContainer = document.getElementById(`${mapId}-content`);

    if (!filterContainer || !contentContainer) {
      console.error(`No se encontraron los contenedores para ${mapId}`);
      return;
    }

    // Buscar todos los checkboxes dentro del contenedor de filtros
    filterContainer
      .querySelectorAll("input[type='checkbox']")
      .forEach((checkbox) => {
        const layerId = checkbox.id;
        const img = document.getElementById(`img-${layerId}`);

        if (!img) {
          console.warn(`No se encontró la imagen para ${layerId}`);
          return;
        }

        // Evento para mostrar/ocultar la imagen
        checkbox.addEventListener("change", function () {
          img.style.opacity = this.checked ? "1" : "0";
        });
      });
  }

  // Configurar todos los mapas en la página
  document.querySelectorAll("[id^=bio2024-layerMap]").forEach((mapElement) => {
    setupMap(mapElement.id.replace("-filters", "").replace("-content", ""));
  });
});
