// Contenido 1

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

// Contenido 2
document.addEventListener("DOMContentLoaded", function () {
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
        targetElement.style.display = "block";
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

// Contenido 3
const contenido3 = document.getElementById("extension-manglares");
if (contenido3) {
  Highcharts.chart("extension-manglares", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: 550,
      type: "pie",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    title: {
      text: null,
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontWeight: "bold",
      },
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      borderColor: "#CCCCCC",
      borderRadius: 8,
      borderWidth: 1,
      pointFormat:
        '<span style="color:{point.color}">●</span> {point.name}<br/>' +
        "Área: <b>{point.y} ha</b><br/>" +
        "Porcentaje: <b>{point.percentage:.1f}%</b>",
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "12px",
      },
      itemHoverStyle: {
        color: "#333",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Departamentos",
        colorByPoint: true,
        data: [
          {
            name: "Guajira",
            y: 2729.53,
            sliced: false,
            selected: true,
            color: "#00748B",
          },
          {
            name: "Magdalena",
            y: 40906,
            color: "#F59C00",
          },
          {
            name: "Sucre",
            y: 12683,
            color: "#5c8120ff",
          },
          {
            name: "Córdoba",
            y: 9077,
            color: "#75C8DA",
          },
          {
            name: "Antioquia",
            y: 6993,
            color: "#695DA6",
          },
          {
            name: "Atlántico",
            y: 613.34,
            color: "#79AB2B",
          },
        ],
      },
    ],
  });
}

// Contenido 4
const contenido4 = document.getElementById("species-cards");
if (contenido4) {
  const speciesData = [
    {
      group: "Mangle rojo",
      speciesName: "Rhizophora mangle",
      uses: [
        "Construcción",
        "Medicinal",
        "Carbón vegetal",
        "Industria manufacturera",
      ],
      category: "LC",
    },
    {
      group: "Mangle negro",
      speciesName: "Avicennia germinana",
      uses: [
        "Construcción",
        "Medicinal",
        "Alimento para animales",
        "Combustible",
      ],
      category: "LC",
    },
    {
      group: "Mangle blanco",
      speciesName: "Laguncularia racemosa",
      uses: [
        "Moderable",
        "Construcción",
        "Combustible",
        "Medicina humana",
        "Medicina veterinaria",
        "Industria manufacturera",
      ],
      category: "LC",
    },
    {
      group: "Mangle zaragoza",
      speciesName: "Conocarpus erectus",
      uses: ["Moderable", "Construcción", "Combustible", "Horticultura"],
      category: "LC",
    },
    {
      group: "Mangle pifluelo",
      speciesName: "Pelliciera rhizophorae",
      uses: ["Construcción", "Combustible"],
      category: "VU",
    },
  ];

  function loadSpecies(speciesList) {
    const speciesContainer = document.getElementById("species-cards");
    speciesContainer.innerHTML = ""; // Limpiar los resultados previos

    speciesList.forEach((species) => {
      // Reemplazar espacios por guiones en species.group para las clases CSS
      const modifiedGroup = species.group.replace(/\s+/g, "-").toLowerCase();

      const card = document.createElement("div");
      card.classList.add("card");

      // Crear lista de usos
      const usesList = species.uses.map((use) => `<li>${use}</li>`).join("");

      card.innerHTML = `
        <span class="species-group ${modifiedGroup}">${species.group}</span>
        <p class="scientific-name">${species.speciesName}</p>
        <hr>
        <div class="uses-section">
          <p class="species-description"><strong>Usos asociados:</strong></p>
          <ul class="uses-list">
            ${usesList}
          </ul>
        </div>
        <hr>
        <div class="category-section">
          <p class="species-description"><strong>Categoría de conservación:</strong></p>
          <span class="conservation-category ${species.category}">${species.category}</span>
        </div>
      `;

      speciesContainer.appendChild(card);
    });
  }

  // Cargar todas las especies sin filtros
  loadSpecies(speciesData);
}
