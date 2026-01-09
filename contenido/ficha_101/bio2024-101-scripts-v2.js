const contenido1Grafica1 = document.getElementById(
  "ficha-101-contenido1-grafica1"
);
if (contenido1Grafica1) {
  const createChart = (data) => {
    // FunciÃ³n para formatear nÃºmeros con separadores de miles
    function formatearNumero(numero) {
      return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Acceder a los valores del objeto datas
    const totalRegistros = data[0].value;
    const totalEspecies = data[0].especies;

    // Actualizar el contenido del HTML
    document.getElementById(
      "total-registros-continental"
    ).textContent = ` ${formatearNumero(totalRegistros)}`;

    document.getElementById(
      "total-especies-continental"
    ).textContent = ` ${formatearNumero(totalEspecies)}`;

    // Crear el chart de Highcharts
    return Highcharts.chart("ficha-101-contenido1-grafica1", {
      chart: {
        height: "100%",
        style: {
          fontFamily: "rubik, sans-serif",
        },
      },

      // Let the center circle be white transparent
      colors: ["#ffffff01"],

      title: {
        text: "",
      },

      series: [
        {
          type: "sunburst",
          data: data,
          name: "Root",
          allowTraversingTree: true,
          borderRadius: 3,
          cursor: "pointer",
          borderColor: "#ffffff",
          borderWidth: 1,
          dataLabels: {
            format: "{point.name}",
            filter: {
              property: "innerArcLength",
              operator: ">",
              value: 16,
            },
          },
          levels: [
            {
              level: 1,
              levelIsConstant: false,
              dataLabels: {
                filter: {
                  property: "outerArcLength",
                  operator: ">",
                  value: 64,
                },
              },
            },
            {
              level: 2,
              colorByPoint: true,
            },
            {
              level: 3,
              colorVariation: {
                key: "brightness",
                to: -1,
              },
            },
            {
              level: 4,
              colorVariation: {
                key: "brightness",
                to: -0.1,
              },
            },
          ],
        },
      ],

      tooltip: {
        headerFormat: "",
        pointFormat:
          "En <b>{point.name}</b> el nÃºmero de registros es <b>{point.value}</b> y el nÃºmero de especies es <b>{point.especies}</b>.",
      },
    });
  };

  // Define the data
  const data = [
    {
      id: "0.0",
      parent: "",
      name: "Continental",
      value: 5763600,
      especies: 16279,
    },
    {
      id: "1.0",
      parent: "0.0",
      name: "Animales",
      value: 5007291,
      especies: 7449,
      color: "#FF5141",
    },
    {
      id: "1.1",
      parent: "0.0",
      name: "Plantas",
      value: 612357,
      especies: 7183,
      color: "#96C643",
    },
    {
      id: "1.2",
      parent: "0.0",
      name: "Hongos",
      value: 94867,
      especies: 1247,
      color: "#31B595",
    },
    {
      id: "1.3",
      parent: "0.0",
      name: "Cromistas",
      value: 21904,
      especies: 189,
      color: "#E383BF",
    },
    {
      id: "1.4",
      parent: "0.0",
      name: "Protozoos",
      value: 6059,
      especies: 78,
      color: "#8D72BA",
    },
    {
      id: "1.5",
      parent: "0.0",
      name: "Virus",
      value: 81,
      especies: 5,
      color: "#922C96",
    },
    {
      id: "1.6",
      parent: "0.0",
      name: "Bacterias",
      value: 17537,
      especies: 128,
      color: "#60CFC8",
    },
    {
      id: "1.7",
      parent: "0.0",
      name: "Incertae sedis",
      value: 3336,
      especies: 0,
      color: "#236FBC",
    },
    {
      id: "1.8",
      parent: "0.0",
      name: "Arqueas",
      value: 168,
      especies: 0,
      color: "#12347C",
    },
    {
      id: "2.0",
      parent: "1.0",
      name: "Vertebrados",
      value: 4246653,
      especies: 2430,
      color: "#FF782F",
    },
    {
      id: "3.0",
      parent: "2.0",
      name: "Aves",
      value: 2490852,
      especies: 1105,
    },
    {
      id: "3.1",
      parent: "2.0",
      name: "Anfibios",
      value: 20161,
      especies: 151,
    },
    {
      id: "3.2",
      parent: "2.0",
      name: "MamÃ­feros",
      value: 56622,
      especies: 246,
    },
    {
      id: "3.3",
      parent: "2.0",
      name: "MamÃ­feros marinos",
      value: null,
      especies: null,
    },
    {
      id: "3.4",
      parent: "2.0",
      name: "Reptiles",
      value: 38369,
      especies: 211,
    },
    {
      id: "3.5",
      parent: "2.0",
      name: "Tortugas marinas",
      value: null,
      especies: null,
    },
    {
      id: "3.6",
      parent: "2.0",
      name: "Peces",
      value: 1639741,
      especies: 705,
    },
    {
      id: "3.7",
      parent: "3.6",
      name: "Peces dulceacuÃ­colas",
      value: 220042,
      especies: 224,
    },
    {
      id: "3.8",
      parent: "3.6",
      name: "Peces marinos",
      value: null,
      especies: null,
    },
    {
      id: "2.1",
      parent: "1.0",
      name: "Invertebrados",
      value: 759878,
      especies: 5000,
      color: "#FF9A30",
    },
    {
      id: "3.9",
      parent: "2.1",
      name: "Insectos",
      value: 236627,
      especies: 2954,
    },
    {
      id: "4.0",
      parent: "3.9",
      name: "Abejas",
      value: 9355,
      especies: 132,
    },
    {
      id: "4.1",
      parent: "3.9",
      name: "DÃ­pteros",
      value: 22013,
      especies: 278,
    },
    {
      id: "4.2",
      parent: "3.9",
      name: "Escarabajos",
      value: 76306,
      especies: 726,
    },
    {
      id: "4.3",
      parent: "3.9",
      name: "Hormigas",
      value: 74475,
      especies: 433,
    },
    {
      id: "4.4",
      parent: "3.9",
      name: "Mariposas",
      value: 22276,
      especies: 565,
    },
    {
      id: "4.5",
      parent: "3.9",
      name: "ArÃ¡cnidos",
      value: 4454,
      especies: 229,
    },
    {
      id: "4.6",
      parent: "2.1",
      name: "Moluscos",
      value: 19538,
      especies: 975,
    },
    {
      id: "4.7",
      parent: "2.1",
      name: "DecÃ¡podos",
      value: 467034,
      especies: 229,
    },
    {
      id: "4.8",
      parent: "2.1",
      name: "CrustÃ¡ceos",
      value: 468833,
      especies: 335,
    },
    {
      id: "4.9",
      parent: "2.1",
      name: "Corales",
      value: 8228,
      especies: 63,
    },
    {
      id: "4.10",
      parent: "2.1",
      name: "Medusas",
      value: 1553,
      especies: 15,
    },
    {
      id: "4.11",
      parent: "2.1",
      name: "Esponjas",
      value: 198,
      especies: 35,
    },
    {
      id: "2.2",
      parent: "1.1",
      name: "Angiospermas",
      value: 590803,
      especies: 5982,
    },
    {
      id: "2.3",
      parent: "1.1",
      name: "Gimnospermas",
      value: 128,
      especies: 18,
    },
    {
      id: "2.4",
      parent: "1.1",
      name: "Frailejones",
      value: 81,
      especies: 7,
    },
    {
      id: "2.5",
      parent: "1.1",
      name: "Musgos",
      value: 4594,
      especies: 299,
    },
    {
      id: "2.6",
      parent: "1.1",
      name: "EpÃ­fitas",
      value: 8172,
      especies: 289,
    },
    {
      id: "2.7",
      parent: "1.1",
      name: "Helechos",
      value: 3693,
      especies: 460,
    },
    {
      id: "2.8",
      parent: "1.1",
      name: "OrquÃ­deas",
      value: 1620,
      especies: 246,
    },
    {
      id: "2.9",
      parent: "1.1",
      name: "HepÃ¡ticas",
      value: 4290,
      especies: 209,
    },
    {
      id: "2.10",
      parent: "1.1",
      name: "Bromelias - Labiadas - Pasifloras",
      value: 11549,
      especies: 231,
    },
    {
      id: "2.11",
      parent: "1.1",
      name: "FanerÃ³gamas",
      value: 4252,
      especies: 53,
    },
    {
      id: "2.12",
      parent: "1.1",
      name: "Palmas",
      value: 10428,
      especies: 81,
    },
    {
      id: "2.13",
      parent: "1.1",
      name: "Magnolias",
      value: 337,
      especies: 23,
    },
    {
      id: "2.14",
      parent: "1.1",
      name: "Zamias",
      value: 41,
      especies: 7,
    },
    {
      id: "2.15",
      parent: "1.1",
      name: "Mangles",
      value: 37808,
      especies: 5,
    },
    {
      id: "2.16",
      parent: "1.2",
      name: "Cromistas",
      value: 21904,
      especies: 189,
    },
    {
      id: "2.17",
      parent: "1.2",
      name: "Protozoos",
      value: 6059,
      especies: 78,
    },
    {
      id: "2.18",
      parent: "1.2",
      name: "Virus",
      value: 81,
      especies: 5,
    },
    {
      id: "2.19",
      parent: "1.2",
      name: "Bacterias",
      value: 17537,
      especies: 128,
    },
    {
      id: "2.20",
      parent: "1.2",
      name: "Incertae sedis",
      value: 3336,
      especies: 0,
    },
    {
      id: "2.21",
      parent: "1.2",
      name: "Arqueas",
      value: 168,
      especies: 0,
    },
  ];

  createChart(data);

  const createChart2 = (datas) => {
    // FunciÃ³n para formatear nÃºmeros con separadores de miles
    function formatearNumero(numero) {
      return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Acceder a los valores del objeto datas
    const totalRegistros = datas[0].value;
    const totalEspecies = datas[0].especies;

    // Actualizar el contenido del HTML
    document.getElementById(
      "total-registros-marinos"
    ).textContent = ` ${formatearNumero(totalRegistros)}`;

    document.getElementById(
      "total-especies-marinos"
    ).textContent = ` ${formatearNumero(totalEspecies)}`;

    // Crear el chart de Highcharts
    return Highcharts.chart("ficha-101-contenido1-grafica2", {
      chart: {
        height: "100%",
        style: {
          fontFamily: "rubik, sans-serif",
        },
      },

      // Let the center circle be white transparent
      colors: ["#ffffff01"].concat(Highcharts.getOptions().colors),

      title: {
        text: "",
      },

      series: [
        {
          type: "sunburst",
          data: datas,
          name: "Root",
          allowTraversingTree: true,
          borderRadius: 3,
          cursor: "pointer",
          borderColor: "#ffffff",
          borderWidth: 1,
          dataLabels: {
            format: "{point.name}",
            filter: {
              property: "innerArcLength",
              operator: ">",
              value: 16,
            },
          },
          levels: [
            {
              level: 1,
              levelIsConstant: false,
              dataLabels: {
                filter: {
                  property: "outerArcLength",
                  operator: ">",
                  value: 64,
                },
              },
            },
            {
              level: 2,
              colorByPoint: true,
            },
            {
              level: 3,
              colorVariation: {
                key: "brightness",
                to: -1,
              },
            },
            {
              level: 4,
              colorVariation: {
                key: "brightness",
                to: -0.1,
              },
            },
          ],
        },
      ],

      tooltip: {
        headerFormat: "",
        pointFormat:
          "En <b>{point.name}</b> el nÃºmero de registros es <b>{point.value}</b> y el nÃºmero de especies es <b>{point.especies}</b>.",
      },
    });
  };

  // Define the data
  const datas = [
    {
      id: "0.0",
      parent: "",
      name: "Marino",
      value: 557816,
      especies: 7675,
    },
    {
      id: "1.0",
      parent: "0.0",
      name: "Animales",
      value: 435856,
      especies: 6002,
      color: "#FF5141",
    },
    {
      id: "1.1",
      parent: "0.0",
      name: "Plantas",
      value: 46334,
      especies: 1126,
      color: "#96C643",
    },
    {
      id: "1.2",
      parent: "0.0",
      name: "Hongos",
      value: 219,
      especies: 10,
      color: "#31B595",
    },
    {
      id: "1.3",
      parent: "0.0",
      name: "Cromistas",
      value: 68191,
      especies: 500,
      color: "#E383BF",
    },
    {
      id: "1.4",
      parent: "0.0",
      name: "Protozoos",
      value: 272,
      especies: 3,
      color: "#8D72BA",
    },
    {
      id: "1.5",
      parent: "0.0",
      name: "Virus",
      value: null,
      especies: null,
      color: "#922C96",
    },
    {
      id: "1.6",
      parent: "0.0",
      name: "Bacterias",
      value: 6758,
      especies: 31,
      color: "#60CFC8",
    },
    {
      id: "1.7",
      parent: "0.0",
      name: "Incertae sedis",
      value: 164,
      especies: 0,
      color: "#236FBC",
    },
    {
      id: "1.8",
      parent: "0.0",
      name: "Arqueas",
      value: 22,
      especies: 4,
      color: "#12347C",
    },
    {
      id: "2.0",
      parent: "1.0",
      name: "Vertebrados",
      value: 212993,
      especies: 2369,
      color: "#FF782F",
    },
    {
      id: "3.0",
      parent: "2.0",
      name: "Aves",
      value: 120493,
      especies: 748,
    },
    {
      id: "3.1",
      parent: "2.0",
      name: "Anfibios",
      value: 106,
      especies: 26,
    },
    {
      id: "3.2",
      parent: "2.0",
      name: "MamÃ­feros",
      value: 1656,
      especies: 82,
    },
    {
      id: "3.3",
      parent: "2.0",
      name: "MamÃ­feros marinos",
      value: 70,
      especies: 10,
    },
    {
      id: "3.4",
      parent: "2.0",
      name: "Reptiles",
      value: 4083,
      especies: 75,
    },
    {
      id: "3.5",
      parent: "2.0",
      name: "Tortugas marinas",
      value: 3496,
      especies: 4,
    },
    {
      id: "3.6",
      parent: "2.0",
      name: "Peces",
      value: 85183,
      especies: 1398,
    },
    {
      id: "3.7",
      parent: "3.6",
      name: "Peces dulceacuÃ­colas",
      value: 539,
      especies: 49,
    },
    {
      id: "3.8",
      parent: "3.6",
      name: "Peces marinos",
      value: 75351,
      especies: 1085,
    },
    {
      id: "2.1",
      parent: "1.0",
      name: "Invertebrados",
      value: 222750,
      especies: 3632,
      color: "#FF9A30",
    },
    {
      id: "3.9",
      parent: "2.1",
      name: "Insectos",
      value: 6167,
      especies: 268,
    },
    {
      id: "4.0",
      parent: "3.9",
      name: "Abejas",
      value: 231,
      especies: 15,
    },
    {
      id: "4.1",
      parent: "3.9",
      name: "DÃ­pteros",
      value: 422,
      especies: 17,
    },
    {
      id: "4.2",
      parent: "3.9",
      name: "Escarabajos",
      value: 4599,
      especies: 61,
    },
    {
      id: "4.3",
      parent: "3.9",
      name: "Hormigas",
      value: 408,
      especies: 85,
    },
    {
      id: "4.4",
      parent: "3.9",
      name: "Mariposas",
      value: 151,
      especies: 25,
    },
    {
      id: "4.5",
      parent: "3.9",
      name: "ArÃ¡cnidos",
      value: 127,
      especies: 18,
    },
    {
      id: "4.6",
      parent: "2.1",
      name: "Moluscos",
      value: 12577,
      especies: 1169,
    },
    {
      id: "4.7",
      parent: "2.1",
      name: "DecÃ¡podos",
      value: 10638,
      especies: 695,
    },
    {
      id: "4.8",
      parent: "2.1",
      name: "CrustÃ¡ceos",
      value: 15354,
      especies: 873,
    },
    {
      id: "4.9",
      parent: "2.1",
      name: "Corales",
      value: 124296,
      especies: 134,
    },
    {
      id: "4.10",
      parent: "2.1",
      name: "Medusas",
      value: 8960,
      especies: 65,
    },
    {
      id: "4.11",
      parent: "2.1",
      name: "Esponjas",
      value: 14275,
      especies: 179,
    },
    {
      id: "2.2",
      parent: "1.1",
      name: "Angiospermas",
      value: 8928,
      especies: 879,
    },
    {
      id: "2.3",
      parent: "1.1",
      name: "Gimnospermas",
      value: 1,
      especies: 1,
    },
    {
      id: "2.4",
      parent: "1.1",
      name: "Frailejones",
      value: null,
      especies: null,
    },
    {
      id: "2.5",
      parent: "1.1",
      name: "Musgos",
      value: 2,
      especies: 2,
    },
    {
      id: "2.6",
      parent: "1.1",
      name: "EpÃ­fitas",
      value: 55,
      especies: 25,
    },
    {
      id: "2.7",
      parent: "1.1",
      name: "Helechos",
      value: 13,
      especies: 9,
    },
    {
      id: "2.8",
      parent: "1.1",
      name: "OrquÃ­deas",
      value: 12,
      especies: 8,
    },
    {
      id: "2.9",
      parent: "1.1",
      name: "HepÃ¡ticas",
      value: 6,
      especies: 4,
    },
    {
      id: "2.10",
      parent: "1.1",
      name: "Bromelias - Labiadas - Pasifloras",
      value: 133,
      especies: 31,
    },
    {
      id: "2.11",
      parent: "1.1",
      name: "FanerÃ³gamas",
      value: 66,
      especies: 7,
    },
    {
      id: "2.12",
      parent: "1.1",
      name: "Palmas",
      value: 66,
      especies: 10,
    },
    {
      id: "2.13",
      parent: "1.1",
      name: "Magnolias",
      value: 1,
      especies: 1,
    },
    {
      id: "2.14",
      parent: "1.1",
      name: "Zamias",
      value: null,
      especies: null,
    },
    {
      id: "2.15",
      parent: "1.1",
      name: "Mangles",
      value: 2287,
      especies: 5,
    },
    {
      id: "2.16",
      parent: "1.1",
      name: "Pastos marinos",
      value: 2063,
      especies: 3,
    },
    {
      id: "2.17",
      parent: "1.1",
      name: "Algas",
      value: 59948,
      especies: 309,
    },
    {
      id: "2.18",
      parent: "1.1",
      name: "LÃ­quenes",
      value: 7,
      especies: 4,
    },
  ];

  createChart2(datas);
}

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
          // Determinar si usar block o flex segÃºn el grupo
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
      // Determinar si usar block o flex segÃºn el grupo
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
        contentGroup.getAttribute("data-tab-content-group") === "grupo3"
      ) {
        return "flex";
      }

      // Si se proporciona el grupo como parÃ¡metro, verificar tambiÃ©n
      if (group === "grupo3") {
        return "flex";
      }

      // Por defecto usar block
      return "block";
    },
  };

  // Inicializar el sistema de tabs
  GlobalTabs.init();
});

const contenido2Grafica1 = document.getElementById(
  "ficha-101-contenido2-grafica1"
);
if (contenido2Grafica1) {
  // Datos en formato JSON - SIN columna "Total" y SIN fila "Total de especies amenazadas"
  const chartData = {
    categories: {
      xAxis: ["Animales", "Plantas", "Hongos", "Total Caribe Continental"],
      yAxis: [
        "Especies amenazadas total",
        "Especies Amenazadas VU",
        "Especies Amenazadas EN",
        "Especies Amenazadas CR",
      ],
    },
    series: [
      {
        name: "Especies amenazadas total",
        color: "#ffffff00",
        data: [
          { x: 0, y: 0, z: 195, name: "Animales" },
          { x: 1, y: 0, z: 130, name: "Plantas" },
          { x: 2, y: 0, z: 5, name: "Hongos" },
          { x: 3, y: 0, z: 330, name: "Caribe" },
        ],
      },
      {
        name: "Especies Amenazadas (VU)",
        color: "#E9C101",
        data: [
          { x: 0, y: 1, z: 112, name: "Animales" },
          { x: 1, y: 1, z: 53, name: "Plantas" },
          { x: 2, y: 1, z: 0, name: "Hongos" },
          { x: 3, y: 1, z: 165, name: "Caribe" },
        ],
      },
      {
        name: "Especies Amenazadas (EN)",
        color: "#F59C00",
        data: [
          { x: 0, y: 2, z: 60, name: "Animales" },
          { x: 1, y: 2, z: 59, name: "Plantas" },
          { x: 2, y: 2, z: 1, name: "Hongos" },
          { x: 3, y: 2, z: 120, name: "Caribe" },
        ],
      },
      {
        name: "Especies Amenazadas (CR)",
        color: "#D50000",
        data: [
          { x: 0, y: 3, z: 23, name: "Animales" },
          { x: 1, y: 3, z: 18, name: "Plantas" },
          { x: 2, y: 3, z: 4, name: "Hongos" },
          { x: 3, y: 3, z: 45, name: "Caribe" },
        ],
      },
    ],
  };

  // ConfiguraciÃ³n del grÃ¡fico
  Highcharts.chart("ficha-101-contenido2-grafica1", {
    chart: {
      type: "bubble",
      plotBorderWidth: 0,
      zooming: {
        type: "xy",
      },
      style: {
        fontFamily: "rubik, sans-serif",
        color: "#000",
      },
      height: 650,
    },

    title: {
      text: null,
    },

    xAxis: {
      gridLineWidth: 1,
      categories: chartData.categories.xAxis,
      title: {
        text: null,
      },
      accessibility: {
        rangeDescription:
          "CategorÃ­as: " + chartData.categories.xAxis.join(", "),
      },
      opposite: true,
      lineWidth: 1,
      labels: {
        style: {
          color: "#000000",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },

    yAxis: {
      startOnTick: false,
      useHTML: true,
      endOnTick: false,
      categories: chartData.categories.yAxis,
      title: {
        text: null,
      },
      accessibility: {
        rangeDescription: "Niveles: " + chartData.categories.yAxis.join(", "),
      },
      gridLineWidth: 1,
      min: -0.5,
      max: 3.5, // Actualizado porque ahora tenemos 4 categorÃ­as en lugar de 5
      plotLines: chartData.categories.yAxis.map((_, index) => ({
        color: "#666666",
        width: 1,
        value: index,
        dashStyle: "dash",
        zIndex: 5,
      })),
      labels: {
        useHTML: true,
        formatter: function () {
          const index = this.pos;
          let label = chartData.categories.yAxis[index];

          if (index === 1) {
            // VU ahora estÃ¡ en posiciÃ³n 1
            return 'Especies Amenazadas <span style="color: #fff; background:#E9C101; font-weight: bold; border-radius:50%; padding: 8px;">VU</span>';
          } else if (index === 2) {
            // EN ahora estÃ¡ en posiciÃ³n 2
            return 'Especies Amenazadas <span style="color: #fff; background:#F59C00; font-weight: bold; border-radius:50%; padding: 8px;">EN</span>';
          } else if (index === 3) {
            // CR ahora estÃ¡ en posiciÃ³n 3
            return 'Especies Amenazadas <span style="color: #fff; background:#D50000; font-weight: bold; border-radius:50%; padding: 8px;">CR</span>';
          } else {
            return label;
          }
        },
        style: {
          color: "#333333",
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 0",
        },
      },
    },

    tooltip: {
      useHTML: true,
      headerFormat:
        '<div style="font-weight: bold; margin-bottom: 5px; color: #000">{point.series.name}</div>',
      pointFormat:
        '<div style="margin: 3px 0; color: #000">' +
        '<span style="font-weight: bold; color: #000">CategorÃ­a:</br></span> {point.xCategory}<br/>' +
        '<span style="font-weight: bold; color: #000">Nivel de amenaza:</br></span> {point.yCategory}<br/>' +
        '<span style="font-weight: bold; color: #000">Cantidad:</br></span> {point.z} especies<br/>' +
        '<span style="font-weight: bold; color: #000">Nombre:</br></span> {point.name}' +
        "</div>",
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderColor: "#cccccc",
      borderRadius: 5,
      shadow: true,
    },

    series: chartData.series.map((series) => ({
      name: series.name,
      data: series.data.map((point) => ({
        ...point,
        xCategory: chartData.categories.xAxis[point.x],
        yCategory: chartData.categories.yAxis[point.y],
      })),
      marker: {
        fillColor: {
          radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
          stops: [
            [0, "rgba(255,255,255,0.8)"],
            [1, series.color],
          ],
        },
        lineColor: series.color,
        lineWidth: 1,
      },
    })),

    plotOptions: {
      bubble: {
        minSize: 30,
        maxSize: 130,
        dataLabels: {
          enabled: true,
          format: "{point.z}",
          style: {
            color: "contrast",
            textOutline: "none",
            fontWeight: "bold",
          },
        },
      },
    },

    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      borderWidth: 1,
      itemStyle: {
        fontFamily: "rubik, sans-serif",
      },
    },
  });

  // Segundo grÃ¡fico - tambiÃ©n actualizado sin "Total" y sin "Total de especies amenazadas"
  const chartData2 = {
    categories: {
      xAxis: ["Animales", "Plantas", "Hongos", "Total Caribe"],
      yAxis: [
        "Especies amenazadas total",
        "Especies Amenazadas VU",
        "Especies Amenazadas EN",
        "Especies Amenazadas CR",
      ],
    },
    series: [
      {
        name: "Especies amenazadas total",
        color: "#ffffff00",
        data: [
          { x: 0, y: 0, z: 120, name: "Animales" },
          { x: 1, y: 0, z: 11, name: "Plantas" },
          { x: 2, y: 0, z: 0, name: "Hongos" },
          { x: 3, y: 0, z: 131, name: "Total Caribe" },
        ],
      },
      {
        name: "Especies Amenazadas (VU)",
        color: "#E9C101",
        data: [
          { x: 0, y: 1, z: 76, name: "Animales" },
          { x: 1, y: 1, z: 4, name: "Plantas" },
          { x: 2, y: 1, z: 0, name: "Hongos" },
          { x: 3, y: 1, z: 80, name: "Total Caribe" },
        ],
      },
      {
        name: "Especies Amenazadas (EN)",
        color: "#F59C00",
        data: [
          { x: 0, y: 2, z: 28, name: "Animales" },
          { x: 1, y: 2, z: 5, name: "Plantas" },
          { x: 2, y: 2, z: 0, name: "Hongos" },
          { x: 3, y: 2, z: 33, name: "Total Caribe" },
        ],
      },
      {
        name: "Especies Amenazadas (CR)",
        color: "#D50000",
        data: [
          { x: 0, y: 3, z: 16, name: "Animales" },
          { x: 1, y: 3, z: 2, name: "Plantas" },
          { x: 2, y: 3, z: 0, name: "Hongos" },
          { x: 3, y: 3, z: 18, name: "Total Caribe" },
        ],
      },
    ],
  };

  Highcharts.chart("ficha-101-contenido2-grafica2", {
    chart: {
      type: "bubble",
      plotBorderWidth: 0,
      zooming: {
        type: "xy",
      },
      style: {
        fontFamily: "rubik, sans-serif",
        color: "#000",
      },
      height: 650,
    },

    title: {
      text: null,
    },

    xAxis: {
      gridLineWidth: 1,
      categories: chartData2.categories.xAxis,
      title: {
        text: null,
      },
      accessibility: {
        rangeDescription:
          "CategorÃ­as: " + chartData2.categories.xAxis.join(", "),
      },
      opposite: true,
      lineWidth: 1,
      labels: {
        style: {
          color: "#000000",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },

    yAxis: {
      startOnTick: false,
      useHTML: true,
      endOnTick: false,
      categories: chartData2.categories.yAxis,
      title: {
        text: null,
      },
      accessibility: {
        rangeDescription: "Niveles: " + chartData2.categories.yAxis.join(", "),
      },
      gridLineWidth: 1,
      min: -0.5,
      max: 3.5, // Actualizado porque ahora tenemos 4 categorÃ­as en lugar de 5
      plotLines: chartData2.categories.yAxis.map((_, index) => ({
        color: "#666666",
        width: 1,
        value: index,
        dashStyle: "dash",
        zIndex: 5,
      })),
      labels: {
        useHTML: true,
        formatter: function () {
          const index = this.pos;
          let label = chartData2.categories.yAxis[index];

          if (index === 1) {
            // VU ahora estÃ¡ en posiciÃ³n 1
            return 'Especies Amenazadas <span style="color: #fff; background:#E9C101; font-weight: bold; border-radius:50%; padding: 10px;">VU</span>';
          } else if (index === 2) {
            // EN ahora estÃ¡ en posiciÃ³n 2
            return 'Especies Amenazadas <span style="color: #fff; background:#F59C00; font-weight: bold; border-radius:50%; padding: 10px;">EN</span>';
          } else if (index === 3) {
            // CR ahora estÃ¡ en posiciÃ³n 3
            return 'Especies Amenazadas <span style="color: #fff; background:#D50000; font-weight: bold; border-radius:50%; padding: 10px;">CR</span>';
          } else {
            return label;
          }
        },
        style: {
          color: "#333333",
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 0",
        },
      },
    },

    tooltip: {
      useHTML: true,
      headerFormat:
        '<div style="font-weight: bold; margin-bottom: 5px; color: #000">{point.series.name}</div>',
      pointFormat:
        '<div style="margin: 3px 0; color: #000">' +
        '<span style="font-weight: bold; color: #000">CategorÃ­a:</br></span> {point.xCategory}<br/>' +
        '<span style="font-weight: bold; color: #000">Nivel de amenaza:</br></span> {point.yCategory}<br/>' +
        '<span style="font-weight: bold; color: #000">Cantidad:</br></span> {point.z} especies<br/>' +
        '<span style="font-weight: bold; color: #000">Nombre:</br></span> {point.name}' +
        "</div>",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderColor: "#cccccc",
      borderRadius: 5,
      shadow: true,
    },

    series: chartData2.series.map((series) => ({
      name: series.name,
      data: series.data.map((point) => ({
        ...point,
        xCategory: chartData2.categories.xAxis[point.x],
        yCategory: chartData2.categories.yAxis[point.y],
      })),
      marker: {
        fillColor: {
          radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
          stops: [
            [0, "rgba(255,255,255,0.8)"],
            [1, series.color],
          ],
        },
        lineColor: series.color,
        lineWidth: 1,
      },
    })),

    plotOptions: {
      bubble: {
        minSize: 30,
        maxSize: 130,
        dataLabels: {
          enabled: true,
          format: "{point.z}",
          style: {
            color: "contrast",
            textOutline: "none",
            fontWeight: "bold",
          },
        },
      },
    },

    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      borderWidth: 1,
      itemStyle: {
        fontFamily: "rubik, sans-serif",
      },
    },
  });
}

// Contenido 4
const sociosContenido4Grafica1 = document.getElementById("socios");
if (sociosContenido4Grafica1) {
  Highcharts.chart("socios", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: "100%",
      backgroundColor: "transparent",
      type: "pie",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    title: {
      text: "NÃºmero de socios",
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
        '<span style="color:{point.color}">â</span> {point.name}<br/>' +
        "Cantidad: <b>{point.y}</b><br/>" +
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
      enabled: false,
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
        name: "CategorÃ­as",
        colorByPoint: true,
        borderColor: "#ffffff",
        borderWidth: 1,
        data: [
          {
            name: "CONTINENTAL",
            y: 215,
            sliced: false,
            selected: true,
            color: "#96C643",
          },
          {
            name: "MARINA",
            y: 135,
            color: "#00748B",
          },
        ],
      },
    ],
  });

  Highcharts.chart("observaciones", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: "100%",
      backgroundColor: "transparent",
      type: "pie",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    title: {
      text: "NÃºmero de observaciones",
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
        '<span style="color:{point.color}">â</span> {point.name}<br/>' +
        "Cantidad: <b>{point.y}</b><br/>" +
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
      enabled: false,
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
        name: "CategorÃ­as",
        borderColor: "#ffffff",
        borderWidth: 1,
        colorByPoint: true,

        data: [
          {
            name: "CONTINENTAL",
            y: 134595,
            sliced: false,
            selected: true,
            color: "#96C643",
          },
          {
            name: "MARINA",
            y: 39692,
            color: "#00748B",
          },
        ],
      },
    ],
  });
}

// Contenido 5

const contenido5 = document.getElementById("organizaciones-nacionales_socios");
if (contenido5) {
  // ConfiguraciÃ³n comÃºn para ambos grÃ¡ficos
  const commonConfig = {
    chart: {
      type: "pie",
      backgroundColor: "none",
      height: "100%",
      spacing: [0, 20, 20, 20], // AumentÃ© el spacing superior para los tÃ­tulos
      margin: [0, 0, 0, 0],
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      pointFormat:
        "{point.name}: <b>{point.cantidad}</b> ({point.percentage:.1f}%)",
      style: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
    },
    title: {
      align: "center",
      verticalAlign: "top",
      style: {
        color: "#000000", // Color negro para los tÃ­tulos
        fontWeight: "bold",
        fontSize: "24px",
        fontFamily: "Rubik, sans-serif",
      },
      margin: 30, // Margen adicional para separar del grÃ¡fico
      y: 20, // PosiciÃ³n vertical del tÃ­tulo
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 8,
        size: "85%", // Reducido ligeramente para dar espacio al tÃ­tulo
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
      pie: {
        size: "90%", // Reducido para dar mÃ¡s espacio al tÃ­tulo
        center: ["50%", "55%"], // Centrado verticalmente para compensar el tÃ­tulo
      },
    },
  };

  // Datos comunes para la leyenda
  const categories = [
    { name: "Academia", color: "#1C2445" },
    { name: "Autoridades ambientales", color: "#79AB2B" },
    { name: "Centros de investigaciÃ³n", color: "#692940" },
    { name: "Empresas", color: "#F59C00" },
    { name: "Entidades territoriales", color: "#FC7268" },
    { name: "ONG", color: "#75C8DA" },
    { name: "Redes e iniciativas", color: "#E9C101" },
  ];

  // Primer grÃ¡fico - Socios
  Highcharts.chart(
    "organizaciones-nacionales_socios",
    Highcharts.merge(commonConfig, {
      title: {
        text: "NÃºmero de socios",
      },
      series: [
        {
          name: "Socios",
          colorByPoint: true,
          innerSize: "60%",
          data: categories.map((cat, index) => ({
            name: cat.name,
            y: [33, 4, 11, 27, 1, 20, 8][index],
            cantidad: [33, 4, 11, 27, 1, 20, 8][index],
            color: cat.color,
          })),
        },
      ],
    })
  );

  // Segundo grÃ¡fico - Observaciones
  Highcharts.chart(
    "organizaciones-nacionales_observaciones",
    Highcharts.merge(commonConfig, {
      title: {
        text: "NÃºmero de observaciones",
      },
      series: [
        {
          name: "Observaciones",
          colorByPoint: true,
          innerSize: "60%",
          data: categories.map((cat, index) => ({
            name: cat.name,
            y: [181072, 44552, 2138185, 818721, 14, 79728, 2366733][index],
            cantidad: [181072, 44552, 2138185, 818721, 14, 79728, 2366733][
              index
            ],
            color: cat.color,
          })),
        },
      ],
    })
  );

  // tercer grÃ¡fico - Socios MARINA
  Highcharts.chart(
    "marina-organizaciones-nacionales_socios",
    Highcharts.merge(commonConfig, {
      title: {
        text: "NÃºmero de socios",
      },
      series: [
        {
          name: "Socios",
          colorByPoint: true,
          innerSize: "60%",
          data: categories.map((cat, index) => ({
            name: cat.name,
            y: [24, 3, 7, 11, 4, 11, 5][index], // Datos de socios MARINA
            cantidad: [24, 3, 7, 11, 4, 11, 5][index],
            color: cat.color,
          })),
        },
      ],
    })
  );

  // cuarto grÃ¡fico - Observaciones MARINA
  Highcharts.chart(
    "marina-organizaciones-nacionales_observaciones",
    Highcharts.merge(commonConfig, {
      title: {
        text: "NÃºmero de observaciones",
      },
      series: [
        {
          name: "Observaciones",
          colorByPoint: true,
          innerSize: "60%",
          data: categories.map((cat, index) => ({
            name: cat.name,
            y: [31348, 3707, 341245, 18075, 1284, 3452, 119013][index], // Datos de observaciones MARINA
            cantidad: [31348, 3707, 341245, 18075, 1284, 3452, 119013][index],
            color: cat.color,
          })),
        },
      ],
    })
  );

  // Crear leyenda compartida externa
  function createSharedLegend() {
    const legendContainer = document.createElement("div");
    legendContainer.className = "shared-legend";
    legendContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin: 20px 0;
    padding: 15px;
  `;

    categories.forEach((cat) => {
      const legendItem = document.createElement("div");
      legendItem.className = "legend-item";
      legendItem.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Rubik', sans-serif;
      font-size: 14px;
      color: #000;
    `;

      const colorBox = document.createElement("div");
      colorBox.style.cssText = `
      width: 16px;
      height: 16px;
      background-color: ${cat.color};
      border-radius: 3px;
    `;

      const text = document.createElement("span");
      text.textContent = cat.name;

      legendItem.appendChild(colorBox);
      legendItem.appendChild(text);
      legendContainer.appendChild(legendItem);
    });

    // Insertar la leyenda donde la necesites
    // Por ejemplo, despuÃ©s del contenedor de grÃ¡ficos
    const chartsContainer = document.querySelector(".tab-content"); // Ajusta este selector
    if (chartsContainer) {
      chartsContainer.parentNode.insertBefore(
        legendContainer,
        chartsContainer.nextSibling
      );
    }
  }

  // Llamar la funciÃ³n despuÃ©s de que se carguen los grÃ¡ficos
  setTimeout(createSharedLegend, 100);
}

// Contenido 6 - Ranking de organizaciones
const contenido6 = document.getElementById("data-table-marina");
if (contenido6) {
  // Datos de organizaciones continentales (del Excel)
  const dataContinental = [
    ["Universidad Nacional de Colombia", 4118, 26819, "Academia"],
    [
      "Instituto de InvestigaciÃ³n de Recursos BiolÃ³gicos Alexander von Humboldt",
      3733,
      110031,
      "Centros de investigaciÃ³n",
    ],
    ["Naturalista Colombia", 3620, 53530, "Redes e iniciativas"],
    ['JardÃ­n BotÃ¡nico de Cartagena "Guillermo PiÃ±eres"', 2005, 14980, "ONG"],
    ["Universidad de Antioquia", 1771, 17562, "Academia"],
    ["Carbones del CerrejÃ³n Limited", 1262, 135277, "Empresas"],
    ["Promigas S.A E.S.P", 1217, 182883, "Empresas"],
    ["Universidad del Magdalena", 1150, 95406, "Academia"],
    ["eBird Colombia", 944, 2215425, "Redes e iniciativas"],
    ["ISA INTERCOLOMBIA S.A E.S.P", 910, 179470, "Empresas"],
  ];

  // Datos de organizaciones marinas (del Excel)
  const dataMarina = [
    [
      "Instituto de Investigaciones Marinas y Costeras - Invemar",
      2599,
      329218,
      "Centros de investigaciÃ³n",
    ],
    ["Universidad Nacional de Colombia", 1241, 8858, "Academia"],
    ["Naturalista Colombia", 955, 5059, "Redes e iniciativas"],
    ["eBird Colombia", 523, 74392, "Redes e iniciativas"],
    [
      "Red Nacional de Observadores de Aves - RNOA",
      490,
      39438,
      "Redes e iniciativas",
    ],
    [
      "Instituto de InvestigaciÃ³n de Recursos BiolÃ³gicos Alexander von Humboldt",
      444,
      5645,
      "Centros de investigaciÃ³n",
    ],
    ["Universidad del Valle", 425, 1278, "Academia"],
    ["Universidad de Antioquia", 423, 4354, "Academia"],
    ["Universidad del Magdalena", 300, 6359, "Academia"],
    ['JardÃ­n BotÃ¡nico de Cartagena "Guillermo PiÃ±eres"', 263, 993, "ONG"],
  ];

  // FunciÃ³n para formatear nÃºmeros con separadores de miles
  function formatearNumero(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Estado de orden por columna y por tabla
  const sortState = {
    continental: [null, null, null, null],
    marina: [null, null, null, null],
  };

  // FunciÃ³n para ordenar la tabla
  function sortTable(columnIndex, tableType) {
    const tableId = `data-table-${tableType}`;
    const table = document.getElementById(tableId);
    const tbody = table.tBodies[0] || table;
    const rows = Array.from(tbody.querySelectorAll("tr"));

    // Determinar direcciÃ³n
    if (
      typeof sortState[tableType][columnIndex] === "undefined" ||
      sortState[tableType][columnIndex] === null
    ) {
      // Para columnas numÃ©ricas (1 y 2), orden descendente por defecto
      sortState[tableType][columnIndex] =
        columnIndex === 1 || columnIndex === 2 ? false : true;
    }
    const asc = sortState[tableType][columnIndex];

    rows.sort((a, b) => {
      const aCell = a.getElementsByTagName("td")[columnIndex];
      const bCell = b.getElementsByTagName("td")[columnIndex];
      const aValue = aCell ? aCell.textContent.trim() : "";
      const bValue = bCell ? bCell.textContent.trim() : "";

      if (columnIndex === 1 || columnIndex === 2) {
        // Columnas numÃ©ricas (NÃºmero de especies y observaciones)
        const na = parseInt(aValue.replace(/\./g, "")) || 0;
        const nb = parseInt(bValue.replace(/\./g, "")) || 0;
        return asc ? na - nb : nb - na;
      }
      // Columnas de texto (OrganizaciÃ³n y Tipo)
      return asc
        ? aValue.localeCompare(bValue, undefined, { sensitivity: "base" })
        : bValue.localeCompare(aValue, undefined, { sensitivity: "base" });
    });

    // Reinsertar en tbody
    rows.forEach((row) => tbody.appendChild(row));

    // Alternar estado para prÃ³ximos clicks
    sortState[tableType][columnIndex] = !asc;

    // Actualizar indicadores visuales
    updateSortIndicators(table, columnIndex, asc);
  }

  // FunciÃ³n para actualizar indicadores visuales de ordenamiento
  function updateSortIndicators(table, columnIndex, asc) {
    const ths = table.querySelectorAll("th");
    ths.forEach((th, idx) => {
      th.classList.toggle("active", idx === columnIndex);

      if (!th.querySelector(".caret")) {
        const span = document.createElement("span");
        span.className = "caret";
        th.appendChild(span);
      }

      const caret = th.querySelector(".caret");
      if (idx === columnIndex) {
        caret.textContent = asc ? "â²" : "â¼";
        caret.style.display = "inline";
      } else {
        caret.textContent = "â¾";
        caret.style.display = "none";
      }
    });
  }

  // FunciÃ³n para cargar datos en una tabla
  function loadTableData(tableId, data) {
    const tableBody = document
      .getElementById(tableId)
      .getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Limpiar tabla

    // Encontrar mÃ¡ximo de especies para la barra de progreso
    const maxEspecies = Math.max(...data.map((row) => row[1]));
    // Encontrar mÃ¡ximo de observaciones para la barra de progreso
    const maxObservaciones = Math.max(...data.map((row) => row[2]));

    data.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell, idx) => {
        const td = document.createElement("td");

        if (idx === 1) {
          // Columna de nÃºmero de especies - mostrar con barra
          td.className = "especies";
          td.setAttribute("data-value", cell);

          const val = document.createElement("div");
          val.className = "value";
          val.textContent = formatearNumero(cell);

          const bar = document.createElement("div");
          bar.className = "bar";
          const span = document.createElement("span");
          const pct = Math.round((cell / maxEspecies) * 100);
          span.style.width = pct + "%";
          bar.appendChild(span);

          td.appendChild(val);
          td.appendChild(bar);
        } else if (idx === 2) {
          // Columna de observaciones - mostrar con barra naranja
          td.className = "observaciones";
          td.setAttribute("data-value", cell);

          const val = document.createElement("div");
          val.className = "value";
          val.textContent = formatearNumero(cell);

          const bar = document.createElement("div");
          bar.className = "bar bar-observaciones";
          const span = document.createElement("span");
          const pct = Math.round((cell / maxObservaciones) * 100);
          span.style.width = pct + "%";
          bar.appendChild(span);

          td.appendChild(val);
          td.appendChild(bar);
        } else {
          // Columnas de texto
          td.textContent = cell;
        }

        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });

    // Inicializar indicadores de ordenamiento
    const table = document.getElementById(tableId);
    const ths = table.querySelectorAll("th");
    ths.forEach((th, idx) => {
      if (!th.querySelector(".caret")) {
        const span = document.createElement("span");
        span.className = "caret";
        span.style.display = "none";
        th.appendChild(span);
      }
    });
  }

  // Cargar datos iniciales
  loadTableData("data-table-continental", dataContinental);
  loadTableData("data-table-marina", dataMarina);


}
