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
const contenido2 = document.getElementById("decomisos-tities");
if (contenido2) {
  Highcharts.chart("decomisos-tities", {
    chart: {
      type: "line",
      height: 500,
      backgroundColor: "none",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },

    title: {
      text: null,
      style: {
        color: "#000000",
        fontSize: "18px",
        fontWeight: "bold",
      },
    },

    subtitle: {
      text: null,
      style: {
        color: "#000000", 
      },
    },

    yAxis: {
      title: {
        text: "Decomisos",
        style: {
          color: "#000000", 
        },
      },
      labels: {
        style: {
          color: "#000000", 
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#f0f0f0",
    },

    xAxis: {
      categories: [
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
      accessibility: {
        rangeDescription: "Rango: 2016 a 2023",
      },
      labels: {
        style: {
          color: "#000000", 
        },
      },
      gridLineWidth: 0,
      lineWidth: 1,
    },

    legend: {
      enabled: false,
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        color: "#4081b6", 
        lineWidth: 3,
        marker: {
          enabled: true,
          radius: 5,
          symbol: "circle",
          fillColor: "#ffffff",
          lineWidth: 2,
          lineColor: "#4081b6",
        },
      },
    },

    series: [
      {
        name: "Decomisos",
        type: "line",
        data: [64, 66, 72, 94, 80, 131, 100, 80],
        tooltip: {
          pointFormat:
            "<b style='color:#000000'>{point.y}</b> decomisos en <b style='color:#000000'>{point.category}</b>",
          headerFormat:
            '<span style="font-size: 12px; color: #000000">{point.key}</span><br/>',
        },
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              height: 350,
              spacing: [10, 5, 10, 5],
            },
            title: {
              style: {
                fontSize: "14px",
              },
            },
          },
        },
      ],
    },

    credits: {
      enabled: false,
    },

    tooltip: {
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      style: {
        color: "#000000", // Color negro para el texto del tooltip
      },
    },
  });
}


// Contenido 4: Carrusel simple para ficha305
(function () {
  const carousel = document.getElementById("ficha305-contenido4-carousel");
  if (!carousel) return;
  const track = carousel.querySelector(".ficha305-contenido4-carousel-track");
  const prevBtn = carousel.querySelector(".ficha305-contenido4-carousel-control.prev");
  const nextBtn = carousel.querySelector(".ficha305-contenido4-carousel-control.next");
  const dotsContainer = carousel.querySelector(".ficha305-contenido4-carousel-dots");

  // Arreglo de imágenes (editar rutas aquí)
  const slidesData = [
    {
      src: "https://reporte.humboldt.org.co/assets/img/2024/3/305/ficha-305-galeria-1.jpg",
      alt: "Slide 1",
    },
    {
      src: "https://reporte.humboldt.org.co/assets/img/2024/3/305/ficha-305-galeria-2.jpg",
      alt: "Slide 2",
    },
    {
      src: "https://reporte.humboldt.org.co/assets/img/2024/3/305/ficha-305-galeria-3.jpg",
      alt: "Slide 3",
    },
    {
      src: "https://reporte.humboldt.org.co/assets/img/2024/3/305/ficha-305-galeria-4.jpg",
      alt: "Slide 4",
    },
    {
      src: "https://reporte.humboldt.org.co/assets/img/2024/3/305/ficha-305-galeria-5.jpg",
      alt: "Slide 5",
    },
    {
      src: "https://reporte.humboldt.org.co/assets/img/2024/3/305/ficha-305-galeria-6.jpg",
      alt: "Slide 6",
    },
  ];

  // Generar slides dinámicamente
  track.innerHTML = "";
  slidesData.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "ficha305-contenido4-slide" + (i === 0 ? " active" : "");
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

  let slides = Array.from(track.querySelectorAll(".ficha305-contenido4-slide"));
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