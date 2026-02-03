document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("areasMarinas", {
    chart: {
      type: "area",
      backgroundColor: "transparent",
      height: "600px",
      style: {
        fontFamily: "'Rubik', sans-serif",
        color: "#000000",
      },
    },
    title: {
      text: null, // Título eliminado
    },
    subtitle: {
      text: null, // Subtítulo eliminado
    },
    xAxis: {
      categories: [
        "1964",
        "1969",
        "1977",
        "1995",
        "2001",
        "2002",
        "2005",
        "2006",
        "2008",
        "2009",
        "2011",
        "2012",
        "2013",
        "2014",
        "2018",
        "2022",
        "2024",
      ],
      title: {
        text: "Año",
        style: {
          color: "#000000",
          fontWeight: "bold",
          fontSize: "14px", // Tamaño aumentado
        },
      },
      labels: {
        style: {
          color: "#000000",
          fontSize: "12px", // Tamaño aumentado
        },
        rotation: -45,
      },
      gridLineWidth: 1,
      gridLineColor: "#f0f0f0",
    },
    yAxis: {
      title: {
        text: "Hectáreas (ha)",
        style: {
          color: "#000000",
          fontWeight: "bold",
          fontSize: "14px", // Tamaño aumentado
        },
      },
      labels: {
        style: {
          color: "#000000",
          fontSize: "12px", // Tamaño aumentado
        },
        format: "{value:,.0f}",
      },
      gridLineWidth: 1,
      gridLineColor: "#f0f0f0",
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      padding: 15, // Más espacio interno
      itemMarginTop: 10,
      itemMarginBottom: 10,
      itemStyle: {
        color: "#000000",
        fontSize: "16px", // Letra más grande
        fontWeight: "normal",
        cursor: "pointer",
      },
      itemHoverStyle: {
        color: "#00748B",
        fontWeight: "bold",
      },
      itemDistance: 40, // Más separación entre elementos
      symbolWidth: 20, // Símbolos más grandes
      symbolHeight: 12,
      symbolRadius: 3,
      // Mejorar el estilo de los símbolos
      symbolPadding: 8, // Espacio entre símbolo y texto
    },
    tooltip: {
      shared: true,
      headerFormat:
        '<span style="font-size: 14px; font-weight: bold">{point.key}</span><br/>',
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} ha</b><br/>',
      valueDecimals: 0,
      style: {
        fontSize: "14px", // Tamaño aumentado
        fontFamily: "'Rubik', sans-serif",
      },
    },
    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#ffffff",
        lineWidth: 1,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3,
          lineWidth: 1,
          lineColor: "#ffffff",
        },
      },
      series: {
        fillOpacity: 0.7,
        marker: {
          enabled: false,
        },
        // Mejorar hover
        states: {
          hover: {
            enabled: true,
            halo: {
              size: 8,
              opacity: 0.2,
            },
          },
        },
      },
    },
    series: [
      {
        name: "Área Costera (ha)",
        data: [
          383000, // 1964
          391057, // 1969
          471688, // 1977
          471778, // 1995
          471783, // 2001
          475683, // 2002
          475683, // 2005
          502804, // 2006
          508508, // 2008
          540426, // 2009
          541921, // 2011
          550651, // 2012
          580651, // 2013
          586945, // 2014
          586945, // 2018
          586945, // 2022
          761599, // 2024
        ],
        color: "#008493", // Azul marino
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "rgba(0, 116, 139, 0.8)"],
            [1, "rgba(0, 116, 139, 0.2)"],
          ],
        },
      },
      {
        name: "Área Marina (ha)",
        data: [
          0, // 1964
          6943, // 1969
          136322, // 1977
          137848, // 1995
          137887, // 2001
          137887, // 2002
          6639587, // 2005
          6639587, // 2006
          6639587, // 2008
          6644612, // 2009
          6644612, // 2011
          6644612, // 2012
          6813637, // 2013
          6825024, // 2014
          6892200, // 2018
          10204747, // 2022
          10228993, // 2024
        ],
        color: "#BEE2E9", // Azul claro
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "rgba(109, 198, 218, 0.8)"],
            [1, "rgba(109, 198, 218, 0.2)"],
          ],
        },
      },
      {
        name: "Total Área Protegida",
        type: "line",
        data: [
          383000, // 1964
          398000, // 1969
          608010, // 1977
          609626, // 1995
          609670, // 2001
          613570, // 2002
          7115270, // 2005
          7142391, // 2006
          7148095, // 2008
          7185038, // 2009
          7186532, // 2011
          7195263, // 2012
          7394287, // 2013
          7411968, // 2014
          7479145, // 2018
          10791692, // 2022
          10990592, // 2024
        ],
        color: "#F59C00", // Verde
        lineWidth: 3,
        marker: {
          enabled: true,
          radius: 6, // Marcadores más grandes
          symbol: "circle",
          lineWidth: 2,
          lineColor: "#ffffff",
          fillColor: "#F59C00",
        },
        dashStyle: "Solid",
        zIndex: 5,
        tooltip: {
          valueSuffix: " ha",
          pointFormat:
            '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} ha</b><br/>',
        },
      },
    ],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768,
          },
          chartOptions: {
            xAxis: {
              labels: {
                rotation: -30,
                fontSize: "10px",
              },
            },
            legend: {
              itemStyle: {
                fontSize: "12px", // Tamaño reducido en móvil
              },
              padding: 10,
              itemDistance: 20,
            },
            tooltip: {
              style: {
                fontSize: "12px",
              },
            },
          },
        },
      ],
    },
  });
});

// Contenido 2

document.addEventListener("DOMContentLoaded", function () {
  // Gráfico para Áreas Someras
  Highcharts.chart("areasSomeras", {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      height: "500px",
      style: {
        fontFamily: "'Rubik', sans-serif",
        color: "#000000",
      },
      spacingBottom: 40, // Espacio para leyenda
    },
    title: {
      text: "Áreas someras",
      style: {
        fontFamily: "'Rubik', sans-serif",
        color: "#000000",
      },
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      categories: ["2011", "2022", "2024"],
      title: {
        text: "Año",
        style: {
          color: "#000000",
          fontWeight: "bold",
          fontSize: "14px",
        },
      },
      labels: {
        style: {
          color: "#000000",
          fontSize: "12px",
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#f0f0f0",
    },
    yAxis: {
      title: {
        text: "Porcentaje (%)",
        style: {
          color: "#000000",
          fontWeight: "bold",
          fontSize: "14px",
        },
      },
      labels: {
        style: {
          color: "#000000",
          fontSize: "12px",
        },
        format: "{value}%",
      },
      min: 0,
      max: 25,
      tickInterval: 5,
      gridLineWidth: 1,
      gridLineColor: "#f0f0f0",
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      padding: 10,
      margin: 15,
      itemStyle: {
        color: "#000000",
        fontSize: "14px",
        fontWeight: "normal",
      },
      itemHoverStyle: {
        color: "#00748B",
        fontWeight: "bold",
      },
      itemDistance: 25,
      symbolWidth: 16,
      symbolHeight: 10,
      symbolRadius: 2,
      symbolPadding: 6,
    },
    tooltip: {
      shared: true,
      headerFormat:
        '<span style="font-size: 14px; font-weight: bold">{point.key}</span><br/>',
      pointFormat:
        '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}%</b><br/>',
      valueDecimals: 2,
      style: {
        fontSize: "14px",
        fontFamily: "'Rubik', sans-serif",
      },
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          radius: 6,
          symbol: "circle",
          lineWidth: 2,
          lineColor: "#ffffff",
        },
        dataLabels: {
          enabled: false,
        },
        states: {
          hover: {
            lineWidthPlus: 1,
          },
        },
      },
      series: {
        animation: {
          duration: 500,
        },
      },
    },
    series: [
      {
        name: "Ámbito de gestión nacional",
        data: [19.16, 22.12, 22.12],
        color: "#008493", // Azul marino
        lineWidth: 3,
        marker: {
          fillColor: "#008493",
        },
      },
      {
        name: "Ámbito de gestión regional",
        data: [7.86, 9.39, 9.39],
        color: "#F59C00", // Azul claro
        lineWidth: 3,
        marker: {
          fillColor: "#F59C00",
        },
      },
    ],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768,
          },
          chartOptions: {
            legend: {
              itemStyle: {
                fontSize: "12px",
              },
              itemDistance: 15,
              padding: 8,
            },
          },
        },
      ],
    },
  });

  // Gráfico para Paisajes Submarinos Profundos
  Highcharts.chart("paisajesProfundos", {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      height: "500px",
      style: {
        fontFamily: "'Rubik', sans-serif",
        color: "#000000",
      },
      spacingBottom: 40,
    },
    title: {
      text: "Paisajes submarinos profundos",
      style: {
        fontFamily: "'Rubik', sans-serif",
        color: "#000000",
      },
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      categories: ["2011", "2021", "2022", "2024"],
      title: {
        text: "Año",
        style: {
          color: "#000000",
          fontWeight: "bold",
          fontSize: "14px",
        },
      },
      labels: {
        style: {
          color: "#000000",
          fontSize: "12px",
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#f0f0f0",
    },
    yAxis: {
      title: {
        text: "Porcentaje (%)",
        style: {
          color: "#000000",
          fontWeight: "bold",
          fontSize: "14px",
        },
      },
      labels: {
        style: {
          color: "#000000",
          fontSize: "12px",
        },
        format: "{value}%",
      },
      min: 0,
      max: 14,
      tickInterval: 2,
      gridLineWidth: 1,
      gridLineColor: "#f0f0f0",
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      padding: 10,
      margin: 15,
      itemStyle: {
        color: "#000000",
        fontSize: "14px",
        fontWeight: "normal",
      },
      itemHoverStyle: {
        color: "#00748B",
        fontWeight: "bold",
      },
      itemDistance: 25,
      symbolWidth: 16,
      symbolHeight: 10,
      symbolRadius: 2,
      symbolPadding: 6,
    },
    tooltip: {
      shared: true,
      headerFormat:
        '<span style="font-size: 14px; font-weight: bold">{point.key}</span><br/>',
      pointFormat:
        '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}%</b><br/>',
      valueDecimals: 2,
      style: {
        fontSize: "14px",
        fontFamily: "'Rubik', sans-serif",
      },
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          radius: 6,
          symbol: "circle",
          lineWidth: 2,
          lineColor: "#ffffff",
        },
        dataLabels: {
          enabled: false,
        },
        states: {
          hover: {
            lineWidthPlus: 1,
          },
        },
      },
      series: {
        animation: {
          duration: 500,
        },
      },
    },
    series: [
      {
        name: "Ámbito de gestión nacional",
        data: [0.03, 0.25, 11.54, 11.54],
        color: "#008493",
        lineWidth: 3,
        marker: {
          fillColor: "#008493",
        },
      },
    ],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768,
          },
          chartOptions: {
            legend: {
              itemStyle: {
                fontSize: "12px",
              },
              itemDistance: 15,
              padding: 8,
            },
          },
        },
      ],
    },
  });
});

// Contenido 3
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
