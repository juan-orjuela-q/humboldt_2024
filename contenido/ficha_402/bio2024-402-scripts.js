document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("container", {
    chart: {
      type: "column",
      height: 600,
      backgroundColor: "none",
      style: {
        fontFamily: "'Rubik', sans-serif",
      },
      spacingTop: 50, // Espacio superior para la leyenda
    },
    title: {
      text: null,
      style: {
        color: "#000000",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "bold",
        fontSize: "20px",
      },
    },
    xAxis: {
      categories: [
        "AR-C",
        "OM-Hz",
        "AR-OVL",
        "HM-C",
        "OM-F",
        "HAC-OVL",
        "OM-C",
        "HM-G",
        "HAC-C",
        "AR-G",
        "AR-BI",
        "OM-OVL",
        "HAC-G",
        "AR-W",
        "HM-OVL",
        "LAC-G",
        "HM-W",
        "HAC-BI",
        "HAC-F",
        "AR-Hz",
        "HAC-Hz",
        "AR-F",
        "OM-G",
        "HAC-W",
        "OM-W",
        "OM-BI",
        "HM-F",
      ],
      labels: {
        rotation: -45,
        style: {
          fontSize: "11px",
          fontFamily: "'Rubik', sans-serif",
          color: "#000000",
        },
      },
      title: {
        style: {
          color: "#000000",
          fontFamily: "'Rubik', sans-serif",
        },
      },
      lineColor: "#000000",
      tickColor: "#000000",
    },
    yAxis: {
      title: {
        text: null,
        style: {
          color: "#000000",
          fontFamily: "'Rubik', sans-serif",
        },
      },
      labels: {
        style: {
          color: "#000000",
          fontFamily: "'Rubik', sans-serif",
        },
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "#000000",
        },
      ],
      gridLineColor: "#e0e0e0",
      lineColor: "#000000",
      tickColor: "#000000",
    },
    legend: {
      layout: "vertical", // Horizontal para que esté en una línea
      align: "start", // Centrado horizontalmente
      verticalAlign: "top", // En la parte superior
      x: 0, // Sin margen horizontal
      y: -50, // Posicionado justo arriba del gráfico
      floating: false, // No flotante, fijo en posición
      borderWidth: 0, // Sin borde
      backgroundColor: "none", // Sin fondo
      itemStyle: {
        color: "#000000",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "13px",
      },
      itemHoverStyle: {
        color: "#333333",
      },
      symbolWidth: 20, // Ancho del símbolo
      symbolHeight: 12, // Alto del símbolo
      itemMarginTop: 0, // Sin espacio superior entre elementos
      itemMarginBottom: 0, // Sin espacio inferior
      padding: 5, // Padding interno
      margin: 10, // Margen externo
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        borderRadius: "25%",
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}",
          style: {
            color: "#000000",
            fontFamily: "'Rubik', sans-serif",
            textOutline: "none",
            fontWeight: "normal",
          },
        },
      },
      series: {
        dataLabels: {
          style: {
            color: "#000000",
            fontFamily: "'Rubik', sans-serif",
          },
        },
        stacking: "normal", // Esto pone las barras una encima de otra
        pointPadding: 0.1,
        groupPadding: 0.1,
      },
    },
    tooltip: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderColor: "#000000",
      style: {
        color: "#000000",
        fontFamily: "'Rubik', sans-serif",
      },
      headerFormat:
        "<span style=\"font-size:11px; font-family: 'Rubik', sans-serif\">{point.key}</span><br>",
      pointFormat:
        '<span style="color:{point.color}">●</span> {series.name}: <b style="font-family: \'Rubik\', sans-serif">{point.y:.2f}</b><br/>',
    },
    series: [
      {
        name: "CBIOMASA",
        data: [
          33.8249788, // AR-C
          15.997503606056513, // OM-Hz
          10.523467830686254, // AR-OVL
          12.357499999999998, // HM-C
          78.6216946841782, // OM-F
          14.886342199999998, // HAC-OVL
          33.6807358, // OM-C
          4.6851, // HM-G
          15.005044999999999, // HAC-C
          0.8416672000000001, // AR-G
          128.117811954, // AR-BI
          54.18041328571428, // OM-OVL
          12.9811032, // HAC-G
          8.1976889392, // AR-W
          16.346228999999997, // HM-OVL
          0.8809499999999999, // LAC-G
          1.082312, // HM-W
          66.774374431, // HAC-BI
          31.962429, // HAC-F
          10.716302189793696, // AR-Hz
          0.307286, // HAC-Hz
          69.50466308689177, // AR-F
          0.8967, // OM-G
          10.478725931034482, // HAC-W
          30.95757032307693, // OM-W
          154.165942765, // OM-BI
          70.814136, // HM-F
        ],
        color: "#eaa828",
        pointWidth: 30, // Ancho ajustado
        borderColor: "#fff",
      },
      {
        name: "RCOS 0-50 cm",
        data: [
          -34.40168888509696, // AR-C
          -38.45563339417129, // OM-Hz
          -39.58417236102722, // AR-OVL
          -40.08926763827206, // HM-C
          -42.04565700364528, // OM-F
          -42.05164014859966, // HAC-OVL
          -42.49806233549873, // OM-C
          -43.514030540315204, // HM-G
          -43.85680562709133, // HAC-C
          -44.34532484881932, // AR-G
          -45.81758849883633, // AR-BI
          -46.491070739222685, // OM-OVL
          -48.90406846598959, // HAC-G
          -49.324836573463436, // AR-W
          -49.90443186131266, // HM-OVL
          -55.5348087215943, // LAC-G
          -55.7183974769018, // HM-W
          -56.45854229027988, // HAC-BI
          -56.87724719656536, // HAC-F
          -58.24851858151591, // AR-Hz
          -58.795352202393204, // HAC-Hz
          -76.39204429217668, // AR-F
          -89.4290046316163, // OM-G
          -92.09362836716937, // HAC-W
          -94.80528083855094, // OM-W
          -104.59342859708799, // OM-BI
          -110.48177264717985, // HM-F
        ],
        color: "#99237C",
        pointWidth: 30, // Ancho ajustado
        borderColor: "#fff",
      },
    ],
  });
});
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
