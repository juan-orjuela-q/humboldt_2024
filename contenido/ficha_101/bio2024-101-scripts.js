const container = document.getElementById("container");
if (container) {
  const createChart = (data) => {
    // Función para formatear números con separadores de miles
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
    return Highcharts.chart("container", {
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
          "En <b>{point.name}</b> el número de registros es <b>{point.value}</b> y el número de especies es <b>{point.especies}</b>.",
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
      name: "Mamíferos",
      value: 56622,
      especies: 246,
    },
    {
      id: "3.3",
      parent: "2.0",
      name: "Mamíferos marinos",
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
      name: "Peces dulceacuícolas",
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
      name: "Dípteros",
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
      name: "Arácnidos",
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
      name: "Decápodos",
      value: 467034,
      especies: 229,
    },
    {
      id: "4.8",
      parent: "2.1",
      name: "Crustáceos",
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
      name: "Epífitas",
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
      name: "Orquídeas",
      value: 1620,
      especies: 246,
    },
    {
      id: "2.9",
      parent: "1.1",
      name: "Hepáticas",
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
      name: "Fanerógamas",
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

  const createChart2 = (data) => {
    // Función para formatear números con separadores de miles
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
    return Highcharts.chart("container2", {
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
          "En <b>{point.name}</b> el número de registros es <b>{point.value}</b> y el número de especies es <b>{point.especies}</b>.",
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
      name: "Mamíferos",
      value: 1656,
      especies: 82,
    },
    {
      id: "3.3",
      parent: "2.0",
      name: "Mamíferos marinos",
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
      name: "Peces dulceacuícolas",
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
      name: "Dípteros",
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
      name: "Arácnidos",
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
      name: "Decápodos",
      value: 10638,
      especies: 695,
    },
    {
      id: "4.8",
      parent: "2.1",
      name: "Crustáceos",
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
      name: "Epífitas",
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
      name: "Orquídeas",
      value: 12,
      especies: 8,
    },
    {
      id: "2.9",
      parent: "1.1",
      name: "Hepáticas",
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
      name: "Fanerógamas",
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
      name: "Líquenes",
      value: 7,
      especies: 4,
    },
  ];

  createChart2(datas);
}
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

const container3 = document.getElementById("container-3");
if (container3) {
  // Datos en formato JSON
  const chartData = {
    categories: {
      xAxis: [
        "Animales",
        "Plantas",
        "Hongos",
        "Total Caribe Continental",
        "Total",
      ],
      yAxis: [
        "Total de especies amenazadas",
        "Especies amenazadas total",
        "Especies Amenazadas VU",
        "Especies Amenazadas EN",
        "Especies Amenazadas CR",
      ],
    },
    series: [
      {
        name: "Total de especies amenazadas",
        color: "#ffffff00",
        data: [
          { x: 0, y: 0, z: 760, name: "Animales" },
          { x: 1, y: 0, z: 1262, name: "Plantas" },
          { x: 2, y: 0, z: 82, name: "Hongos" },
          { x: 3, y: 0, z: null, name: "Caribe" }, // No hay dato en la tabla
          { x: 4, y: 0, z: null, name: "Total" }, // No hay dato en la tabla
        ],
      },
      {
        name: "Especies amenazadas total",
        color: "#ffffff00",
        data: [
          { x: 0, y: 1, z: 195, name: "Animales" },
          { x: 1, y: 1, z: 130, name: "Plantas" },
          { x: 2, y: 1, z: 5, name: "Hongos" },
          { x: 3, y: 1, z: 330, name: "Caribe" },
          { x: 4, y: 1, z: 2104, name: "Total" },
        ],
      },
      {
        name: "Especies Amenazadas (VU)",
        color: "#E9C101",
        data: [
          { x: 0, y: 2, z: 112, name: "Animales" },
          { x: 1, y: 2, z: 53, name: "Plantas" },
          { x: 2, y: 2, z: 0, name: "Hongos" },
          { x: 3, y: 2, z: 165, name: "Caribe" },
          { x: 4, y: 2, z: 838, name: "Total" },
        ],
      },
      {
        name: "Especies Amenazadas (EN)",
        color: "#F59C00",
        data: [
          { x: 0, y: 3, z: 60, name: "Animales" },
          { x: 1, y: 3, z: 59, name: "Plantas" },
          { x: 2, y: 3, z: 1, name: "Hongos" },
          { x: 3, y: 3, z: 120, name: "Caribe" },
          { x: 4, y: 3, z: 800, name: "Total" },
        ],
      },
      {
        name: "Especies Amenazadas (CR)",
        color: "#D50000",
        data: [
          { x: 0, y: 4, z: 23, name: "Animales" },
          { x: 1, y: 4, z: 18, name: "Plantas" },
          { x: 2, y: 4, z: 4, name: "Hongos" },
          { x: 3, y: 4, z: 45, name: "Caribe" },
          { x: 4, y: 4, z: 466, name: "Total" },
        ],
      },
    ],
  };

  // Configuración del gráfico
  Highcharts.chart("container-3", {
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
          "Categorías: " + chartData.categories.xAxis.join(", "),
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
      max: 4.5,
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

          if (index === 2) {
            // VU
            return 'Especies Amenazadas <span style="color: #fff; background:#E9C101; font-weight: bold; border-radius:50%; padding: 8px;">VU</span>';
          } else if (index === 3) {
            // EN
            return 'Especies Amenazadas <span style="color: #fff; background:#F59C00; font-weight: bold; border-radius:50%; padding: 8px;">EN</span>';
          } else if (index === 4) {
            // CR
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
        '<span style="font-weight: bold; color: #000">Categoría:</br></span> {point.xCategory}<br/>' +
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

  const chartData2 = {
    categories: {
      xAxis: ["Animales", "Plantas", "Hongos", "Total Caribe", "Total"],
      yAxis: [
        "Total de especies amenazadas",
        "Especies amenazadas total",
        "Especies Amenazadas VU",
        "Especies Amenazadas EN",
        "Especies Amenazadas CR",
      ],
    },
    series: [
      {
        name: "Total de especies amenazadas",
        color: "#ffffff00",
        data: [
          { x: 0, y: 0, z: 760, name: "Animales" },
          { x: 1, y: 0, z: 1262, name: "Plantas" },
          { x: 2, y: 0, z: 82, name: "Hongos" },
          { x: 3, y: 0, z: null, name: "Total Caribe" }, // No hay dato
          { x: 4, y: 0, z: null, name: "Total" }, // No hay dato
        ],
      },
      {
        name: "Especies amenazadas total",
        color: "#ffffff00",
        data: [
          { x: 0, y: 1, z: 120, name: "Animales" },
          { x: 1, y: 1, z: 11, name: "Plantas" },
          { x: 2, y: 1, z: 0, name: "Hongos" },
          { x: 3, y: 1, z: 131, name: "Total Caribe" },
          { x: 4, y: 1, z: 2104, name: "Total" },
        ],
      },
      {
        name: "Especies Amenazadas (VU)",
        color: "#E9C101",
        data: [
          { x: 0, y: 2, z: 76, name: "Animales" },
          { x: 1, y: 2, z: 4, name: "Plantas" },
          { x: 2, y: 2, z: 0, name: "Hongos" },
          { x: 3, y: 2, z: 80, name: "Total Caribe" },
          { x: 4, y: 2, z: 838, name: "Total" },
        ],
      },
      {
        name: "Especies Amenazadas (EN)",
        color: "#F59C00",
        data: [
          { x: 0, y: 3, z: 28, name: "Animales" },
          { x: 1, y: 3, z: 5, name: "Plantas" },
          { x: 2, y: 3, z: 0, name: "Hongos" },
          { x: 3, y: 3, z: 33, name: "Total Caribe" },
          { x: 4, y: 3, z: 800, name: "Total" },
        ],
      },
      {
        name: "Especies Amenazadas (CR)",
        color: "#D50000",
        data: [
          { x: 0, y: 4, z: 16, name: "Animales" },
          { x: 1, y: 4, z: 2, name: "Plantas" },
          { x: 2, y: 4, z: 0, name: "Hongos" },
          { x: 3, y: 4, z: 18, name: "Total Caribe" },
          { x: 4, y: 4, z: 466, name: "Total" },
        ],
      },
    ],
  };

  Highcharts.chart("container-4", {
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
          "Categorías: " + chartData2.categories.xAxis.join(", "),
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
      max: 4.5,
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

          if (index === 2) {
            // VU
            return 'Especies Amenazadas <span style="color: #fff; background:#E9C101; font-weight: bold; border-radius:50%; padding: 10px;">VU</span>';
          } else if (index === 3) {
            // EN
            return 'Especies Amenazadas <span style="color: #fff; background:#F59C00; font-weight: bold; border-radius:50%; padding: 10px;">EN</span>';
          } else if (index === 4) {
            // CR
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
        '<span style="font-weight: bold; color: #000">Categoría:</br></span> {point.xCategory}<br/>' +
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
