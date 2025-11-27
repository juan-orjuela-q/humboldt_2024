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

  // Datos de las especies basados en el Excel
  const especiesData = [
    {
      especie: "Acanthemblemaria stephensi",
      nombreComun: "Blenio tubícola",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Acropora cervicornis",
      nombreComun: "Coral cachito de venado",
      uicn: "CR",
      local: "CR",
    },
    {
      especie: "Acropora palmata",
      nombreComun: "Coral cuerno de alce",
      uicn: "CR",
      local: "EN",
    },
    {
      especie: "Aetobatus narinari",
      nombreComun: "Raya águila o Chucho moteado",
      uicn: "EN",
      local: "",
    },
    {
      especie: "Axoclinus rubinoffi",
      nombreComun: "Pez tres aletas ojo negro",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Carcharhinus acronotus",
      nombreComun: "Tiburón de morro negro",
      uicn: "EN",
      local: "",
    },
    {
      especie: "Carcharhinus falciformis",
      nombreComun: "Tiburón sedoso",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Carcharhinus leucas",
      nombreComun: "Tiburón toro",
      uicn: "VU",
      local: "",
    },
    {
      especie: "Carcharhinus limbatus",
      nombreComun: "Tiburón de puntas negras",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Carcharhinus longimanus",
      nombreComun: "Tiburón oceánico de puntas blancas",
      uicn: "CR",
      local: "VU",
    },
    {
      especie: "Carcharhinus obscurus",
      nombreComun: "Tiburón arenero",
      uicn: "EN",
      local: "",
    },
    {
      especie: "Carcharhinus perezii",
      nombreComun: "Tiburón de arrecife del Caribe",
      uicn: "EN",
      local: "",
    },
    {
      especie: "Carcharhinus porosus",
      nombreComun: "Tiburón cacique",
      uicn: "CR",
      local: "",
    },
    {
      especie: "Dendrogyra cylindrus",
      nombreComun: "Coral pilar o de columnas",
      uicn: "CR",
      local: "EN",
    },
    {
      especie: "Diplobatis colombiensis",
      nombreComun: "Raya eléctrica colombiana",
      uicn: "VU",
      local: "EN",
    },
    {
      especie: "Epinephelus itajara",
      nombreComun: "Mero guasa",
      uicn: "VU",
      local: "CR",
    },
    {
      especie: "Epinephelus striatus",
      nombreComun: "Mero de Nassau",
      uicn: "CR",
      local: "CR",
    },
    {
      especie: "Eusmilia fastigiata",
      nombreComun: "Coral flor suave",
      uicn: "CR",
      local: "",
    },
    {
      especie: "Ginglymostoma cirratum",
      nombreComun: "Tiburón gato o nodriza",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Halichoeres malpelo",
      nombreComun: "Doncella de Malpelo",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Hippocampus ingens",
      nombreComun: "Caballito de mar del Pacífico",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Hypanus longus",
      nombreComun: "Raya látigo de cola larga",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Hyporthodus acanthistius",
      nombreComun: "Mero rojo o buchón",
      uicn: "VU",
      local: "",
    },
    {
      especie: "Isostichopus fuscus",
      nombreComun: "Pepino de mar",
      uicn: "EN",
      local: "",
    },
    {
      especie: "Isurus oxyrinchus",
      nombreComun: "Tiburón mako",
      uicn: "EN",
      local: "",
    },
    {
      especie: "Lachnolaimus maximus",
      nombreComun: "Pargo pluma",
      uicn: "VU",
      local: "EN",
    },
    {
      especie: "Lepidonectes bimaculatus",
      nombreComun: "Pez candela",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Lutjanus cyanopterus",
      nombreComun: "Pargo cubera",
      uicn: "VU",
      local: "VU",
    },
    {
      especie: "Megalops atlanticus",
      nombreComun: "Sábalo",
      uicn: "VU",
      local: "CR",
    },
    {
      especie: "Millepora complanata",
      nombreComun: "Coral fuego",
      uicn: "CR",
      local: "",
    },
    {
      especie: "Mycetophyllia ferox",
      nombreComun: "Coral hongo",
      uicn: "CR",
      local: "",
    },
    {
      especie: "Mycteroperca olfax",
      nombreComun: "Mero bacalao",
      uicn: "EN",
      local: "VU",
    },
    {
      especie: "Narcine leoparda",
      nombreComun: "Raya eléctrica leopardo",
      uicn: "VU",
      local: "",
    },
    {
      especie: "Orbicella annularis",
      nombreComun: "Coral papa",
      uicn: "EN",
      local: "",
    },
    {
      especie: "Orbicella faveolata",
      nombreComun: "Coral estrella montañosa",
      uicn: "EN",
      local: "",
    },
    {
      especie: "Rhizoprionodon lalandii",
      nombreComun: "Tiburon cazón picudo chino",
      uicn: "VU",
      local: "",
    },
    {
      especie: "Rhizoprionodon porosus",
      nombreComun: "Tiburón cazón antillano",
      uicn: "VU",
      local: "",
    },
    {
      especie: "Sphyrna corona",
      nombreComun: "Cornuda coronada",
      uicn: "CR",
      local: "",
    },
    {
      especie: "Sphyrna lewini",
      nombreComun: "Tiburón martillo común",
      uicn: "CR",
      local: "VU",
    },
    {
      especie: "Sphyrna mokarran",
      nombreComun: "Tiburón martillo gigante",
      uicn: "CR",
      local: "VU",
    },
    {
      especie: "Sphyrna tiburo",
      nombreComun: "Tiburón cabeza de pala",
      uicn: "EN",
      local: "",
    },
    {
      especie: "Zapteryx xyster",
      nombreComun: "Raya guitarra",
      uicn: "VU",
      local: "",
    },
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

        // Determinar la clase CSS según el estado UICN
        let estadoClass = "";
        if (especie.uicn === "CR") estadoClass = "status-cr";
        else if (especie.uicn === "EN") estadoClass = "status-en";
        else if (especie.uicn === "VU") estadoClass = "status-vu";

        // Determinar la clase CSS para la categoría local
        let localClass = "";
        if (especie.local === "CR") localClass = "status-cr";
        else if (especie.local === "EN") localClass = "status-en";
        else if (especie.local === "VU") localClass = "status-vu";

        row.innerHTML = `
          <td class= "scientific-name">${especie.especie}</td>
          <td>${especie.nombreComun}</td>
          <td class="${estadoClass}">${especie.uicn}</td>
          <td class="${localClass}">${especie.local || "-"}</td>
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

  // Gráfico Highcharts - actualizado con datos reales
  const conteoUICN = especiesData.reduce((acc, especie) => {
    acc[especie.uicn] = (acc[especie.uicn] || 0) + 1;
    return acc;
  }, {});

  const totalEspecies = especiesData.length;

  Highcharts.chart("especies-amenaza", {
    chart: {
      type: "column",
      backgroundColor: "none",
      height: 550,
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
        '<span style="font-size:12px; color:#000; font-family: Rubik, sans-serif">Estado UICN</span><br>',
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
            y: conteoUICN.CR || 0,
            percentage: ((conteoUICN.CR || 0) / totalEspecies) * 100,
            color: "#FF0000",
          },
          {
            name: "En Peligro (EN)",
            y: conteoUICN.EN || 0,
            percentage: ((conteoUICN.EN || 0) / totalEspecies) * 100,
            color: "#E9C101",
          },
          {
            name: "Vulnerable (VU)",
            y: conteoUICN.VU || 0,
            percentage: ((conteoUICN.VU || 0) / totalEspecies) * 100,
            color: "#F59C00",
          },
        ],
      },
    ],
  });
});
