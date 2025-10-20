/* contenido 1 */
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

/* contenido 2 */

const container = document.getElementById("barranquilla-graphic");
if (container) {
Highcharts.chart("barranquilla-graphic", {
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
        text: "Expedición científica sobre la biodiversidad funcional en agroecosistemas",
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
        pointFormat: '<span style="color:{point.color}">●</span> {point.name}<br/>' +
                     'Cantidad: <b>{point.y}</b><br/>' +
                     'Porcentaje: <b>{point.percentage:.1f}%</b>',
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
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
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
            name: "Categorías",
            colorByPoint: true,
            data: [
                {
                    name: "Medicinal",
                    y: 1080,
                    sliced: false,
                    selected: true,
                    color: "#3F80EA",
                },
                {
                    name: "Alimentos",
                    y: 585,
                    color: "#E14033",
                },
                {
                    name: "Materiales",
                    y: 412,
                    color: "#F1B504",
                },
                {
                    name: "Usos ambientales",
                    y: 279,
                    color: "#32A150",
                },
                {
                    name: "Alimento de animales",
                    y: 170,
                    color: "#F56901",
                },
                {
                    name: "Cosméticos",
                    y: 157,
                    color: "#43B6BE",
                },
                {
                    name: "Sociales (incluye espiritual y religioso)",
                    y: 110,
                    color: "#76A3ED",
                },
                {
                    name: "Veneno o tóxico",
                    y: 66,
                    color: "#E8796E",
                },
                {
                    name: "Leña o combustible",
                    y: 50,
                    color: "#F2C84C",
                },
            ],
        },
    ],
});

Highcharts.chart("montes-graphic", {
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
        text: "Expedición científica sobre la biodiversidad funcional en agroecosistemas",
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
        pointFormat: '<span style="color:{point.color}">●</span> {point.name}<br/>' +
                     'Cantidad: <b>{point.y}</b><br/>' +
                     'Porcentaje: <b>{point.percentage:.1f}%</b>',
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
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
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
            name: "Categorías",
            colorByPoint: true,
            data: [
                {
                    name: "Medicinal",
                    y: 1080,
                    sliced: false,
                    selected: true,
                    color: "#3F80EA",
                },
                {
                    name: "Alimentos",
                    y: 585,
                    color: "#E14033",
                },
                {
                    name: "Materiales",
                    y: 412,
                    color: "#F1B504",
                },
                {
                    name: "Usos ambientales",
                    y: 279,
                    color: "#32A150",
                },
                {
                    name: "Alimento de animales",
                    y: 170,
                    color: "#F56901",
                },
                {
                    name: "Cosméticos",
                    y: 157,
                    color: "#43B6BE",
                },
                {
                    name: "Sociales (incluye espiritual y religioso)",
                    y: 110,
                    color: "#76A3ED",
                },
                {
                    name: "Veneno o tóxico",
                    y: 66,
                    color: "#E8796E",
                },
                {
                    name: "Leña o combustible",
                    y: 50,
                    color: "#F2C84C",
                },
            ],
        },
    ],
});

Highcharts.chart("becerril-graphic", {
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
        text: "Expedición científica sobre la biodiversidad funcional en agroecosistemas",
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
        pointFormat: '<span style="color:{point.color}">●</span> {point.name}<br/>' +
                     'Cantidad: <b>{point.y}</b><br/>' +
                     'Porcentaje: <b>{point.percentage:.1f}%</b>',
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
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
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
            name: "Categorías",
            colorByPoint: true,
            data: [
                {
                    name: "Medicinal",
                    y: 1080,
                    sliced: false,
                    selected: true,
                    color: "#3F80EA",
                },
                {
                    name: "Alimentos",
                    y: 585,
                    color: "#E14033",
                },
                {
                    name: "Materiales",
                    y: 412,
                    color: "#F1B504",
                },
                {
                    name: "Usos ambientales",
                    y: 279,
                    color: "#32A150",
                },
                {
                    name: "Alimento de animales",
                    y: 170,
                    color: "#F56901",
                },
                {
                    name: "Cosméticos",
                    y: 157,
                    color: "#43B6BE",
                },
                {
                    name: "Sociales (incluye espiritual y religioso)",
                    y: 110,
                    color: "#76A3ED",
                },
                {
                    name: "Veneno o tóxico",
                    y: 66,
                    color: "#E8796E",
                },
                {
                    name: "Leña o combustible",
                    y: 50,
                    color: "#F2C84C",
                },
            ],
        },
    ],
});
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
