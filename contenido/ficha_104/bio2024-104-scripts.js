Highcharts.chart("habitat-terrestre", {
  chart: {
    type: "column",
    height: 500,
    backgroundColor: "#fff",
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
    backgroundColor: "#fff",
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
