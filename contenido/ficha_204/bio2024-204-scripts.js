// Contenido 1
document.addEventListener("DOMContentLoaded", function () {
  // Namespace para evitar conflictos
  const GlobalTabs = {
    init: function () {
      this.bindEvents();
      this.initializeTabs();
    },

    bindEvents: function () {
      // Usar event delegation para mejor performance
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
            ?.getAttribute("data-tab-target")
        );

        if (firstContent) {
          // Determinar si usar block o flex según el grupo
          const displayType = GlobalTabs.getDisplayType(firstContent);
          firstContent.style.display = displayType;
          firstContent.style.opacity = "1";
        }
      });
    },

    switchTab: function (tabLink) {
      const tabContainer = tabLink.closest("[data-tab-group]");
      const targetId = tabLink.getAttribute("data-tab-target");

      if (!tabContainer || !targetId) return;

      // Activar tab clickeado y desactivar otros en el mismo grupo
      const tabGroup = tabContainer.getAttribute("data-tab-group") || "default";
      GlobalTabs.activateTab(tabLink, tabGroup);

      // Mostrar contenido correspondiente
      GlobalTabs.showContent(targetId, tabGroup);
    },

    activateTab: function (activeTab, group) {
      // Desactivar todos los tabs del mismo grupo
      const selector =
        group === "default"
          ? "[data-tab-target]"
          : `[data-tab-group="${group}"] [data-tab-target]`;

      document.querySelectorAll(selector).forEach((tab) => {
        tab.parentElement.classList.remove("active");
      });

      // Activar tab actual
      activeTab.parentElement.classList.add("active");
    },

    showContent: function (targetId, group) {
      // Ocultar todos los contenidos del mismo grupo
      const contentSelector =
        group === "default"
          ? "[data-tab-content]"
          : `[data-tab-content-group="${group}"] [data-tab-content]`;

      document.querySelectorAll(contentSelector).forEach((content) => {
        content.style.display = "none";
        content.style.opacity = "0";
        content.classList.remove("active");
      });

      // Mostrar contenido objetivo
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        GlobalTabs.fadeInContent(targetElement, group);
      }
    },

    fadeInContent: function (element, group) {
      // Determinar si usar block o flex según el grupo
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
      // Si el elemento tiene data-tab-content-group="grupo3", usar flex
      const contentGroup = element.closest("[data-tab-content-group]");
      if (
        contentGroup &&
        contentGroup.getAttribute("data-tab-content-group") === "grupo6"
      ) {
        return "grid";
      }

      // Si se proporciona el grupo como parámetro, verificar también
      if (group === "grupo6") {
        return "grid";
      }

      // Por defecto usar block
      return "flex";
    },
  };

  // Inicializar el sistema de tabs
  GlobalTabs.init();
});

const contenido2 = document.getElementById("motores-de-transformacion");
if (contenido2) {
  Highcharts.chart("motores-de-transformacion", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: 600,
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
        borderColor: "#ffffff",
        borderWidth: 1,
        name: "Amenazas",
        colorByPoint: true,
        data: [
          {
            name: "Residuos sólidos",
            y: 21.21,
            sliced: false,
            selected: true,
            color: "#00748B",
          },
          {
            name: "Quemas",
            y: 15.15,
            color: "#F59C00",
          },
          {
            name: "Tala",
            y: 12.12,
            color: "#5c8120ff",
          },
          {
            name: "Buchón de agua",
            y: 9.09,
            color: "#75C8DA",
          },
          {
            name: "Redes de pesca inadecuadas",
            y: 9.09,
            color: "#695DA6",
          },
          {
            name: "Apropiación de playones",
            y: 6.06,
            color: "#79AB2B",
          },
          {
            name: "Desvío de caños",
            y: 6.06,
            color: "#D9534F",
          },
          {
            name: "Ganadería",
            y: 6.06,
            color: "#5BC0DE",
          },
          {
            name: "Vertimientos residuales",
            y: 6.06,
            color: "#F0AD4E",
          },
          {
            name: "Orden público",
            y: 3.03,
            color: "#428BCA",
          },
          {
            name: "Pérdida de caños",
            y: 3.03,
            color: "#5CB85C",
          },
          {
            name: "Vertimiento de motores",
            y: 3.03,
            color: "#FF851B",
          },
        ],
      },
    ],
  });
}
