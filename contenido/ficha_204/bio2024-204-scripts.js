// Contenido 1
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
        const contenido1 = document.getElementById("temporada-seca");
        if (contenido1) {
          targetElement.style.display = "flex";
        } else {
          targetElement.style.display = "grid";
        }

        targetElement.style.opacity = "0";

        let opacity = 0;
        const fadeIn = setInterval(() => {
          if (opacity >= 1) {
            clearInterval(fadeIn);
          }
          targetElement.style.opacity = opacity.toString();
          opacity += 0.1;
        }, 60);
      }
    });
  });
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
