const speciesData = [
  {
    type: "Acuática",
    speciesName: "Pímpano",
    scientificName: "Chelydra acutirostris",
    endemica: "",
    family: "Chelydridae",
    habitad: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "NT",
  },
  {
    type: "Terrestre",
    speciesName: "Montañera",
    scientificName: "Rhinoclemmys annulata",
    endemica: "",
    family: "Geoemydidae",
    habitad: "Bosques húmedos",
    status: "",
    statusClass: "NT",
  },
  {
    type: "Semiacuática",
    speciesName: "Palmera",
    scientificName: "Rhinoclemmys melanosterna",
    endemica: "",
    family: "Geoemydidae",
    habitad: "Ríos, arroyos, ciénagas y manglares",
    status: "",
    statusClass: "NT",
  },
  {
    type: "Semiacuática",
    speciesName: "Tortuga de río chocoana",
    scientificName: "Rhinoclemmys nasuta",
    endemica: "",
    family: "Geoemydidae",
    habitad: "Ríos, arroyos, ciénagas y manglares",
    status: "",
    statusClass: "VU",
  },
  {
    type: "Acuática",
    speciesName: "Hicotea",
    scientificName: "Trachemys callirostris",
    endemica: "",
    family: "Emydidae",
    habitad: "Arroyos y ciénagas",
    status: "",
    statusClass: "VU",
  },
  {
    type: "Acuática",
    speciesName: "Hicotea del Atrato",
    scientificName: "Trachemys medemi",
    endemica: "Si",
    family: "Emydidae",
    habitad: "Arroyos y ciénagas",
    status: "",
    statusClass: "EN",
  },
  {
    type: "Acuática",
    speciesName: "Cabeza de trozo",
    scientificName: "Kinosternon (Cryptochelys) dunni",
    endemica: "Si",
    family: "Kinosternidae",
    habitad: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "EN",
  },
  {
    type: "Semiacuática",
    speciesName: "Tapaculo",
    scientificName: "Kinosternon (Cryptochelys) leucostomum",
    endemica: "",
    family: "Kinosternidae",
    habitad: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "LC",
  },
  {
    type: "Semiacuática",
    speciesName: "Swanka",
    scientificName: "Kinosternon (Kinosternon) albogulare",
    endemica: "",
    family: "Kinosternidae",
    habitad: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "LC",
  },
  {
    type: "Semiacuática",
    speciesName: "Galápago",
    scientificName: "Kinosternon (Kinosternon) scorpioides",
    endemica: "",
    family: "Kinosternidae",
    habitad: "Cuerpos pequeños de agua",
    status: "",
    statusClass: "LC",
  },
  {
    type: "Terrestre",
    speciesName: "Morrocoy",
    scientificName: "Chelonoidis carbonarius",
    endemica: "",
    family: "Testudinidae",
    habitad: "Bosques secos y sabanas",
    status: "",
    statusClass: "EN",
  },
  {
    type: "Semiacuática",
    speciesName: "Carranchina",
    scientificName: "Mesoclemmys dahli",
    endemica: "Si",
    family: "Chelidae",
    habitad: "Arroyos y jagüeyes en bosques secos",
    status: "",
    statusClass: "CR",
  },
  {
    type: "Acuática",
    speciesName: "Tortuga de río",
    scientificName: "Podocnemis lewyana",
    endemica: "Si",
    family: "Podocnemidae",
    habitad: "Ríos y en menor medida ciénagas",
    status: "",
    statusClass: "CR",
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
      card.classList.add("card");

      card.innerHTML = `
          <p class="species-type ${species.type}"><strong>Tipo:</strong> ${species.type}</p>
          <p class="species-name">${species.speciesName}</p>
          <p class="scientific-name">${species.scientificName}</p>
          <hr>
          <p class="species-description"><strong>Familia:</strong> ${species.family}</p>
          <p class="species-description"><strong>Endémica:</strong> ${species.endemica}</p>     
          <p class="species-description"><strong>Hábitad:</strong> ${species.habitad}</p>
          <hr>
          <div class="status-container">
            <span class="status ${species.statusClass}">${species.statusClass}</span>
          </div>
        `;

      speciesContainer.appendChild(card);
    });
  }

  // Aplicar filtros al cargar la página
  applyFilters();
});
