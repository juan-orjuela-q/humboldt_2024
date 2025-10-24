document.addEventListener("DOMContentLoaded", function () {
  //contenido 1
  Highcharts.addEvent(Highcharts.Series, "addPoint", (e) => {
    const point = e.point,
      series = e.target;

    if (!series.pulse) {
      series.pulse = series.chart.renderer.circle().add(series.markerGroup);
    }
    setTimeout(() => {
      series.pulse
        .attr({
          x: series.xAxis.toPixels(point.x, true),
          y: series.yAxis.toPixels(point.y, true),
          r: series.options.marker.radius,
          opacity: 1,
          fill: series.color,
        })
        .animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1000,
          }
        );
    }, 1);
  });

  Highcharts.chart("container", {
    chart: {
      type: "line",
      margin: [70, 50, 60, 80],
      backgroundColor: "transparent",
      style: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
        color: "#000000",
      },
      events: {
        click: function (e) {
          // find the clicked values and the series
          const x = Math.round(e.xAxis[0].value),
            y = Math.round(e.yAxis[0].value),
            series = this.series[0];

          // Add it
          series.addPoint([x, y]);
        },
      },
    },
    title: {
      text: null,
      align: "left",
      style: {
        color: "#000000",
        fontSize: "16px",
        fontFamily: "Rubik, sans-serif",
      },
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      title: {
        text: "Temperatura Ambiental (°C)",
        style: {
          fontSize: "16px",
          fontFamily: "Rubik, sans-serif",
          color: "#000000",
          fontWeight: "bold",
        },
      },
      gridLineWidth: 0,
      min: 25,
      max: 50,
      minPadding: 0.1,
      maxPadding: 0.1,
      labels: {
        style: {
          fontSize: "14px",
          fontFamily: "Rubik, sans-serif",
          color: "#000000",
        },
      },
    },
    yAxis: {
      title: {
        text: "Temperatura Interna del ave (°C)",
        style: {
          fontSize: "16px",
          fontFamily: "Rubik, sans-serif",
          color: "#000000",
          fontWeight: "bold",
        },
      },
      gridLineWidth: 0,
      min: 35,
      max: 50,
      minPadding: 0.1,
      maxPadding: 0.1,
      labels: {
        style: {
          fontSize: "14px",
          fontFamily: "Rubik, sans-serif",
          color: "#000000",
        },
      },
      plotLines: [
        {
          color: "#d3d3d3",
          width: 60,
          value: 47,
          zIndex: 0,
          label: {
            text: "Zona de temperatura letal",
            align: "left",
            style: {
              color: "#000000",
              fontSize: "14px",
              fontFamily: "Rubik, sans-serif",
              fontWeight: "bold",
            },
            y: 0,
          },
        },
      ],
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "top",
      layout: "horizontal",
      itemStyle: {
        fontSize: "14px",
        fontFamily: "Rubik, sans-serif",
        color: "#000000",
      },
      itemHoverStyle: {
        color: "#000000",
      },
    },
    exporting: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      borderColor: "#CCCCCC",
      style: {
        fontSize: "14px",
        fontFamily: "Rubik, sans-serif",
        color: "#000000",
      },
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
        tooltip: {
          headerFormat:
            '<b style="font-size: 14px; color: #000000; font-family: Rubik, sans-serif">{series.name}</b><br>',
          pointFormat:
            '<span style="color: #000000; font-family: Rubik, sans-serif">Regresión lineal</span>',
          style: {
            fontSize: "14px",
            fontFamily: "Rubik, sans-serif",
            color: "#000000",
          },
        },
      },
    },
    series: [
      {
        name: "Buen regulador",
        type: "line",
        color: "#008493",
        data: [
          [25, 39.45 + 0.08 * 25],
          [50, 39.45 + 0.08 * 50],
        ],
        marker: {
          enabled: false,
        },
      },
      {
        name: "Buen regulador",
        type: "line",
        color: "#008493",
        data: [
          [25, 40.78 + 0.09 * 25],
          [50, 40.78 + 0.09 * 50],
        ],
        marker: {
          enabled: false,
        },
      },
      {
        name: "Mal regulador",
        type: "line",
        color: "#930E14",
        data: [
          [25, 34.06 + 0.24 * 25],
          [50, 34.06 + 0.24 * 50],
        ],
        marker: {
          enabled: false,
        },
      },
      {
        name: "Mal regulador",
        type: "line",
        color: "#930E14",
        data: [
          [25, 28.77 + 0.38 * 25],
          [50, 28.77 + 0.38 * 50],
        ],
        marker: {
          enabled: false,
        },
      },
    ],
  });
});

const contenido2 = document.getElementById("data-table");
if (contenido2) {
  //contenido 2
  const data = [
    ["Campylorhynchus griseus", "Semiabierto", "Matorral", 31.95],
    ["Cnemotriccus fuscatus", "Semiabierto", "Bosque", 17.56],
    ["Coereba flaveola", "Semiabierto", "Matorral", 15.52],
    ["Cyclarhis gujanensis", "Semiabierto", "Bosque", 18.9],
    ["Dendroplex picus", "Semiabierto", "Bosque", 29.31],
    ["Formicivora grisea", "Semiabierto", "Matorral", 16.55],
    ["Forpus passerinus", "Semiabierto", "Bosque abierto", 17.06],
    ["Furnarius leucopus", "Semiabierto", "Matorral", 25.84],
    ["Galbula ruficauda", "Semiabierto", "Bosque", 54.6],
    ["Hypnelus ruficollis", "Semiabierto", "Bosque", 38.61],
    ["Icterus auricapillus", "Semiabierto", "Bosque abierto", 23.29],
    ["Icterus nigrogularis", "Semiabierto", "Bosque abierto", 25.77],
    ["Inezia caudata", "Denso", "Bosque", 14.54],
    ["Leptotila verreauxi", "Denso", "Matorral", 23.56],
    ["Megarynchus pitangua", "Semiabierto", "Bosque abierto", 34.6],
    ["Molothrus bonariensis", "Semiabierto", "Bosque abierto", 25],
    ["Myiarchus tyrannulus", "Semiabierto", "Bosque abierto", 25.33],
    ["Phaeomyias murina", "Semiabierto", "Matorral", 11.96],
    ["Patagioenas cayennensis", "Abierto", "Bosque", 21.8],
    ["Pitangus sulphuratus", "Abierto", "Transformado", 29.54],
    ["Polioptila plumbea", "Semiabierto", "Matorral", 13.1],
    ["Sakesphorus canadensis", "Semiabierto", "Bosque abierto", 22.52],
    ["Saltator striatipectus", "Semiabierto", "Matorral", 23.2],
    ["Sublegatus arenarum", "Semiabierto", "Bosque abierto", 12.39],
    ["Synallaxis candei", "Semiabierto", "Bosque abierto", 17.41],
    ["Tangara glaucocolpa", "Semiabierto", "Bosque", 21.45],
    ["Tyrannus melancholicus", "Abierto", "Transformado", 27.1],
    ["Volatinia jacarina", "Abierto", "Transformado", 12.7],
  ];

  // Función para ordenar la tabla
  // Estado de orden por columna (null = no inicializado, true = asc, false = desc)
  const _sortState = [];
  function sortTable(columnIndex) {
    const table = document.getElementById("data-table");
    const tbody = table.tBodies[0] || table;
    const rows = Array.from(tbody.querySelectorAll("tr"));

    // Determinar dirección: si no está inicializada, para columna numérica (3) queremos desc por defecto
    if (typeof _sortState[columnIndex] === "undefined") {
      _sortState[columnIndex] = columnIndex === 3 ? false : true; // pico -> desc, textos -> asc
    }
    const asc = _sortState[columnIndex];

    rows.sort((a, b) => {
      const aCell = a.getElementsByTagName("td")[columnIndex];
      const bCell = b.getElementsByTagName("td")[columnIndex];
      const aValue = aCell ? aCell.textContent.trim() : "";
      const bValue = bCell ? bCell.textContent.trim() : "";
      if (columnIndex === 3) {
        const na = parseFloat(aValue) || 0;
        const nb = parseFloat(bValue) || 0;
        return asc ? na - nb : nb - na;
      }
      return asc
        ? aValue.localeCompare(bValue, undefined, { sensitivity: "base" })
        : bValue.localeCompare(aValue, undefined, { sensitivity: "base" });
    });

    // Reinsertar en tbody
    rows.forEach((row) => tbody.appendChild(row));

    // Alternar estado para próximos clicks
    _sortState[columnIndex] = !asc;

    // Aplicar clase active al th correspondiente y remover en otros
    const ths = table.querySelectorAll("th");
    ths.forEach((th, idx) => {
      th.classList.toggle("active", idx === columnIndex);
      // agregar caret si no existe
      if (!th.querySelector(".caret")) {
        const span = document.createElement("span");
        span.className = "caret";
        span.textContent = "▾";
        th.appendChild(span);
      }
      const caret = th.querySelector(".caret");
      if (idx === columnIndex) {
        // Mostrar la flecha según la dirección que se acaba de aplicar (asc variable antes de invertir)
        caret.textContent = asc ? "▲" : "▼";
      } else {
        caret.textContent = "▾";
      }
    });
  }

  // Cargar los datos en la tabla
  const tableBody = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];
  // calcular máximo de la columna pico (índice 3)
  const maxPico =
    data.reduce((m, r) => {
      const v = parseFloat(r[3]) || 0;
      return v > m ? v : m;
    }, 0) || 1;

  data.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell, idx) => {
      const td = document.createElement("td");
      if (idx === 3) {
        // pico: crear valor a la izquierda y barra a la derecha
        const value = parseFloat(cell) || 0;
        td.className = "pico";
        td.setAttribute("data-value", value);

        const val = document.createElement("div");
        val.className = "value";
        val.textContent = value.toFixed(1);

        const bar = document.createElement("div");
        bar.className = "bar";
        const span = document.createElement("span");
        const pct = Math.round((value / maxPico) * 100);
        span.style.width = pct + "%";
        bar.appendChild(span);

        // append value first (left), then bar (right, flexible)
        td.appendChild(val);
        td.appendChild(bar);
      } else {
        td.textContent = cell;
      }
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

//Contenido 3
const container = document.getElementById("proporcion-masa");
if (container) {
  Highcharts.chart("proporcion-masa", {
    chart: {
      type: "column",
      backgroundColor: "none",
      height: "90%",
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
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        color: "#00748B",
        dataLabels: {
          enabled: false,
          format: "{point.y:,.1f}",
          style: {
            color: "#000",
            fontFamily: "Rubik, sans-serif",
            fontSize: "14px",
            textOutline: "none",
          },
        },
      },
    },
    tooltip: {
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
      backgroundColor: "#FFFFFF",
      headerFormat:
        '<span style="font-size:11px; color:#000; font-family: Rubik, sans-serif">{series.name}</span><br>',
      pointFormat:
        '<span style="color:#00748B; font-family: Rubik, sans-serif">{point.name}</span>: <b style="color:#000; font-family: Rubik, sans-serif">{point.y}</b><br/>Porcentaje: <b style="color:#000; font-family: Rubik, sans-serif">{point.percentage}</b>',
    },
    series: [
      {
        name: "Distribución de Frecuencias",
        colorByPoint: false,
        data: [
          {
            name: "0-0.1",
            y: 8,
            percentage: "9.5%",
          },
          {
            name: "0.01-0.02",
            y: 14,
            percentage: "16.7%",
          },
          {
            name: "0.02-0.03",
            y: 32,
            percentage: "38.1%",
          },
          {
            name: "0.03-0.04",
            y: 18,
            percentage: "21.4%",
          },
          {
            name: "0.04-0.05",
            y: 8,
            percentage: "9.5%",
          },
          {
            name: "0.05-0.06",
            y: 6,
            percentage: "7.1%",
          },
          {
            name: "0.06-0.07",
            y: 3,
            percentage: "3.6%",
          },
          {
            name: "0.07-0.08",
            y: 2,
            percentage: "2.4%",
          },
          {
            name: "0.07-0.09",
            y: 1,
            percentage: "1.2%",
          },
        ],
      },
    ],
  });
}
