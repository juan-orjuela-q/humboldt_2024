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

document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("humedales-costeros", {
    chart: {
      type: "pie",
      backgroundColor: "none",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
      custom: {},
      events: {
        render() {
          const chart = this,
            series = chart.series[0];
          let customLabel = chart.options.chart.custom.label;

          if (!customLabel) {
            customLabel = chart.options.chart.custom.label = chart.renderer
              .label("Total<br/>" + "<strong>576 276</strong>")
              .css({
                color: "var(--highcharts-neutral-color-100, #000)",
                textAnchor: "middle",
                fontFamily: "Rubik, sans-serif",
                fontSize: "16px",
              })
              .add();
          }

          const x = series.center[0] + chart.plotLeft,
            y =
              series.center[1] + chart.plotTop - customLabel.attr("height") / 2;

          customLabel.attr({
            x,
            y,
          });
          // Set font size based on chart diameter
          customLabel.css({
            fontSize: `${series.center[2] / 12}px`,
            fontFamily: "Rubik, sans-serif",
          });
        },
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    title: {
      text: null,
    },
    tooltip: {
      pointFormat:
        "{series.name}: <b>{point.percentage:.0f}%</b><br/>Valor: <b>{point.valor}</b>",
      style: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
        fontWeight: "normal",
        color: "#000",
      },
      itemHoverStyle: {
        color: "#333333",
      },
      margin: 20,
      padding: 10,
    },
    plotOptions: {
      series: {
        allowPointSelect: false,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: "{point.name}",
            style: {
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
              fontWeight: "normal",
            },
          },
          {
            enabled: true,
            distance: -15,
            format: "{point.percentage:.0f}%",
            style: {
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
              fontWeight: "bold",
            },
          },
        ],
        showInLegend: true,
      },
      pie: {
        dataLabels: {
          style: {
            fontFamily: "Rubik, sans-serif",
            fontSize: "14px",
          },
        },
      },
    },
    series: [
      {
        name: "Registrations",
        colorByPoint: true,
        innerSize: "75%",
        data: [
          {
            name: "Natural",
            y: 90,
            valor: "520 009",
            color: "#00748B",
          },
          {
            name: "Transformado",
            y: 10,
            valor: "56 267",
            color: "#F59C00",
          },
        ],
      },
    ],
  });
  Highcharts.chart("humedales-permanentes", {
    chart: {
      type: "column",
      backgroundColor: "none",
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
          format: "{point.y:,.1f} ha",
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
        '<span style="color:#00748B; font-family: Rubik, sans-serif">{point.name}</span>: <b style="color:#000; font-family: Rubik, sans-serif">{point.y:,.1f} ha</b><br/>Porcentaje: <b style="color:#000; font-family: Rubik, sans-serif">{point.percentage}</b>',
    },
    series: [
      {
        name: "Humedales Permanentes",
        colorByPoint: false,
        data: [
          {
            name: "Humedales Abiertos",
            y: 136198.7,
            percentage: "55,5%",
          },
          {
            name: "Estanques para acuicultura",
            y: 1960.7,
            percentage: "0,8%",
          },
          {
            name: "Vegetación acuática sobre cuerpos de agua",
            y: 3148.8,
            percentage: "1,2%",
          },
          {
            name: "Bajo dosel en bosque aluvial",
            y: 24954.6,
            percentage: "10,1%",
          },
          {
            name: "Bajo dosel en bosque intermareal",
            y: 79299.4,
            percentage: "32,3%",
          },
        ],
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("humedales-temporales", {
    chart: {
      type: "column",
      backgroundColor: "none",
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
        },
      },
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      borderColor: "#CCCCCC",
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
      headerFormat:
        '<span style="font-size:11px; color:#000; font-family: Rubik, sans-serif">{series.name}</span><br>',
      pointFormat:
        '<span style="color:#00748B; font-family: Rubik, sans-serif">{point.name}</span>: <b style="color:#000; font-family: Rubik, sans-serif">{point.y:,.1f} ha</b><br/>Porcentaje: <b style="color:#000; font-family: Rubik, sans-serif">{point.percentage}%</b>',
    },
    series: [
      {
        name: "Humedales Temporales",
        colorByPoint: false,
        data: [
          {
            name: "Herbácea y/o Arbustiva",
            y: 103000.2,
            percentage: 30.9,
          },
          {
            name: "Zona Pantanosa",
            y: 58080.5,
            percentage: 17.5,
          },
          {
            name: "Bosque Aluvial",
            y: 49229.6,
            percentage: 14.8,
          },
          {
            name: "Pastos Abiertos y/o Arbolados",
            y: 42025.3,
            percentage: 12.6,
          },
          {
            name: "Sin o con poca Vegetación",
            y: 18240.5,
            percentage: 5.5,
          },
          {
            name: "Ágricolas Heterogéneas",
            y: 15623.3,
            percentage: 4.7,
          },
          {
            name: "Salitral",
            y: 14780.5,
            percentage: 4.4,
          },
          {
            name: "Platano y Banano",
            y: 7814.4,
            percentage: 2.3,
          },
          {
            name: "Extracción Minera",
            y: 5391.4,
            percentage: 1.6,
          },
          {
            name: "Acuicultura",
            y: 4248.2,
            percentage: 1.3,
          },
          {
            name: "Palma de aceite",
            y: 4039.3,
            percentage: 1.2,
          },
          {
            name: "Bosque de galería o ripario",
            y: 3785.2,
            percentage: 1.1,
          },
          {
            name: "Estanques para acuicultura",
            y: 462.9,
            percentage: 0.1,
          },
          {
            name: "Industrial o Comercial",
            y: 2911.4,
            percentage: 0.9,
          },
          {
            name: "Arrozales",
            y: 1793.8,
            percentage: 0.5,
          },
          {
            name: "Zonas urbanizadas",
            y: 1393.2,
            percentage: 0.4,
          },
        ],
      },
    ],
  });

  Highcharts.chart("porcentaje-permanentes", {
    chart: {
      type: "column",
      backgroundColor: "none",
      style: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
    },
    title: {
      text: null,
      align: "left",
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "16px",
      },
    },
    xAxis: {
      categories: [
        "Antioquia",
        "Atlántico",
        "Bolívar",
        "Chocó",
        "Córdoba",
        "La Guajira",
        "Magdalena",
        "Sucre",
      ],
      labels: {
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 0,
      title: {
        text: null,
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
        },
      },
      labels: {
        format: "{value}%",
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
        },
      },
      stackLabels: {
        enabled: true,
        format: "{total}%",
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor: "transparent",
      borderColor: "transparent",
      borderWidth: 0,
      shadow: false,
      itemStyle: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
      itemHoverStyle: {
        color: "#000",
      },
      y: -20,
      margin: 50,
    },
    tooltip: {
      headerFormat: "<b>{point.category}</b><br/>",
      pointFormat: "{series.name}: <b>{point.y}%</b>",
      backgroundColor: "#FFFFFF",
      borderColor: "#CCCCCC",
      borderWidth: 1,
      style: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
          format: "{y}%",
          style: {
            color: "#000",
            fontFamily: "Rubik, sans-serif",
            fontSize: "12px",
            textOutline: "1px contrast",
          },
        },
      },
    },
    series: [
      {
        name: "Permanente",
        data: [4.4, 0.7, 3.2, 3.4, 2.4, 1.7, 24.1, 2.7],
        color: "#F59C00",
      },
      {
        name: "Temporal",
        data: [15.2, 1.1, 2.6, 7.6, 3.9, 8.8, 16.9, 1.1],
        color: "#00748B",
      },
    ],
  });
});
