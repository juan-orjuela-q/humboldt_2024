// Datos de la línea del tiempo — eventos proporcionados por el usuario
const timelineEvents = [
  {
    year: "1978",
    title: "Fundación",
    img: "./input/img/ficha-110-linea-tiempo-1.png",
  },
  {
    year: "2004",
    title: "Administración pasa a Comfenalco",
    img: "./input/img/ficha-110-linea-tiempo-2.png",
  },
  {
    year: "2015",
    title: "Designación de Santiago Madriñán",
    img: "./input/img/ficha-110-linea-tiempo-3.png",
  },
  {
    year: "2020",
    title: "Acreditación BGCI",
    img: "./input/img/ficha-110-linea-tiempo-4.png",
  },
  {
    year: "2020",
    title: "Premio BIBO",
    img: "./input/img/ficha-110-linea-tiempo-5.png",
  },
  {
    year: "2021",
    title: "Reconocimiento como Centro de Ciencia (Minciencias)",
    img: "./input/img/ficha-110-linea-tiempo-6.png",
  },
  {
    year: "2022",
    title: "Acreditación ArbNet",
    img: "./input/img/ficha-110-linea-tiempo-7.png",
  },
  {
    year: "2024",
    title: "Sede del congreso de jardines botánicos",
    img: "./input/img/ficha-110-linea-tiempo-8.png",
  },
  {
    year: "2024",
    title: "Premio GEMAS",
    img: "./input/img/ficha-110-linea-tiempo-9.png",
  },
];

function renderTimeline(containerId = "timeline", events = timelineEvents) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Limpiar
  container.innerHTML = "";

  events.forEach((ev, idx) => {
    const evWrap = document.createElement("article");
    evWrap.className = "event";

    // Añadir clase para alternar posición
    // IMPARES: marker y top | PARES: marker y bottom
    if (idx % 2 !== 0) {
      // Índices impares
      evWrap.classList.add("marker", "top");
    } else {
      // Índices pares
      evWrap.classList.add("marker", "bottom");
    }

    // Crear contenido del evento
    const content = document.createElement("div");
    content.className = "content";

    // Imagen opcional
    if (ev.img) {
      const imgEl = document.createElement("img");
      imgEl.className = "circle-img";
      imgEl.src = ev.img;
      imgEl.alt = ev.title || "Imagen " + ev.year;
      imgEl.onerror = function () {
        this.style.display = "none";
      };
      content.appendChild(imgEl);
    }

    // Div contenedor para year y marker juntos
    const yearMarkerContainer = document.createElement("div");
    yearMarkerContainer.className = "year-marker-container";

    const year = document.createElement("div");
    year.className = "year";
    year.textContent = ev.year;

    const marker = document.createElement("div");
    marker.className = "marker";

    // Añadir year y marker al contenedor
    yearMarkerContainer.appendChild(year);
    yearMarkerContainer.appendChild(marker);

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `<div class="title">${ev.title || ""}</div>`;

    // Añadir los elementos al contenido principal
    content.appendChild(yearMarkerContainer);
    content.appendChild(meta);
    evWrap.appendChild(content);

    container.appendChild(evWrap);
  });
}

// Inicializar en DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  renderTimeline();
});

// Exportar para uso por otras herramientas si se necesita
if (typeof module !== "undefined" && module.exports) {
  module.exports = { renderTimeline, timelineEvents };
}

// Contenido 3 - Nuevos datos de plantas

const speciesData = [
  {
    especie: "Bromelia fragilis",
    categoria: "CR",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  { especie: "Guaiacum officinale", categoria: "CR", distribucion: "Nativa" },
  {
    especie: "Licania cuspidata",
    categoria: "CR",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Metastelma atrovirens",
    categoria: "CR",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Mikania tristachya",
    categoria: "CR",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Oncidium nevadense",
    categoria: "CR",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Oxandra oblongifolia",
    categoria: "CR",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Pitcairnia arenicola",
    categoria: "CR",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Styrax schultzei",
    categoria: "CR",
    distribucion: "Endémica, Colombia",
  },
  { especie: "Tayloria altorum", categoria: "CR", distribucion: "Nativa" },
  {
    especie: "Tillandsia acuminata",
    categoria: "CR",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Tillandsia brevior",
    categoria: "CR",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Zamia restrepoi",
    categoria: "CR",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Amorimia concinna",
    categoria: "EN",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Aspidosperma polyneuron",
    categoria: "EN",
    distribucion: "Nativa",
  },
  {
    especie: "Astrocaryum malybo",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Berberis meollacensis",
    categoria: "EN",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  { especie: "Bulnesia arborea", categoria: "EN", distribucion: "Nativa" },
  {
    especie: "Bunchosia anomala",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  { especie: "Ceroxylon ceriferum", categoria: "EN", distribucion: "Nativa" },
  {
    especie: "Chalybea kirkbridei",
    categoria: "EN",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Chrysophyllum euryphyllum",
    categoria: "EN",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Coccothrinax argentata",
    categoria: "EN",
    distribucion: "Nativa",
  },
  {
    especie: "Cyrtochilum leucopterum",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Diplostephium santamartae",
    categoria: "EN",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  { especie: "Elaeis oleifera", categoria: "EN", distribucion: "Nativa" },
  {
    especie: "Ficus eliadis",
    categoria: "EN",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Guapira uberrima",
    categoria: "EN",
    distribucion: "Endémica, Llanura del Caribe",
  },
  { especie: "Guzmania cylindrica", categoria: "EN", distribucion: "Nativa" },
  {
    especie: "Guzmania pallida",
    categoria: "EN",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  { especie: "Hyptis purdiei", categoria: "EN", distribucion: "Nativa" },
  { especie: "Ilex gale", categoria: "EN", distribucion: "Endémica, Colombia" },
  {
    especie: "Jaramilloa hylibates",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Karwinskia colombiana",
    categoria: "EN",
    distribucion: "Endémica, Llanura del Caribe",
  },
  { especie: "Licania arborea", categoria: "EN", distribucion: "Nativa" },
  { especie: "Licania platypus", categoria: "EN", distribucion: "Nativa" },
  {
    especie: "Muellera burkartii",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  { especie: "Nowellia curvifolia", categoria: "EN", distribucion: "Nativa" },
  {
    especie: "Oreopanax fontqueranus",
    categoria: "EN",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  { especie: "Pachira quinata", categoria: "EN", distribucion: "Nativa" },
  { especie: "Parinari pachyphylla", categoria: "EN", distribucion: "Nativa" },
  {
    especie: "Pentacalia harrietae",
    categoria: "EN",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Pentacalia perijaensis",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Pentacalia taironae",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Phoradendron lorifolium",
    categoria: "EN",
    distribucion: "Nativa",
  },
  {
    especie: "Piptadenia uliginosa",
    categoria: "EN",
    distribucion: "Endémica, Llanura del Caribe",
  },
  { especie: "Prioria copaifera", categoria: "EN", distribucion: "Nativa" },
  {
    especie: "Puya sanctae-martae",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Racinaea sanctae-martae",
    categoria: "EN",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Salvia codazziana",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Salvia cyanotropha",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  { especie: "Salvia funckii", categoria: "EN", distribucion: "Nativa" },
  {
    especie: "Salvia libanensis",
    categoria: "EN",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Simira cesariana",
    categoria: "EN",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Steiractinia rusbyana",
    categoria: "EN",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Tillandsia sigmoidea",
    categoria: "EN",
    distribucion: "Endémica, Colombia",
  },
  { especie: "Acoelorraphe wrightii", categoria: "VU", distribucion: "Nativa" },
  {
    especie: "Adenocalymma magdalenense",
    categoria: "VU",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Berberis tabiensis",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
  { especie: "Billbergia macrolepis", categoria: "VU", distribucion: "Nativa" },
  {
    especie: "Blakea schultzei",
    categoria: "VU",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Clavija sanctae-martae",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Cryosophila kalbreyeri",
    categoria: "VU",
    distribucion: "Nativa",
  },
  { especie: "Cyathea arborea", categoria: "VU", distribucion: "Nativa" },
  {
    especie: "Epidendrum cleefii",
    categoria: "VU",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Guzmania goudotiana",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Handroanthus coralibe",
    categoria: "VU",
    distribucion: "Endémica, Llanura del Caribe",
  },
  { especie: "Lecythis mesophylla", categoria: "VU", distribucion: "Nativa" },
  { especie: "Libidibia ebano", categoria: "VU", distribucion: "Nativa" },
  {
    especie: "Oncidium auriculatum",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
  { especie: "Otoba acuminata", categoria: "VU", distribucion: "Nativa" },
  {
    especie: "Passiflora callistemma",
    categoria: "VU",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Passiflora sierrae",
    categoria: "VU",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Pectis monocephala",
    categoria: "VU",
    distribucion: "Endémica, Llanura del Caribe",
  },
  { especie: "Peltogyne purpurea", categoria: "VU", distribucion: "Nativa" },
  { especie: "Pitcairnia schultzei", categoria: "VU", distribucion: "Nativa" },
  { especie: "Podocarpus oleifolius", categoria: "VU", distribucion: "Nativa" },
  { especie: "Prumnopitys harmsiana", categoria: "VU", distribucion: "Nativa" },
  { especie: "Prumnopitys montana", categoria: "VU", distribucion: "Nativa" },
  {
    especie: "Restrepia seketii",
    categoria: "VU",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Ruagea smithii",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Ruizanthus venezuelanus",
    categoria: "VU",
    distribucion: "Nativa",
  },
  {
    especie: "Salvia carbonoi",
    categoria: "VU",
    distribucion: "Endémica, Sierra Nevada de Santa Marta",
  },
  {
    especie: "Schefflera heterotricha",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Schefflera paniculitomentosa",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Swartzia mucronifera",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Triplaris purdiei",
    categoria: "VU",
    distribucion: "Endémica, Llanura del Caribe",
  },
  {
    especie: "Vitex columbiensis",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
  {
    especie: "Xylosma obovata",
    categoria: "VU",
    distribucion: "Endémica, Colombia",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const iucnFilter = document.getElementById("iucn-filter");
  const countDisplay = document.getElementById("count");

  // Estado de los filtros actuales
  let currentFilters = {
    distribucion: "Endémica", // Valor por defecto del primer botón activo
    iucn: "all",
  };

  // Función para aplicar todos los filtros
  function applyFilters() {
    let filteredSpecies = speciesData;

    // Aplicar filtro de distribución
    if (currentFilters.distribucion !== "all") {
      filteredSpecies = filteredSpecies.filter((species) =>
        species.distribucion.includes(currentFilters.distribucion)
      );
    }

    // Aplicar filtro de categoría IUCN
    if (currentFilters.iucn !== "all") {
      filteredSpecies = filteredSpecies.filter(
        (species) => species.categoria === currentFilters.iucn
      );
    }

    loadSpecies(filteredSpecies);
    updateCount(filteredSpecies.length);
  }

  // Event listeners para los botones de distribución
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Eliminar la clase 'active' de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Agregar la clase 'active' al botón clicado
      button.classList.add("active");

      // Actualizar filtro de distribución
      currentFilters.distribucion = button.dataset.filter;

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
          <p class="species-name"><i>${species.especie}</i></p>
          <hr>
          <div class="species-description">
            <strong>Distribución:</strong> ${species.distribucion}
          </div>
          <hr>
          <div class="status-container">
            <span class="status ${species.categoria}">${species.categoria}</span>
          </div>
        `;

      speciesContainer.appendChild(card);
    });
  }

  // Aplicar filtros al cargar la página
  applyFilters();
});

// Contenido 4: Carrusel simple para ficha110 - independiente de bio2024-110-script.js
(function () {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;
  const track = carousel.querySelector(".carousel-track");
  const prevBtn = carousel.querySelector(".carousel-control.prev");
  const nextBtn = carousel.querySelector(".carousel-control.next");
  const dotsContainer = carousel.querySelector(".carousel-dots");

  // Arreglo de imágenes (editar rutas aquí)
  const slidesData = [
    { src: "./input/img/ficha-110-jardin-botanico.jpg", alt: "Slide 1" },
    { src: "./input/img/ficha-110-jardin-botanico.jpg", alt: "Slide 2" },
    { src: "./input/img/ficha-110-jardin-botanico.jpg", alt: "Slide 3" },
    { src: "./input/img/ficha-110-jardin-botanico.jpg", alt: "Slide 4" },
    { src: "./input/img/ficha-110-jardin-botanico.jpg", alt: "Slide 5" },
  ];

  // Generar slides dinámicamente
  track.innerHTML = "";
  slidesData.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "slide" + (i === 0 ? " active" : "");
    div.setAttribute("role", "tabpanel");
    div.setAttribute("aria-hidden", i !== 0);
    div.setAttribute("aria-label", `Slide ${i + 1} of ${slidesData.length}`);

    const img = document.createElement("img");
    img.src = s.src;
    img.alt = s.alt || `Imagen ${i + 1}`;
    img.onerror = function () {
      // Crear un placeholder si la imagen no carga
      this.style.display = "none";
      const placeholder = document.createElement("div");
      placeholder.style.width = "100%";
      placeholder.style.height = "100%";
      placeholder.style.backgroundColor = "#555";
      placeholder.style.display = "flex";
      placeholder.style.alignItems = "center";
      placeholder.style.justifyContent = "center";
      placeholder.style.color = "#fff";
      placeholder.innerHTML = `<p>Imagen no disponible</p>`;
      div.appendChild(placeholder);
    };
    div.appendChild(img);
    track.appendChild(div);
  });

  let slides = Array.from(track.querySelectorAll(".slide"));
  let current = slides.findIndex((s) => s.classList.contains("active"));
  if (current < 0) current = 0;

  // crear dots
  dotsContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `Ir a slide ${i + 1}`);
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", i === current);
    if (i === current) btn.classList.add("active");
    btn.addEventListener("click", () => goTo(i));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goTo(i);
      }
    });
    dotsContainer.appendChild(btn);
  });

  function update() {
    slides.forEach((s, i) => {
      const isActive = i === current;
      s.classList.toggle("active", isActive);
      s.setAttribute("aria-hidden", !isActive);
    });

    const dots = dotsContainer.querySelectorAll("button");
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === current);
      d.setAttribute("aria-selected", i === current);
    });

    // Actualizar etiquetas ARIA para navegación
    if (prevBtn) prevBtn.setAttribute("aria-label", "Slide anterior");
    if (nextBtn) nextBtn.setAttribute("aria-label", "Slide siguiente");
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    update();
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => goTo(current - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => goTo(current + 1));
  }

  // Navegación por teclado
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (prevBtn) prevBtn.click();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (nextBtn) nextBtn.click();
    }
    if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      goTo(slides.length - 1);
    }
  });

  // Autoplay opcional: pausa al hover
  let autoplay = true;
  let timer = null;

  function startAutoplay() {
    if (!autoplay) return;
    timer = setInterval(() => goTo(current + 1), 4000);
  }

  function stopAutoplay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  carousel.addEventListener("focusin", stopAutoplay);
  carousel.addEventListener("focusout", startAutoplay);

  // Iniciar autoplay
  startAutoplay();

  // Actualizar inicialmente
  update();
})();
