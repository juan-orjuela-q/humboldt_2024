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

const container = document.getElementById("container");
if (container) {
  const createChart = (data) => {
    // Crear el chart de Highcharts
    return Highcharts.chart("container", {
      chart: {
        height: "100%",
        backgroundColor: "transparent",
        style: {
          fontFamily: "rubik, sans-serif",
        },
      },

      title: {
        text: null,
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },

      series: [
        {
          type: "sunburst",
          data: data,
          name: "Categorías de Amenaza",
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
                to: -0.3,
              },
            },
          ],
        },
      ],

      tooltip: {
        headerFormat: "",
        pointFormat:
          "<b>{point.name}</b><br/>" +
          "Categoría de amenaza: <b>{point.categoria}</b><br/>" +
          "Endémica: <b>{point.endemica}</b><br/>" +
          "Número de especies: <b>{point.value}</b>",
      },
    });
  };

  // Define the data based on the fish species table
  const data = [
    {
      id: "0.0",
      parent: "",
      name: "Peces del Caribe",
      value: 14,
      color: "#1f77b4",
    },
    {
      id: "1.0",
      parent: "0.0",
      name: "En Peligro Crítico (CR)",
      value: 1,
      categoria: "CR",
      color: "#d62728",
    },
    {
      id: "1.1",
      parent: "0.0",
      name: "En Peligro (EN)",
      value: 4,
      categoria: "EN",
      color: "#ff7f0e",
    },
    {
      id: "1.2",
      parent: "0.0",
      name: "Vulnerable (VU)",
      value: 9,
      categoria: "VU",
      color: "#ffbb78",
    },
    // Especies en Peligro Crítico (CR)
    {
      id: "2.0",
      parent: "1.0",
      name: "Capaz",
      value: 1,
      categoria: "CR",
      endemica: "Sí",
      nombreCientifico: "Pimelodus grosskopfii",
    },
    // Especies en Peligro (EN)
    {
      id: "2.1",
      parent: "1.1",
      name: "Bagre rayado",
      value: 1,
      categoria: "EN",
      endemica: "Sí",
      nombreCientifico: "Pseudoplatystoma magdaleniatum",
    },
    {
      id: "2.2",
      parent: "1.1",
      name: "Corunta",
      value: 1,
      categoria: "EN",
      endemica: "Sí",
      nombreCientifico: "Parodon alfonsoi",
    },
    {
      id: "2.3",
      parent: "1.1",
      name: "Sabaleta",
      value: 1,
      categoria: "EN",
      endemica: "Sí",
      nombreCientifico: "Brycon labiatus",
    },
    {
      id: "2.4",
      parent: "1.1",
      name: "Lamprea",
      value: 1,
      categoria: "EN",
      endemica: "Sí",
      nombreCientifico: "Gymnotus ardilai",
    },
    // Especies Vulnerables (VU)
    {
      id: "2.5",
      parent: "1.2",
      name: "Jetudo",
      value: 1,
      categoria: "VU",
      endemica: "Sí",
      nombreCientifico: "Ichthyoelephas longirostris",
    },
    {
      id: "2.6",
      parent: "1.2",
      name: "Rofio",
      value: 1,
      categoria: "VU",
      endemica: "Sí",
      nombreCientifico: "Callichthys fabricioi",
    },
    {
      id: "2.7",
      parent: "1.2",
      name: "Sabaleta",
      value: 1,
      categoria: "VU",
      endemica: "Sí",
      nombreCientifico: "Brycon fowleri",
    },
    {
      id: "2.8",
      parent: "1.2",
      name: "Dorada",
      value: 1,
      categoria: "VU",
      endemica: "Sí",
      nombreCientifico: "Brycon moorei",
    },
    {
      id: "2.9",
      parent: "1.2",
      name: "Cachana",
      value: 1,
      categoria: "VU",
      endemica: "Sí",
      nombreCientifico: "Cynopotamus atratoensis",
    },
    {
      id: "2.10",
      parent: "1.2",
      name: "Boquiancha",
      value: 1,
      categoria: "VU",
      endemica: "Sí",
      nombreCientifico: "Genycharax tarpon",
    },
    {
      id: "2.11",
      parent: "1.2",
      name: "Yamú",
      value: 1,
      categoria: "VU",
      endemica: "Sí",
      nombreCientifico: "Megaleporinus muyscorum",
    },
    {
      id: "2.12",
      parent: "1.2",
      name: "Marranito",
      value: 1,
      categoria: "VU",
      endemica: "No",
      nombreCientifico: "Parodon suborbitalis",
    },
    {
      id: "2.13",
      parent: "1.2",
      name: "Micudo",
      value: 1,
      categoria: "VU",
      endemica: "Sí",
      nombreCientifico: "Pimelodella macrocephala",
    },
  ];

  createChart(data);

  Highcharts.chart("composicion-ictiofauna", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: "100%",
      backgroundColor: "transparent",
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
        "Cantidad: <b>{point.y}</b><br/>" +
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
        name: "Categorías",
        colorByPoint: true,
        data: [
          {
            name: "Especies endémicas",
            y: 149,
            sliced: false,
            selected: true,
            color: "#75C8DA",
          },
          {
            name: "Especies migratorias",
            y: 16,
            color: "#D50000",
          },
          {
            name: "Especies de uso pesquero/ornamental",
            y: 58,
            color: "#E9C101",
          },
        ],
      },
    ],
  });
}

Highcharts.chart("sankey-container", {
  chart: {
    type: "sankey",
    backgroundColor: "transparent",
    height: "50%",
    zooming: {
      type: "xy",
    },
    panning: {
      enabled: true,
      type: "xy",
    },
    panKey: "shift",
  },
  title: {
    text: null,
  },
  accessibility: {
    point: {
      valueDescriptionFormat:
        "{index}. {point.from} a {point.to}, " + "{point.weight}.",
    },
  },
  tooltip: {
    headerFormat: null,
    pointFormat: "{point.fromNode.name} → {point.toNode.name}: {point.weight}",
    nodeFormat: "{point.name}: {point.sum}",
  },
  series: [
    {
      keys: ["from", "to", "weight"],
      nodes: [
        // Nodos principales
        {
          id: "Cocreado",
          name: "Cocreado",
          color: "#4A90E2",
          column: 0,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "16px",
            },
          },
        },
        {
          id: "Colaborativo",
          name: "Colaborativo",
          color: "#7ED321",
          column: 0,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "16px",
            },
          },
        },
        {
          id: "Contributivo",
          name: "Contributivo",
          color: "#BD10E0",
          column: 0,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "16px",
            },
          },
        },

        // Actividades Cocreado
        {
          id: "Análisis documental",
          name: "1. Análisis documental",
          color: "#4A90E2",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Acercamiento territorial",
          name: "2. Acercamiento territorial",
          color: "#4A90E2",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Diagnóstico",
          name: "3. Diagnóstico",
          color: "#4A90E2",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Alcance",
          name: "4. Alcance",
          color: "#4A90E2",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Variables e indicadores",
          name: "5. Variables e indicadores",
          color: "#4A90E2",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Diseño metodológico",
          name: "6. Diseño metodológico",
          color: "#4A90E2",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },

        // Actividades Colaborativo
        {
          id: "Sistema de monitoreo",
          name: "7. Sistema de monitoreo y evaluación",
          color: "#7ED321",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Fortalecimiento capacidades",
          name: "8. Fortalecimiento de capacidades técnicas",
          color: "#7ED321",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Implementación",
          name: "9. Implementación y seguimiento",
          color: "#7ED321",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Sistematización datos",
          name: "10. Sistematización de datos",
          color: "#7ED321",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Análisis de datos",
          name: "11. Análisis de datos",
          color: "#7ED321",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Socialización",
          name: "12. Socialización y difusión de resultados",
          color: "#7ED321",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },
        {
          id: "Evaluación decisiones",
          name: "13. Evaluación y toma de decisiones",
          color: "#7ED321",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },

        // Actividades Contributivo
        {
          id: "Uso de resultados",
          name: "14. Uso de resultados a diferentes escalas",
          color: "#BD10E0",
          column: 1,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
            },
          },
        },

        // Categorías de importancia
        {
          id: "Fundamental",
          name: "Fundamental",
          color: "#FF6B6B",
          column: 2,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "16px",
            },
          },
        },
        {
          id: "Opcional",
          name: "Opcional",
          color: "#FFD93D",
          column: 2,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "16px",
            },
          },
        },
        {
          id: "Proyectado",
          name: "Proyectado",
          color: "#6BCF7F",
          column: 2,
          dataLabels: {
            style: {
              backgroundColor: "white",
              padding: "3px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "16px",
            },
          },
        },
      ],
      data: [
        // Conexiones desde Cocreado
        ["Cocreado", "Análisis documental", 1],
        ["Cocreado", "Acercamiento territorial", 1],
        ["Cocreado", "Diagnóstico", 1],
        ["Cocreado", "Alcance", 1],
        ["Cocreado", "Variables e indicadores", 1],
        ["Cocreado", "Diseño metodológico", 1],

        // Conexiones desde Colaborativo
        ["Colaborativo", "Sistema de monitoreo", 1],
        ["Colaborativo", "Fortalecimiento capacidades", 1],
        ["Colaborativo", "Implementación", 1],
        ["Colaborativo", "Sistematización datos", 1],
        ["Colaborativo", "Análisis de datos", 1],
        ["Colaborativo", "Socialización", 1],
        ["Colaborativo", "Evaluación decisiones", 1],

        // Conexiones desde Contributivo
        ["Contributivo", "Uso de resultados", 1],

        // Conexiones a categorías de importancia - Cocreado
        ["Análisis documental", "Fundamental", 1],
        ["Acercamiento territorial", "Opcional", 1],
        ["Diagnóstico", "Fundamental", 1],
        ["Alcance", "Fundamental", 1],
        ["Variables e indicadores", "Fundamental", 1],
        ["Diseño metodológico", "Fundamental", 1],

        // Conexiones a categorías de importancia - Colaborativo
        ["Sistema de monitoreo", "Fundamental", 1],
        ["Fortalecimiento capacidades", "Opcional", 1],
        ["Implementación", "Fundamental", 1],
        ["Sistematización datos", "Fundamental", 1],
        ["Análisis de datos", "Fundamental", 1],
        ["Socialización", "Opcional", 1],
        ["Evaluación decisiones", "Opcional", 1],

        // Conexiones a categorías de importancia - Contributivo
        ["Uso de resultados", "Proyectado", 1],
      ],
      name: "Proceso de Investigación",
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
          color: "#000000",
          textOutline: "none",
          fontWeight: "normal",
          backgroundColor: "white",
          padding: "3px",
        },
      },
      nodeWidth: 25,
      nodePadding: 8,
    },
  ],
});
