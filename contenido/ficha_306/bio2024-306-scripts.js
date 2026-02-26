document.addEventListener("DOMContentLoaded", function () {
  // Coordenadas para cada municipio en el mapa
  const municipalitiesData = {
    1: { name: "San Onofre", x: 24, y: 20, region: "costa" },
    2: { name: "Santiago De Tolu", x: 21, y: 34, region: "costa" },
    3: { name: "Chalán", x: 35, y: 31, region: "montes" },
    4: { name: "Ovejas", x: 43, y: 32, region: "montes" },
    5: { name: "Coloso", x: 33, y: 35, region: "montes" },
    6: { name: "Tolu Viejo", x: 25, y: 37, region: "montes" },
    7: { name: "Los Palmitos", x: 42, y: 37, region: "planicie" },
    8: { name: "San Pedro", x: 46, y: 41, region: "planicie" },
    9: { name: "Morroa", x: 36, y: 40, region: "planicie" },
    10: { name: "Coveñas", x: 11, y: 39, region: "costa" },
    11: { name: "Palmito", x: 19, y: 44, region: "planicie" },
    12: { name: "Sincelejo", x: 28, y: 45, region: "planicie" },
    13: { name: "San Juan Betulia", x: 38, y: 46, region: "planicie" },
    14: { name: "Buenavista", x: 61, y: 45, region: "planicie" },
    15: { name: "Since", x: 51, y: 47, region: "planicie" },
    16: { name: "Sampués", x: 28, y: 52, region: "planicie" },
    17: { name: "Corozal", x: 41, y: 52, region: "planicie" },
    18: { name: "Galeras", x: 58, y: 54, region: "planicie" },
    19: { name: "El Roble", x: 45, y: 58, region: "planicie" },
    20: { name: "San Benito Abad", x: 60, y: 73, region: "planicie" },
    21: { name: "La Unión", x: 36, y: 71, region: "planicie" },
    22: { name: "Calimito", x: 51, y: 73, region: "planicie" },
    23: { name: "Sucre", x: 75, y: 71, region: "planicie" },
    24: { name: "San Marcos", x: 46, y: 83, region: "planicie" },
    25: { name: "Majagual", x: 76, y: 85, region: "planicie" },
    26: { name: "Guaranda", x: 75, y: 96, region: "planicie" },
  };

  // Variables globales
  let tooltip = null;
  let activeMunicipalityId = null;

  // Inicializar el mapa
  initMap();

  // Configurar interacciones
  setupInteractions();

  function initMap() {
    const mapNumbersContainer = document.querySelector(".map-numbers");
    const mapWrapper = document.querySelector(".map-wrapper");

    // Limpiar contenedores
    mapNumbersContainer.innerHTML = "";

    // Crear tooltip
    tooltip = document.createElement("div");
    tooltip.className = "map-tooltip";
    mapWrapper.appendChild(tooltip);

    // Crear números para cada municipio
    Object.keys(municipalitiesData).forEach((id) => {
      const data = municipalitiesData[id];

      // Crear número en el mapa
      const numberElement = document.createElement("div");
      numberElement.className = "map-number";
      numberElement.textContent = id;
      numberElement.style.left = `${data.x}%`;
      numberElement.style.top = `${data.y}%`;
      numberElement.dataset.id = id;
      numberElement.title = data.name;

      mapNumbersContainer.appendChild(numberElement);
    });
  }

  function showTooltip(text, x, y) {
    if (!tooltip) return;

    tooltip.textContent = text;
    tooltip.style.opacity = "1";

    // Posicionar tooltip
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    const mapRect = document
      .querySelector(".map-wrapper")
      .getBoundingClientRect();

    // Calcular posición
    let posX = x - mapRect.left;
    let posY = y - mapRect.top - tooltipHeight - 10;

    // Ajustar para que no salga del mapa
    posX = Math.max(
      tooltipWidth / 2 + 5,
      Math.min(posX, mapRect.width - tooltipWidth / 2 - 5)
    );

    // Si sale por arriba, mostrar abajo
    if (posY < 10) {
      posY = y - mapRect.top + 30;
    }

    tooltip.style.transform = "translateX(-50%)";
    tooltip.style.top = `${posY}px`;
    tooltip.style.left = `${posX}px`;
  }

  function hideTooltip() {
    if (tooltip) {
      tooltip.style.opacity = "0";
    }
  }

  function activateMunicipality(id) {
    // Si ya está activo, desactivar
    if (activeMunicipalityId === id) {
      deselectAll();
      return;
    }

    activeMunicipalityId = id;

    // Remover activo de todos
    const municipalityItems = document.querySelectorAll(".municipality-item");
    const mapNumbers = document.querySelectorAll(".map-number");

    municipalityItems.forEach((item) => item.classList.remove("active"));
    mapNumbers.forEach((number) => number.classList.remove("active"));

    // Activar el seleccionado
    const selectedItem = document.querySelector(
      `.municipality-item[data-id="${id}"]`
    );
    const selectedNumber = document.querySelector(
      `.map-number[data-id="${id}"]`
    );

    if (selectedItem) selectedItem.classList.add("active");
    if (selectedNumber) selectedNumber.classList.add("active");
  }

  function deselectAll() {
    activeMunicipalityId = null;

    const municipalityItems = document.querySelectorAll(".municipality-item");
    const mapNumbers = document.querySelectorAll(".map-number");

    municipalityItems.forEach((item) => item.classList.remove("active"));
    mapNumbers.forEach((number) => {
      number.classList.remove("active");
      // Restaurar colores originales
      number.style.backgroundColor = "#000";
      number.style.color = "#fff";
    });
  }

  function setupInteractions() {
    // Seleccionar elementos
    const municipalityItems = document.querySelectorAll(".municipality-item");
    const mapNumbers = document.querySelectorAll(".map-number");

    // Event listeners para los items de la lista
    municipalityItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.stopPropagation();
        const id = this.dataset.id;
        activateMunicipality(id);
      });

      item.addEventListener("mouseenter", function () {
        const id = this.dataset.id;
        const data = municipalitiesData[id];
        const number = document.querySelector(`.map-number[data-id="${id}"]`);

        if (number && !number.classList.contains("active")) {
          // Solo cambiar color si no está activo
          number.style.backgroundColor = "#4a90e2";
          number.style.color = "white";

          // Mostrar tooltip
          const rect = number.getBoundingClientRect();
          showTooltip(data.name, rect.left + rect.width / 2, rect.top);
        }
      });

      item.addEventListener("mouseleave", function () {
        const id = this.dataset.id;
        const number = document.querySelector(`.map-number[data-id="${id}"]`);

        if (number && !number.classList.contains("active")) {
          // Restaurar colores originales
          number.style.backgroundColor = "#000";
          number.style.color = "#fff";
          hideTooltip();
        }
      });
    });

    // Event listeners para los números del mapa
    mapNumbers.forEach((number) => {
      number.addEventListener("click", function (e) {
        e.stopPropagation();
        const id = this.dataset.id;
        activateMunicipality(id);
      });

      number.addEventListener("mouseenter", function (e) {
        const id = this.dataset.id;
        const data = municipalitiesData[id];

        if (!this.classList.contains("active")) {
          this.style.backgroundColor = "#4a90e2";
          this.style.color = "white";
        }

        // Mostrar tooltip
        const rect = this.getBoundingClientRect();
        showTooltip(data.name, rect.left + rect.width / 2, rect.top);
      });

      number.addEventListener("mouseleave", function () {
        if (!this.classList.contains("active")) {
          // Restaurar colores originales
          this.style.backgroundColor = "#000";
          this.style.color = "#fff";
        }
        hideTooltip();
      });

      // Mover tooltip con el cursor para mejor experiencia
      number.addEventListener("mousemove", function (e) {
        const id = this.dataset.id;
        const data = municipalitiesData[id];
        if (data) {
          showTooltip(data.name, e.clientX, e.clientY);
        }
      });
    });

    // Click fuera para deseleccionar
    document.addEventListener("click", function (e) {
      // Solo deseleccionar si se hace click fuera de los elementos interactivos
      if (
        !e.target.closest(".municipality-item") &&
        !e.target.closest(".map-number")
      ) {
        deselectAll();
      }
    });

    // Ocultar tooltip al salir del mapa
    document
      .querySelector(".map-wrapper")
      .addEventListener("mouseleave", function () {
        hideTooltip();
      });
  }
});
