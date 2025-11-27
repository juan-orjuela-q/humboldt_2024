document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("habitat-terrestre", {
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
        "Montano alto - bosque",
        "Montano alto",
        "Montano bajo",
        "Montano",
        "Piedemonte - bosque",
        "Piedemonte",
        "Tierras bajas - abierto",
        "Tierras bajas - borde",
        "Tierras bajas - bosque",
        "Tierras bajas",
        "Tierras bajas - urbano",
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
        text: "Cantidad",
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
        name: "Registros",
        data: [1, 12, 18, 40, 8, 88, 281, 2, 249, 495, 2],
        color: "#7CB5EC",
      },
      {
        name: "Especies",
        data: [1, 4, 14, 10, 7, 22, 35, 2, 45, 85, 2],
        color: "#292991ff",
      },
    ],
  });
  Highcharts.chart("habitat-acuatico", {
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
        "Arroyo",
        "Charca / poza",
        "Ciénaga",
        "Ciénaga / río",
        "Estanque",
        "Otros",
        "Quebrada",
        "Río",
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
        text: "Cantidad",
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
        name: "Registros",
        data: [3, 5, 7, 17, 1, 282, 8, 3],
        color: "#7CB5EC",
      },
      {
        name: "Especies",
        data: [3, 5, 6, 6, 1, 76, 2, 3],
        color: "#292991ff",
      },
    ],
  });
});

// Efecto de animación para las barras de progreso
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Crear tooltip global
  const tooltip = document.createElement("div");
  tooltip.className = "map-tooltip";
  tooltip.style.display = "none";
  document.body.appendChild(tooltip);

  // Obtener todos los puntos del mapa
  const mapPoints = document.querySelectorAll(".map-point");

  // Agregar eventos a cada punto
  mapPoints.forEach((point) => {
    // Evento para mostrar tooltip
    point.addEventListener("mouseenter", function (e) {
      const tooltipText = `${this.getAttribute(
        "data-tooltip"
      )}<br>Registros: ${this.getAttribute(
        "data-registros"
      )}<br>Especies: ${this.getAttribute("data-especies")}`;

      tooltip.innerHTML = tooltipText;
      tooltip.style.display = "block";

      // Posicionar tooltip
      positionTooltip(e, tooltip);
    });

    // Evento para ocultar tooltip
    point.addEventListener("mouseleave", function () {
      tooltip.style.display = "none";
    });

    // Evento para mover tooltip con el cursor
    point.addEventListener("mousemove", function (e) {
      positionTooltip(e, tooltip);
    });
  });

  // Función para posicionar el tooltip
  function positionTooltip(event, tooltipElement) {
    const x = event.pageX + 10;
    const y = event.pageY - 10;

    tooltipElement.style.left = x + "px";
    tooltipElement.style.top = y + "px";

    // Ajustar si el tooltip se sale de la pantalla
    const tooltipRect = tooltipElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (tooltipRect.right > viewportWidth) {
      tooltipElement.style.left = event.pageX - tooltipRect.width - 10 + "px";
    }

    if (tooltipRect.bottom > viewportHeight) {
      tooltipElement.style.top = event.pageY - tooltipRect.height - 10 + "px";
    }
  }
});
