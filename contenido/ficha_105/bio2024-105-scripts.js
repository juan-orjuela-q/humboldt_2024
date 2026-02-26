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

// Verificar que el DOM esté completamente cargado antes de ejecutar Highcharts
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("especies-dulceacuicolas");
  if (container) {
    const createChart = (data) => {
      // Crear el chart de Highcharts
      return Highcharts.chart("especies-dulceacuicolas", {
        chart: {
          height: "600px",
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
            borderColor: "#ffffff",
            borderWidth: 1,
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
              style: {
                textOutline: "none",
                fontFamily: "Rubik, sans-serif",
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
                  to: -0.1,
                },
              },
            ],
          },
        ],

        tooltip: {
          headerFormat: "",
          useHTML: true, // Habilitar HTML para mejor control
          pointFormatter: function () {
            // Construir el tooltip dinámicamente
            let tooltip = `<b>${this.name}</b><br/>`;

            // Solo agregar nombre científico si existe
            if (this.nombreCientifico) {
              tooltip += `Nombre científico: <i>${this.nombreCientifico}</i><br/>`;
            }

            // Agregar categoría de amenaza si existe
            if (this.categoria) {
              tooltip += `Categoría de amenaza: <b>${this.categoria}</b><br/>`;
            }

            // Agregar endemismo si existe
            if (this.endemica) {
              tooltip += `Endémica: <b>${this.endemica}</b><br/>`;
            }

            return tooltip;
          },
        },
      });
    };

    // Define the data based on the fish species table
    const data = [
      {
        id: "0.0",
        parent: "",
        name: "Peces dulceacuícolas en categorías de amenaza",
        value: 14,
        color: "#ffffff",
      },
      {
        id: "1.0",
        parent: "0.0",
        name: "En Peligro Crítico (CR)",
        value: 1,
        categoria: "CR",
        color: "#D50000",
      },
      {
        id: "1.1",
        parent: "0.0",
        name: "En Peligro (EN)",
        value: 4,
        categoria: "EN",
        color: "#F59C00",
      },
      {
        id: "1.2",
        parent: "0.0",
        name: "Vulnerable (VU)",
        value: 9,
        categoria: "VU",
        color: "#E9C101",
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
        name: "Marozco",
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
        name: "Mayupa",
        value: 1,
        categoria: "EN",
        endemica: "Sí",
        nombreCientifico: "Gymnotus ardilai",
      },
      // Especies Vulnerables (VU)
      {
        id: "2.5",
        parent: "1.2",
        name: "Pataló",
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
        name: "Comelón",
        value: 1,
        categoria: "VU",
        endemica: "Sí",
        nombreCientifico: "Megaleporinus muyscorum",
      },
      {
        id: "2.12",
        parent: "1.2",
        name: "Marozco",
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
  }

  // Gráfico de composición ictiofauna CON LEYENDA
  Highcharts.chart("composicion-ictiofauna", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: "700px",
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
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "12px",
        fontWeight: "normal",
      },
      itemHoverStyle: {
        color: "#333",
      },
      itemHiddenStyle: {
        color: "#ccc",
      },
      symbolHeight: 12,
      symbolWidth: 12,
      symbolRadius: 6,
      padding: 10,
      margin: 10,
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
        borderColor: "#ffffff",
        borderWidth: 1,
        name: "Composición Ictiofauna",
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
});
