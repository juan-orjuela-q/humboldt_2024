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
});


// Contenido 2
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
      text: null,
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      categories: [
        "Bolívar",
        "Córdoba",
        "Magdalena",
        "Cesar",
        "La Guajira",
        "Sucre",
        "Atlántico",
      ],
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
      title: {
        text: null,
        style: {
          color: "#000",
        },
      },
      labels: {
        style: {
          color: "#000",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
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
      },
    },
    legend: {
      itemStyle: {
        color: "#000",
      },
    },
    series: [
      {
        name: "Actual",
        data: [3147, 3456, 1796, 3151, 2668, 1975, 1285],
        color: "#00748B",
      },
      {
        name: "Escenario tendencial",
        data: [3000, 3263, 1421, 2894, 2490, 1448, 1224],
        color: "#F59C00",
      },
      {
        name: "Escenario pesimista",
        data: [2980, 3301, 1420, 2928, 2458, 1441, 1232],
        color: "#E74C3C",
      },
    ],
  });
}

// Contenido 3
const contenido3 = document.getElementById("tasa-perdida");
if (contenido3) {
  Highcharts.chart("tasa-perdida", {
    chart: {
      type: "column",
      height: 500,
      backgroundColor: "none",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    title: {
      text: null,
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      categories: [
        "Bolívar",
        "Córdoba", 
        "Magdalena",
        "Cesar",
        "La Guajira",
        "Sucre",
        "Atlántico"
      ],
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
      title: {
        text: null,
        style: {
          color: "#000",
        },
      },
      labels: {
        style: {
          color: "#000",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.2f}%</b></td></tr>',
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
      },
    },
    legend: {
      itemStyle: {
        color: "#000",
      },
    },
    series: [
      {
        name: "Escenario tendencial",
        data: [60.68, 46.58, 53.42, 38.64, 57.13, 56.86, 70.87],
        color: "#00748B",
      },
      {
        name: "Escenario pesimista",
        data: [68.17, 48.63, 54.64, 45.78, 61.80, 60.96, 76.42],
        color: "#F59C00",
      }
    ],
  });
}
