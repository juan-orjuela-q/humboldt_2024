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

  // Datos de las especies
  const especiesData = [
    {
      especie: "Acanthemblemaria stephensi",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Acropora cervicornis",
      filo: "Chordata",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Acropora palmata",
      filo: "Chordata",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Aetobatus narinari",
      filo: "Chordata",
      estado: "En Peligro (EN)",
    },
    {
      especie: "Axoclinus rubinoffi",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Carcharhinus acronotus",
      filo: "Chordata",
      estado: "En Peligro (EN)",
    },
    {
      especie: "Carcharhinus falciformis",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Carcharhinus leucas",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Carcharhinus limbatus",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Carcharhinus longimanus",
      filo: "Chordata",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Carcharhinus obscurus",
      filo: "Chordata",
      estado: "En Peligro (EN)",
    },
    {
      especie: "Carcharhinus perezii",
      filo: "Chordata",
      estado: "En Peligro (EN)",
    },
    {
      especie: "Carcharhinus porosus",
      filo: "Chordata",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Dendrogyra cylindrus",
      filo: "Chordata",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Diplobatis colombiensis",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Epinephelus itajara",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Epinephelus striatus",
      filo: "Chordata",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Eusmilia fastigiata",
      filo: "Chordata",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Ginglymostoma cirratum",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Halichoeres malpelo",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Hippocampus ingens",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    { especie: "Hypanus longus", filo: "Chordata", estado: "Vulnerable (VU)" },
    {
      especie: "Hyporthodus acanthistius",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Isostichopus fuscus",
      filo: "Chordata",
      estado: "En Peligro (EN)",
    },
    {
      especie: "Isurus oxyrinchus",
      filo: "Chordata",
      estado: "En Peligro (EN)",
    },
    {
      especie: "Lachnolaimus maximus",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Lepidonectes bimaculatus",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Lutjanus cyanopterus",
      filo: "Chordata",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Megalops atlanticus",
      filo: "Cnidaria",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Millepora complanata",
      filo: "Mollusca",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Mycetophyllia ferox",
      filo: "Mollusca",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Mycteroperca olfax",
      filo: "Mollusca",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Narcine leoparda",
      filo: "Cnidaria",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Orbicella annularis",
      filo: "Arthropoda",
      estado: "En Peligro (EN)",
    },
    {
      especie: "Orbicella faveolata",
      filo: "Arthropoda",
      estado: "En Peligro (EN)",
    },
    {
      especie: "Rhizoprionodon lalandii",
      filo: "Cnidaria",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Rhizoprionodon porosus",
      filo: "Cnidaria",
      estado: "Vulnerable (VU)",
    },
    {
      especie: "Sphyrna corona",
      filo: "Mollusca",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Sphyrna lewini",
      filo: "Cnidaria",
      estado: "En Peligro Crítico (CR)",
    },
    {
      especie: "Sphyrna mokarran",
      filo: "Mollusca",
      estado: "En Peligro Crítico (CR)",
    },
    { especie: "Sphyrna tiburo", filo: "Mollusca", estado: "En Peligro (EN)" },
    { especie: "Zapteryx xyster", filo: "Cnidaria", estado: "Vulnerable (VU)" },
  ];

  // Función para cargar la tabla
  function cargarTabla() {
    const tableBody = document.getElementById("table-body");
    const itemsPerPage = 10;
    let currentPage = 1;

    // Función para mostrar los datos de la página actual
    function mostrarPagina(page) {
      tableBody.innerHTML = "";

      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = especiesData.slice(startIndex, endIndex);

      paginatedData.forEach((especie) => {
        const row = document.createElement("tr");

        // Determinar la clase CSS según el estado
        let estadoClass = "";
        if (especie.estado.includes("Crítico")) estadoClass = "status-cr";
        else if (especie.estado.includes("Peligro")) estadoClass = "status-en";
        else if (especie.estado.includes("Vulnerable"))
          estadoClass = "status-vu";

        row.innerHTML = `
                <td>${especie.especie}</td>
                <td>${especie.filo}</td>
                <td class="${estadoClass}">${especie.estado}</td>
            `;

        tableBody.appendChild(row);
      });

      actualizarPaginacion(page);
    }

    // Función para actualizar los controles de paginación
    function actualizarPaginacion(page) {
      let paginationContainer = document.getElementById("pagination-container");

      // Crear contenedor de paginación si no existe
      if (!paginationContainer) {
        paginationContainer = document.createElement("div");
        paginationContainer.id = "pagination-container";
        paginationContainer.className = "pagination-container";
        document
          .querySelector(".table-container")
          .appendChild(paginationContainer);
      }

      const totalPages = Math.ceil(especiesData.length / itemsPerPage);

      paginationContainer.innerHTML = `
            <div class="pagination-info">
                Página ${page} de ${totalPages} - Total: ${
        especiesData.length
      } especies
            </div>
            <div class="pagination-controls">
                <button class="pagination-btn" ${
                  page === 1 ? "disabled" : ""
                } onclick="cambiarPagina(${page - 1})">
                    Anterior
                </button>
                ${generarNumerosPagina(page, totalPages)}
                <button class="pagination-btn" ${
                  page === totalPages ? "disabled" : ""
                } onclick="cambiarPagina(${page + 1})">
                    Siguiente
                </button>
            </div>
        `;
    }

    // Función para generar los números de página
    function generarNumerosPagina(currentPage, totalPages) {
      let paginationHTML = "";
      const maxVisiblePages = 5;

      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      // Ajustar startPage si endPage está en el límite
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
                <button class="pagination-btn ${
                  i === currentPage ? "active" : ""
                }" onclick="cambiarPagina(${i})">
                    ${i}
                </button>
            `;
      }

      return paginationHTML;
    }

    // Función global para cambiar de página
    window.cambiarPagina = function (page) {
      currentPage = page;
      mostrarPagina(page);
    };

    // Mostrar la primera página inicialmente
    mostrarPagina(currentPage);
  }

  // Cargar la tabla cuando el DOM esté listo
  cargarTabla();

  // Gráfico Highcharts
  Highcharts.chart("especies-amenaza", {
    chart: {
      type: "column",
      backgroundColor: "none",
      height:550,
      style: {
        fontFamily: "Rubik, sans-serif",
        color: "#000",
        fontSize: "14px",
      },
    },
    title: {
      text: "Especies por Estado de Amenaza UICN",
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "16px",
      },
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
      title: {
        text: "Estado de Amenaza",
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
        },
      },
      labels: {
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "12px",
        },
      },
    },
    yAxis: {
      title: {
        text: "Número de Especies",
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
        },
      },
      labels: {
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "12px",
        },
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            color: "#000",
            fontFamily: "Rubik, sans-serif",
            fontSize: "12px",
            textOutline: "none",
          },
        },
      },
    },
    tooltip: {
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "12px",
      },
      backgroundColor: "#FFFFFF",
      headerFormat:
        '<span style="font-size:12px; color:#000; font-family: Rubik, sans-serif">{series.name}</span><br>',
      pointFormat:
        '<span style="color:#00748B; font-family: Rubik, sans-serif">{point.name}</span>: <b style="color:#000; font-family: Rubik, sans-serif">{point.y} especies</b><br/>Porcentaje: <b style="color:#000; font-family: Rubik, sans-serif">{point.percentage:.1f}%</b>',
    },
    series: [
      {
        name: "Estado de Amenaza",
        colorByPoint: true,
        data: [
          {
            name: "En Peligro Crítico (CR)",
            y: 12,
            percentage: 26.7,
            color: "#FF0000",
          },
          {
            name: "En Peligro (EN)",
            y: 9,
            percentage: 20.0,
            color: "#E9C101",
          },
          {
            name: "Vulnerable (VU)",
            y: 24,
            percentage: 53.3,
            color: "#F59C00",
          },
        ],
      },
    ],
  });
});
