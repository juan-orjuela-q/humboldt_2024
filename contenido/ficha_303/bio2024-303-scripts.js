// Contenido 1
const contenido2 = document.getElementById("tendencia-perdida");
if (contenido2) {
  Highcharts.chart("tendencia-perdida", {
    chart: {
      type: "column",
      height: 500,
      backgroundColor: "none",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    title: {
      text: "Frecuencia de uso de especies por tipo y grupo biológico",
      style: {
        color: "#000",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      categories: ["Mascota", "Tipo de uso"],
      crosshair: true,
      labels: {
        style: {
          color: "#000",
        },
      },
      title: {
        style: {
          color: "#000",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 800,
      title: {
        text: "Número de registros",
        style: {
          color: "#000",
        },
      },
      labels: {
        style: {
          color: "#000",
        },
      },
      tickPositions: [0, 100, 200, 300, 400, 500, 600, 700, 800],
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} registros</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
      backgroundColor: "#fff",
      style: {
        color: "#000",
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        grouping: true,
      },
    },
    legend: {
      itemStyle: {
        color: "#000",
      },
    },
    series: [
      {
        name: "Aves",
        data: [773, 534],
        color: "#00748B",
      },
      {
        name: "Mamíferos",
        data: [621, 487],
        color: "#F59C00",
      },
      {
        name: "Reptiles",
        data: [642, 454],
        color: "#E74C3C",
      },
    ],
  });
}

// Contenido 2
const speciesData = [
  {
    type: "Acuática",
    speciesName: "Pímpano",
    scientificName: "Chelydra acutirostris",
    endemica: "No",
    family: "Chelydridae",
    habitat: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "NT",
    uses: {
      alimento: true,
      mascota: false,
      medicina: true,
      comercio: true,
      artesania: true,
    },
    iic: 1,
    iicLevel: "Alto",
  },
  {
    type: "Terrestre",
    speciesName: "Montañera",
    scientificName: "Rhinoclemmys annulata",
    endemica: "No",
    family: "Geoemydidae",
    habitat: "Bosques húmedos",
    status: "",
    statusClass: "NT",
    uses: {
      alimento: false,
      mascota: true,
      medicina: true,
      comercio: true,
      artesania: false,
    },
    iic: 0.7,
    iicLevel: "Medio",
  },
  {
    type: "Semiacuática",
    speciesName: "Palmera",
    scientificName: "Rhinoclemmys melanosterna",
    endemica: "No",
    family: "Geoemydidae",
    habitat: "Ríos, arroyos, ciénagas y manglares",
    status: "",
    statusClass: "NT",
    uses: {
      alimento: true,
      mascota: true,
      medicina: false,
      comercio: false,
      artesania: true,
    },
    iic: 0.5,
    iicLevel: "Bajo",
  },
  {
    type: "Semiacuática",
    speciesName: "Tortuga de río chocoana",
    scientificName: "Rhinoclemmys nasuta",
    endemica: "No",
    family: "Geoemydidae",
    habitat: "Ríos, arroyos, ciénagas y manglares",
    status: "",
    statusClass: "VU",
    uses: {
      alimento: true,
      mascota: true,
      medicina: true,
      comercio: true,
      artesania: true,
    },
    iic: 1,
    iicLevel: "Alto",
  },
  {
    type: "Acuática",
    speciesName: "Hicotea",
    scientificName: "Trachemys callirostris",
    endemica: "No",
    family: "Emydidae",
    habitat: "Arroyos y ciénagas",
    status: "",
    statusClass: "VU",
    uses: {
      alimento: true,
      mascota: false,
      medicina: false,
      comercio: false,
      artesania: true,
    },
    iic: 0.3,
    iicLevel: "Bajo",
  },
  {
    type: "Acuática",
    speciesName: "Hicotea del Atrato",
    scientificName: "Trachemys medemi",
    endemica: "Si",
    family: "Emydidae",
    habitat: "Arroyos y ciénagas",
    status: "",
    statusClass: "EN",
    uses: {
      alimento: false,
      mascota: true,
      medicina: true,
      comercio: true,
      artesania: false,
    },
    iic: 0.8,
    iicLevel: "Medio",
  },
  {
    type: "Acuática",
    speciesName: "Cabeza de trozo",
    scientificName: "Kinosternon (Cryptochelys) dunni",
    endemica: "Si",
    family: "Kinosternidae",
    habitat: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "EN",
    uses: {
      alimento: true,
      mascota: true,
      medicina: true,
      comercio: true,
      artesania: true,
    },
    iic: 1,
    iicLevel: "Alto",
  },
  {
    type: "Semiacuática",
    speciesName: "Tapaculo",
    scientificName: "Kinosternon (Cryptochelys) leucostomum",
    endemica: "No",
    family: "Kinosternidae",
    habitat: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "LC",
    uses: {
      alimento: false,
      mascota: true,
      medicina: false,
      comercio: false,
      artesania: false,
    },
    iic: 0.2,
    iicLevel: "Bajo",
  },
  {
    type: "Semiacuática",
    speciesName: "Swanka",
    scientificName: "Kinosternon (Kinosternon) albogulare",
    endemica: "No",
    family: "Kinosternidae",
    habitat: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "LC",
    uses: {
      alimento: true,
      mascota: false,
      medicina: false,
      comercio: false,
      artesania: true,
    },
    iic: 0.4,
    iicLevel: "Bajo",
  },
  {
    type: "Semiacuática",
    speciesName: "Tapaculo",
    scientificName: "Kinosternon (Kinosternon) scorpioides",
    endemica: "No",
    family: "Kinosternidae",
    habitat: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "LC",
    uses: {
      alimento: true,
      mascota: false,
      medicina: true,
      comercio: true,
      artesania: false,
    },
    iic: 0.6,
    iicLevel: "Medio",
  },
  {
    type: "Terrestre",
    speciesName: "Morrocoy",
    scientificName: "Chelonoidis carbonarius",
    endemica: "No",
    family: "Testudinidae",
    habitat: "Bosques secos y sabanas",
    status: "",
    statusClass: "EN",
    uses: {
      alimento: true,
      mascota: true,
      medicina: true,
      comercio: true,
      artesania: true,
    },
    iic: 1,
    iicLevel: "Alto",
  },
  {
    type: "Semiacuática",
    speciesName: "Carranchina",
    scientificName: "Mesoclemmys dahli",
    endemica: "Si",
    family: "Chelidae",
    habitat: "Arroyos y jagüeyes en bosques secos",
    status: "",
    statusClass: "CR",
    uses: {
      alimento: false,
      mascota: true,
      medicina: false,
      comercio: true,
      artesania: false,
    },
    iic: 0.5,
    iicLevel: "Bajo",
  },
  {
    type: "Acuática",
    speciesName: "Tortuga de río",
    scientificName: "Podocnemis lewyana",
    endemica: "Si",
    family: "Podocnemidae",
    habitat: "Ríos y en menor medida ciénagas",
    status: "",
    statusClass: "CR",
    uses: {
      alimento: true,
      mascota: false,
      medicina: true,
      comercio: true,
      artesania: true,
    },
    iic: 0.9,
    iicLevel: "Alto",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const iucnFilter = document.getElementById("iucn-filter");
  const countDisplay = document.getElementById("count");

  // Estado de los filtros actuales
  let currentFilters = {
    type: "Acuática", // Valor por defecto del primer botón activo
    iucn: "all",
  };

  // Función para aplicar todos los filtros
  function applyFilters() {
    let filteredSpecies = speciesData;

    // Aplicar filtro de tipo (grupo funcional)
    if (currentFilters.type !== "all") {
      filteredSpecies = filteredSpecies.filter(
        (species) => species.type === currentFilters.type
      );
    }

    // Aplicar filtro de categoría IUCN (iucn-filter)
    if (currentFilters.iucn !== "all") {
      filteredSpecies = filteredSpecies.filter(
        (species) => species.statusClass === currentFilters.iucn
      );
    }

    loadSpecies(filteredSpecies);
    updateCount(filteredSpecies.length);
  }

  // Event listeners para los botones de grupo funcional
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Eliminar la clase 'active' de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Agregar la clase 'active' al botón clicado
      button.classList.add("active");

      // Actualizar filtro de tipo
      currentFilters.type = button.dataset.filter;

      // Aplicar todos los filtros
      applyFilters();
    });
  });

  // Event listener para iucn-filter (categoría IUCN)
  iucnFilter.addEventListener("change", () => {
    currentFilters.iucn = iucnFilter.value;
    applyFilters();
  });

  // Función para actualizar el conteo
  function updateCount(count) {
    countDisplay.textContent = `Mostrando ${count} especies`;
  }

  // Función para cargar las especies
  function loadSpecies(speciesList) {
    const speciesContainer = document.getElementById("species-cards");
    speciesContainer.innerHTML = ""; // Limpiar los resultados previos

    speciesList.forEach((species) => {
      const card = document.createElement("div");
      card.classList.add("species-card");

      // Crear iconos de usos con imágenes
      const usesHTML = `
        <div class="uses-container">
          <div class="uses-title">Usos:</div>
          <div class="uses-grid">
            <div class="use-item">
              <img src="./input/img/Frame.svg" 
                   alt="Alimento" 
                   class="use-icon ">
              <span><b>Alimento:</b> ${
                species.uses.alimento ? "sí" : "no"
              } </span>
            </div>
            <div class="use-item">
              <img src="./input/img/Frame.svg" 
                   alt="Mascota ${species.uses.mascota ? "sí" : "no"}" 
                   class="use-icon ${species.uses.mascota ? "yes" : "no"}">
              <span>Mascota</span>
            </div>
            <div class="use-item">
              <img src="./input/img/icono-medicina-${
                species.uses.medicina ? "yes" : "no"
              }.png" 
                   alt="Medicina ${species.uses.medicina ? "sí" : "no"}" 
                   class="use-icon ${species.uses.medicina ? "yes" : "no"}">
              <span>Medicina</span>
            </div>
            <div class="use-item">
              <img src="./input/img/icono-comercio-${
                species.uses.comercio ? "yes" : "no"
              }.png" 
                   alt="Comercio ${species.uses.comercio ? "sí" : "no"}" 
                   class="use-icon ${species.uses.comercio ? "yes" : "no"}">
              <span>Comercio</span>
            </div>
            <div class="use-item">
              <img src="./input/img/icono-artesania-${
                species.uses.artesania ? "yes" : "no"
              }.png" 
                   alt="Artesanía ${species.uses.artesania ? "sí" : "no"}" 
                   class="use-icon ${species.uses.artesania ? "yes" : "no"}">
              <span>Artesanía</span>
            </div>
          </div>
        </div>
      `;

      card.innerHTML = `
        <div class="species-header"
        <div class= "card-type-container">
            <img src="./input/img/Frame.svg" />
            <span class="species-type">${species.type}</span>
          </div>  
          <div>
            <p class="species-type">${species.type}</p>
            <h3 class="species-title">${species.speciesName}</h3>
            <p class="species-subtitle">${species.scientificName}</p>
          </div>         
        </div> 
        <hr class="hr-divider">      
        ${usesHTML}
        
        <hr class="hr-divider">
        
        <div class="iic-container">
          <div>
            <strong>IIC:</strong> <span class="iic-value">${species.iic}</span>
          </div>
          <div>
            <span class="iic-level ${species.iicLevel.toLowerCase()}">${
        species.iicLevel
      }</span>
          </div>
        </div>
      `;

      speciesContainer.appendChild(card);
    });
  }

  // Aplicar filtros al cargar la página
  applyFilters();
});
