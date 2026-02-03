// Contenido 1
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

//Contenido 2
const container = document.getElementById("proporcion-masa");
if (container) {
  // Función para determinar el alto según el ancho de pantalla
  const getChartHeight = () => {
    return window.innerWidth < 1175 ? "75%" : "90%";
  };

  // Función para verificar si estamos en móvil
  const isMobile = () => {
    return window.innerWidth < 768; // Cambia este valor según tu breakpoint
  };

  Highcharts.chart("proporcion-masa", {
    chart: {
      type: "column",
      backgroundColor: "none",
      height: "100%",
      style: {
        fontFamily: "Rubik, sans-serif",
        color: "#000",
        fontSize: "14px",
      },
    },
    title: {
      text: null,
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
      lineColor: "#000",
      labels: {
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
        },
      },
    },
    yAxis: {
      title: {
        text: null,
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
          fontSize: "14px",
        },
        format: "{value}",
      },
      max: 40,
      gridLineWidth: 0,
      lineColor: "#000",
      lineWidth: 1,
    },
    legend: {
      enabled: false,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
      itemHoverStyle: {
        color: "#00748B",
      },
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        // Cada barra tendrá su propio color
        colors: ["#EC7A44", "#6DC6DA", "#D3FFBE", "#73B273"],
        dataLabels: {
          enabled: true,
          format: "{y}",
          style: {
            color: "#000",
            fontFamily: "Rubik, sans-serif",
            fontSize: window.innerWidth < 768 ? "12px" : "14px", // Tamaño de fuente responsive
            textOutline: "none",
            fontWeight: "bold",
          },
          verticalAlign: "top",
          y: window.innerWidth < 768 ? -20 : -25, // Ajustar posición en móvil
        },
        states: {
          hover: {
            enabled: true,
            brightness: -0.1,
          },
        },
      },
    },
    tooltip: {
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
        zIndex: 9999,
      },
      backgroundColor: "#FFFFFF",
      borderColor: "#ddd",
      borderRadius: 8,
      borderWidth: 1,
      shadow: true,
      useHTML: true,
      headerFormat:
        '<div style="font-size:12px; color:#000; font-weight:bold; margin-bottom:5px;">{series.name}</div>',
      pointFormat:
        '<div style="display:flex; align-items:center; gap:8px;">' +
        '<div style="width:12px; height:12px; background-color:{point.color}; border-radius:2px;"></div>' +
        '<span style="color:#00748B">{point.name}</span>: ' +
        '<b style="color:#000">{point.y}</b>' +
        "</div>",
      positioner: function (labelWidth, labelHeight, point) {
        var tooltipX, tooltipY;
        var chart = this.chart;
        var plotLeft = chart.plotLeft;
        var plotTop = chart.plotTop;
        var plotWidth = chart.plotWidth;

        if (point.plotX + labelWidth > plotWidth) {
          tooltipX = point.plotX + plotLeft - labelWidth - 10;
        } else {
          tooltipX = point.plotX + plotLeft + 30;
        }

        tooltipY = point.plotY + plotTop - labelHeight - 10;

        return {
          x: tooltipX,
          y: tooltipY,
        };
      },
    },
    series: [
      {
        name: "Clase de animal depredado",
        colorByPoint: true,
        data: [
          {
            name: "Cerdo",
            y: 34,
            color: "#EC7A44",
            iconUrl:
              "https://reporte.humboldt.org.co/assets/img/2024/3/301/ficha-301-icono-cerdo.png",
          },
          {
            name: "Carnero",
            y: 27,
            color: "#6DC6DA",
            iconUrl:
              "https://reporte.humboldt.org.co/assets/img/2024/3/301/ficha-301-icono-carnero.png",
          },
          {
            name: "Perro",
            y: 22,
            color: "#D3FFBE",
            iconUrl:
              "https://reporte.humboldt.org.co/assets/img/2024/3/301/ficha-301-icono-perro.png",
          },
          {
            name: "Bovino",
            y: 12,
            color: "#73B273",
            iconUrl:
              "https://reporte.humboldt.org.co/assets/img/2024/3/301/ficha-301-icono-bovino.png",
          },
        ],
      },
    ],
  });
}
