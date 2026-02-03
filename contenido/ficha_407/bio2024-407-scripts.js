// Verificar que el DOM esté completamente cargado antes de ejecutar Highcharts
document.addEventListener("DOMContentLoaded", function () {
  // === GRÁFICO 1: ESPECIES NATIVAS (basado en Salida 1A Nativas) ===
  const containerNativas = document.getElementById("especies-nativas");
  if (containerNativas) {
    // Paleta de colores de la imagen para nativas
    const coloresNativas = [
      "#5FC7D7", // Verde azulado claro - para acuáticas
      "#00A3C3", // Azul dodger - para acuáticas o cielo
      "#6e62f1", // Coral - común en gráficos de frutas tropicales
      "#9770B1", // Lima verde - para vegetación
      "#DC81B5", // Oro - para especies valiosas
      "#f12c36", // Blueviolet - para flores
      "#F05347", // Tomate - para especies en riesgo
      "#3CB371", // Verde mar medio - para árboles
      "#9370DB", // Púrpura medio - para diversidad
      "#FF4500", // Naranja rojizo - para datos destacados
      "#2E8B57", // Verde mar - para especies terrestres
      "#4169E1", // Azul real - para endémicas
      "#DC143C", // Carmesí - para prioritarias
      "#228B22", // Verde bosque - para nativas
      "#8B008B", // Magenta oscuro - para raras
    ];

    // Datos de especies nativas extraídos del Excel (Salida 1A Nativas)
    const dataNativas = [
      // Nivel raíz
      {
        id: "nativas-raiz",
        parent: "",
        name: "Especies Nativas",
        value: 203,
        color: "#fff", // Azul grisáceo oscuro
      },

      // Primer nivel: Familias principales por valor (basado en Suma de N)
      {
        id: "fabaceae",
        parent: "nativas-raiz",
        name: "Fabaceae",
        value: 129,
        color: coloresNativas[0], // Naranja claro
      },
      {
        id: "solanaceae",
        parent: "nativas-raiz",
        name: "Solanaceae",
        value: 26,
        color: coloresNativas[2], // Amarillo claro
      },
      {
        id: "malvaceae",
        parent: "nativas-raiz",
        name: "Malvaceae",
        value: 13,
        color: coloresNativas[3], // Verde agua claro
      },
      {
        id: "caricaceae",
        parent: "nativas-raiz",
        name: "Caricaceae",
        value: 9,
        color: coloresNativas[4], // Azul claro
      },
      {
        id: "annonaceae",
        parent: "nativas-raiz",
        name: "Annonaceae",
        value: 6,
        color: coloresNativas[5], // Azul oscuro
      },
      {
        id: "bromeliaceae",
        parent: "nativas-raiz",
        name: "Bromeliaceae",
        value: 3,
        color: coloresNativas[6], // Rosa coral
      },
      {
        id: "dioscoreaceae",
        parent: "nativas-raiz",
        name: "Dioscoreaceae",
        value: 4,
        color: coloresNativas[7], // Verde lima
      },
      {
        id: "arecaceae",
        parent: "nativas-raiz",
        name: "Arecaceae",
        value: 5,
        color: coloresNativas[8], // Verde azulado
      },
      {
        id: "apiaceae",
        parent: "nativas-raiz",
        name: "Apiaceae",
        value: 3,
        color: coloresNativas[9], // Coral
      },
      {
        id: "meliaceae",
        parent: "nativas-raiz",
        name: "Meliaceae",
        value: 2,
        color: coloresNativas[10], // Naranja arena
      },
      {
        id: "anacardiaceae",
        parent: "nativas-raiz",
        name: "Anacardiaceae",
        value: 1,
        color: coloresNativas[11], // Amarillo dorado
      },
      {
        id: "bixaceae",
        parent: "nativas-raiz",
        name: "Bixaceae",
        value: 1,
        color: coloresNativas[13], // Turquesa
      },
      {
        id: "salicaceae",
        parent: "nativas-raiz",
        name: "Salicaceae",
        value: 1,
        color: coloresNativas[14], // Amarillo
      },

      // Segundo nivel: Especies dentro de cada familia
      // Euphorbiaceae

      // Fabaceae
      {
        id: "gliricidia-sepium",
        parent: "fabaceae",
        name: "Matarratón",
        value: 128,
        nombreCientifico: "Gliricidia sepium",
        nombreComun: "Matarratón",
      },
      {
        id: "phaseolus-lunatus",
        parent: "fabaceae",
        name: "Carauta",
        value: 1,
        nombreCientifico: "Phaseolus lunatus",
        nombreComun: "Carauta, fríjol zaragoza",
      },

      // Solanaceae
      {
        id: "capsicum-annuum",
        parent: "solanaceae",
        name: "Ají",
        value: 26,
        nombreCientifico: "Capsicum annuum",
        nombreComun: "Ají, ají dulce, ají tres hojas",
      },

      // Malvaceae
      {
        id: "theobroma-cacao",
        parent: "malvaceae",
        name: "Cacao",
        value: 12,
        nombreCientifico: "Theobroma cacao",
        nombreComun: "Cacao",
      },
      {
        id: "ceiba-pentandra",
        parent: "malvaceae",
        name: "Ceiba",
        value: 1,
        nombreCientifico: "Ceiba pentandra",
        nombreComun: "Ceiba",
      },

      // Caricaceae
      {
        id: "carica-papaya",
        parent: "caricaceae",
        name: "Papaya",
        value: 9,
        nombreCientifico: "Carica papaya",
        nombreComun: "Papaya, papayo criollo",
      },

      // Annonaceae
      {
        id: "annona-muricata",
        parent: "annonaceae",
        name: "Guanábana",
        value: 6,
        nombreCientifico: "Annona muricata",
        nombreComun: "Guanábana",
      },

      // Bromeliaceae
      {
        id: "ananas-comosus",
        parent: "bromeliaceae",
        name: "Piña",
        value: 3,
        nombreCientifico: "Ananas comosus",
        nombreComun: "Piña",
      },

      // Dioscoreaceae
      {
        id: "dioscorea-polygonoides",
        parent: "dioscoreaceae",
        name: "Ñame saino",
        value: 4,
        nombreCientifico: "Dioscorea polygonoides",
        nombreComun: "Ñame saino, colmillo de perro",
      },

      // Arecaceae
      {
        id: "bactris-major",
        parent: "arecaceae",
        name: "Corozo",
        value: 5,
        nombreCientifico: "Bactris major",
        nombreComun: "Palma de lata, corozo",
      },

      // Apiaceae
      {
        id: "eryngium-foetidum",
        parent: "apiaceae",
        name: "Culantro",
        value: 3,
        nombreCientifico: "Eryngium foetidum",
        nombreComun: "Culantro, culantrillo",
      },

      // Meliaceae
      {
        id: "swietenia-macrophylla",
        parent: "meliaceae",
        name: "Caoba",
        value: 2,
        nombreCientifico: "Swietenia macrophylla",
        nombreComun: "Caoba",
      },

      // Anacardiaceae
      {
        id: "spondias-purpurea",
        parent: "anacardiaceae",
        name: "Ciruelo",
        value: 1,
        nombreCientifico: "Spondias purpurea",
        nombreComun: "Ciruelo",
      },

      // Bixaceae
      {
        id: "bixa-orellana",
        parent: "bixaceae",
        name: "Achiote",
        value: 1,
        nombreCientifico: "Bixa orellana",
        nombreComun: "Achiote",
      },

      // Salicaceae
      {
        id: "casearia-corymbosa",
        parent: "salicaceae",
        name: "Guanábana cimarrón",
        value: 1,
        nombreCientifico: "Casearia corymbosa",
        nombreComun: "Guanábana cimarrón macho",
      },
    ];

    Highcharts.chart("especies-nativas", {
      chart: {
        height: "100%",
        backgroundColor: "transparent",
        style: {
          fontFamily: "rubik, sans-serif",
        },
      },
      title: {
        text: "Especies Nativas",
        style: {
          fontSize: "22px",
          fontWeight: "bold",
          color: "#333",
        },
      },
      subtitle: {
        text: null,
        style: {
          fontSize: "14px",
          color: "#666",
        },
      },
      series: [
        {
          borderColor: "#ffffff",
          borderWidth: 1,
          type: "sunburst",
          data: dataNativas,
          name: "Especies Nativas",
          allowTraversingTree: true,
          borderRadius: 3,
          cursor: "pointer",
          dataLabels: {
            format: "{point.name}",
            filter: {
              property: "innerArcLength",
              operator: ">",
              value: 20,
            },
            style: {
              textOutline: "none",
              fontFamily: "Rubik, sans-serif",
              fontSize: "11px",
              color: "#333",
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
                  value: 50,
                },
                style: {
                  fontSize: "12px",
                  fontWeight: "bold",
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
        pointFormatter: function () {
          let tooltipContent = `<b>${this.name}</b><br/>`;

          // Validar y mostrar nombre científico solo si no está vacío
          const nombreCientifico =
            this.options.nombreCientifico || this.nombreCientifico;
          if (nombreCientifico && nombreCientifico.trim() !== "") {
            tooltipContent += `Nombre científico: <b>${nombreCientifico}</b><br/>`;
          }

          // Validar y mostrar nombre común solo si no está vacío
          const nombreComun = this.options.nombreComun || this.nombreComun;
          if (nombreComun && nombreComun.trim() !== "") {
            tooltipContent += `Nombre común: <b>${nombreComun}</b><br/>`;
          }

          // Mostrar valor y porcentaje siempre
          tooltipContent += `Cantidad registrada: <b>${this.value || 0}</b><br/>`;

          if (this.percentage !== undefined) {
            tooltipContent += `Porcentaje del total: <b>${this.percentage.toFixed(1)}%</b>`;
          }

          return tooltipContent;
        },
      },
      credits: {
        enabled: false,
      },
    });
  }

  // === GRÁFICO 2: ESPECIES INTRODUCIDAS (basado en Salida 1B Introducidas) ===
  const containerIntroducidas = document.getElementById(
    "especies-introducidas",
  );
  if (containerIntroducidas) {
    // Paleta de colores de la imagen para introducidas
    const coloresIntroducidas = [
      "#5FC7D7", // Verde azulado claro - para acuáticas
      "#00A3C3", // Azul dodger - para acuáticas o cielo
      "#a199f8", // Coral - común en gráficos de frutas tropicales
      "#9770B1", // Lima verde - para vegetación
      "#DC81B5", // Oro - para especies valiosas
      "#f12c36", // Blueviolet - para flores
      "#F05347", // Tomate - para especies en riesgo
      "#4783ec", // Verde azulado
      "#E76F51", // Coral
      "#F4A261", // Naranja arena
      "#E9C46A", // Amarillo dorado
      "#264653", // Azul grisáceo
      "#FF6B6B", // Rojo claro
      "#4ECDC4", // Turquesa claro
      "#45B7D1", // Azul cielo
    ];

    // Datos de especies introducidas extraídos del Excel
    const dataIntroducidas = [
      // Nivel raíz
      {
        id: "introducidas-raiz",
        parent: "",
        name: "Especies Introducidas",
        value: 269,
        color: "#fff", // Azul grisáceo
      },

      // Primer nivel: Familias principales por valor
      {
        id: "musaceae",
        parent: "introducidas-raiz",
        name: "Musaceae",
        value: 94,
        color: coloresIntroducidas[0], // Rosa coral
      },
      {
        id: "rubiaceae",
        parent: "introducidas-raiz",
        name: "Rubiaceae",
        value: 59,
        color: coloresIntroducidas[1], // Amarillo claro
      },
      {
        id: "dioscoreaceae",
        parent: "introducidas-raiz",
        name: "Dioscoreaceae",
        value: 44,
        color: coloresIntroducidas[2], // Verde agua
      },
      {
        id: "lauraceae",
        parent: "introducidas-raiz",
        name: "Lauraceae",
        value: 29,
        color: coloresIntroducidas[3], // Azul claro
      },
      {
        id: "fabaceae",
        parent: "introducidas-raiz",
        name: "Fabaceae",
        value: 10,
        color: coloresIntroducidas[4], // Azul oscuro
      },
      {
        id: "anacardiaceae",
        parent: "introducidas-raiz",
        name: "Anacardiaceae",
        value: 8,
        color: coloresIntroducidas[5], // Naranja claro
      },
      {
        id: "lamiaceae",
        parent: "introducidas-raiz",
        name: "Lamiaceae",
        value: 5,
        color: coloresIntroducidas[6], // Verde lima
      },
      {
        id: "rutaceae",
        parent: "introducidas-raiz",
        name: "Rutaceae",
        value: 9,
        color: coloresIntroducidas[7], // Verde azulado
      },
      {
        id: "solanaceae",
        parent: "introducidas-raiz",
        name: "Solanaceae",
        value: 5,
        color: coloresIntroducidas[8], // Coral
      },
      {
        id: "poaceae",
        parent: "introducidas-raiz",
        name: "Poaceae",
        value: 2,
        color: coloresIntroducidas[9], // Naranja arena
      },
      {
        id: "arecaceae",
        parent: "introducidas-raiz",
        name: "Arecaceae",
        value: 1,
        color: coloresIntroducidas[10], // Amarillo dorado
      },
      {
        id: "cucurbitaceae",
        parent: "introducidas-raiz",
        name: "Cucurbitaceae",
        value: 1,
        color: coloresIntroducidas[12], // Rojo claro
      },
      {
        id: "phyllanthaceae",
        parent: "introducidas-raiz",
        name: "Phyllanthaceae",
        value: 1,
        color: coloresIntroducidas[13], // Turquesa claro
      },
      {
        id: "amaryllidaceae",
        parent: "introducidas-raiz",
        name: "Amaryllidaceae",
        value: 1,
        color: coloresIntroducidas[14], // Azul cielo
      },

      // Segundo nivel: Especies dentro de cada familia
      // Musaceae
      {
        id: "musa-paradisiaca",
        parent: "musaceae",
        name: "Plátano",
        value: 90,
        nombreCientifico: "Musa x paradisiaca",
        nombreComun: "Plátano",
      },
      {
        id: "musa-velutina",
        parent: "musaceae",
        name: "Banano rosa",
        value: 4,
        nombreCientifico: "Musa velutina",
        nombreComun: "Banano rosa",
      },

      // Rubiaceae
      {
        id: "coffea-arabica",
        parent: "rubiaceae",
        name: "Café",
        value: 59,
        nombreCientifico: "Coffea arabica",
        nombreComun: "Café",
      },

      // Dioscoreaceae
      {
        id: "dioscorea-cayenensis",
        parent: "dioscoreaceae",
        name: "Ñame espino",
        value: 34,
        nombreCientifico: "Dioscorea cayenensis",
        nombreComun: "Ñame espino",
      },
      {
        id: "dioscorea-alata",
        parent: "dioscoreaceae",
        name: "Ñame diamante",
        value: 10,
        nombreCientifico: "Dioscorea alata",
        nombreComun: "Ñame diamante",
      },

      // Lauraceae
      {
        id: "persea-americana",
        parent: "lauraceae",
        name: "Aguacate",
        value: 29,
        nombreCientifico: "Persea americana",
        nombreComun: "Aguacate",
      },

      // Fabaceae
      {
        id: "cajanus-cajan",
        parent: "fabaceae",
        name: "Guandul",
        value: 7,
        nombreCientifico: "Cajanus cajan",
        nombreComun: "Guandul",
      },
      {
        id: "phaseolus-vulgaris",
        parent: "fabaceae",
        name: "Fríjol",
        value: 2,
        nombreCientifico: "Phaseolus vulgaris",
        nombreComun: "Fríjol",
      },
      {
        id: "vigna-unguiculata",
        parent: "fabaceae",
        name: "Fríjol cabecitanegra",
        value: 1,
        nombreCientifico: "Vigna unguiculata",
        nombreComun: "Fríjol cabecitanegra",
      },

      // Anacardiaceae
      {
        id: "mangifera-indica",
        parent: "anacardiaceae",
        name: "Mango",
        value: 8,
        nombreCientifico: "Mangifera indica",
        nombreComun: "Mango",
      },

      // Lamiaceae
      {
        id: "tectona-grandis",
        parent: "lamiaceae",
        name: "Teca",
        value: 5,
        nombreCientifico: "Tectona grandis",
        nombreComun: "Teca",
      },

      // Rutaceae
      {
        id: "citrus-aurantium",
        parent: "rutaceae",
        name: "Naranja",
        value: 6,
        nombreCientifico: "Citrus × aurantium",
        nombreComun: "Naranja, naranja agria, pomelo",
      },
      {
        id: "citrus-limon",
        parent: "rutaceae",
        name: "Limón",
        value: 3,
        nombreCientifico: "Citrus × limon",
        nombreComun: "Limón, limón criollo, limón tahití",
      },

      // Solanaceae
      {
        id: "nicotiana-tabacum",
        parent: "solanaceae",
        name: "Tabaco",
        value: 4,
        nombreCientifico: "Nicotiana tabacum",
        nombreComun: "Tabaco",
      },
      {
        id: "solanum-lycopersicum",
        parent: "solanaceae",
        name: "Tomate",
        value: 1,
        nombreCientifico: "Solanum lycopersicum",
        nombreComun: "Tomate, tomate cherry",
      },

      // Poaceae
      {
        id: "saccharum-officinarum",
        parent: "poaceae",
        name: "Caña dulce",
        value: 2,
        nombreCientifico: "Saccharum officinarum",
        nombreComun: "Caña dulce",
      },

      // Arecaceae
      {
        id: "cocos-nucifera",
        parent: "arecaceae",
        name: "Coco",
        value: 1,
        nombreCientifico: "Cocos nucifera",
        nombreComun: "Coco",
      },

      // Cucurbitaceae
      {
        id: "cucurbita-moschata",
        parent: "cucurbitaceae",
        name: "Ahuyama",
        value: 1,
        nombreCientifico: "Cucurbita moschata",
        nombreComun: "Ahuyama",
      },

      // Phyllanthaceae
      {
        id: "phyllanthus-acidus",
        parent: "phyllanthaceae",
        name: "No identificado",
        value: 1,
        nombreCientifico: "Phyllanthus acidus",
        nombreComun: "No identificado",
      },

      // Amaryllidaceae
      {
        id: "allium-cepa",
        parent: "amaryllidaceae",
        name: "Cebolla",
        value: 1,
        nombreCientifico: "Allium cepa",
        nombreComun: "Cebolla",
      },
    ];

    Highcharts.chart("especies-introducidas", {
      chart: {
        height: "100%",
        backgroundColor: "transparent",
        style: {
          fontFamily: "rubik, sans-serif",
        },
      },
      title: {
        text: "Especies Introducidas",
        style: {
          fontSize: "22px",
          fontWeight: "bold",
          color: "#333",
        },
      },
      subtitle: {
        text: null,
        style: {
          fontSize: "14px",
          color: "#666",
        },
      },
      series: [
        {
          borderColor: "#ffffff",
          borderWidth: 1,
          type: "sunburst",
          data: dataIntroducidas,
          name: "Especies Introducidas",
          allowTraversingTree: true,
          borderRadius: 3,
          cursor: "pointer",
          dataLabels: {
            format: "{point.name}",
            filter: {
              property: "innerArcLength",
              operator: ">",
              value: 20,
            },
            style: {
              textOutline: "none",
              fontFamily: "Rubik, sans-serif",
              fontSize: "11px",
              color: "#333",
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
                  value: 50,
                },
                style: {
                  fontSize: "12px",
                  fontWeight: "bold",
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
        pointFormatter: function () {
          let tooltipContent = `<b>${this.name}</b><br/>`;

          // Validar y mostrar nombre científico solo si no está vacío
          const nombreCientifico =
            this.options.nombreCientifico || this.nombreCientifico;
          if (nombreCientifico && nombreCientifico.trim() !== "") {
            tooltipContent += `Nombre científico: <b>${nombreCientifico}</b><br/>`;
          }

          // Validar y mostrar nombre común solo si no está vacío
          const nombreComun = this.options.nombreComun || this.nombreComun;
          if (nombreComun && nombreComun.trim() !== "") {
            tooltipContent += `Nombre común: <b>${nombreComun}</b><br/>`;
          }

          // Mostrar valor y porcentaje siempre
          tooltipContent += `Cantidad registrada: <b>${this.value || 0}</b><br/>`;

          if (this.percentage !== undefined) {
            tooltipContent += `Porcentaje del total: <b>${this.percentage.toFixed(1)}%</b>`;
          }

          return tooltipContent;
        },
      },
      credits: {
        enabled: false,
      },
    });
  }
});

// Mapa interactivo con imágenes (solo hover)
document.addEventListener("DOMContentLoaded", function () {
  // Verificar si estamos en la página correcta
  const mapContainer = document.querySelector(".map-wrapper");
  if (!mapContainer) return;

  // Coordenadas y rutas de imágenes
  const municipalitiesData = {
    1: {
      x: 47,
      y: 25,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-tierras-desnudas.png",
    },
    2: {
      x: 29,
      y: 34,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-terreno-preparacion.png",
    },
    3: {
      x: 78,
      y: 51,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-terreno-barbecho.png",
    },
    4: {
      x: 43,
      y: 40,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-monocultivo.png",
    },
    5: {
      x: 32,
      y: 67,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-policultivo.png",
    },
    6: {
      x: 66,
      y: 37,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-pastizales.png",
    },
    7: {
      x: 19,
      y: 48,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-silvopatoril.png",
    },
    8: {
      x: 37,
      y: 52,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-huerto-mixto.png",
    },
    9: {
      x: 63,
      y: 48,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-agrosilvicola.png",
    },
    10: {
      x: 70,
      y: 32,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-vegetacion-secundaria.png",
    },
    11: {
      x: 67,
      y: 18,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-vegetacion-secundaria-alta.png",
    },
    12: {
      x: 19,
      y: 22,
      image:
        "https://reporte.humboldt.org.co/assets/img/2024/4/407/ficha-407-bosques.png",
    },
  };

  // Variables globales
  let tooltip = null;
  let tooltipImage = null;
  let hoverTimeout = null;
  let currentHoverId = null;
  let isTooltipVisible = false;
  let lastPosition = { x: 0, y: 0 };
  let positionUpdateTimeout = null;

  // Inicializar el mapa
  initMap();

  // Configurar interacciones
  setupInteractions();

  function initMap() {
    const mapNumbersContainer = document.querySelector(".map-numbers");

    // Limpiar contenedores
    mapNumbersContainer.innerHTML = "";

    // Obtener tooltip existente
    tooltip = document.querySelector(".map-tooltip");

    tooltipImage = tooltip.querySelector(".tooltip-image");

    // Crear números para cada ubicación
    Object.keys(municipalitiesData).forEach((id) => {
      const data = municipalitiesData[id];
      const numberElement = document.createElement("div");
      numberElement.className = "map-number";
      numberElement.textContent = id;
      numberElement.style.left = `${data.x}%`;
      numberElement.style.top = `${data.y}%`;
      numberElement.dataset.id = id;
      mapNumbersContainer.appendChild(numberElement);
    });
  }

  function showImageTooltip(imageSrc, x, y) {
    if (!tooltip || !tooltipImage) return;

    // Solo cambiar la imagen si es diferente
    if (
      tooltipImage.src !== imageSrc &&
      tooltipImage.src !== window.location.origin + imageSrc
    ) {
      // Usar un evento load para saber cuando está lista
      const img = new Image();
      img.onload = function () {
        tooltipImage.src = imageSrc;
        tooltipImage.alt = "Imagen del tipo de terreno";
        tooltip.style.display = "block";
        tooltip.style.opacity = "1";
        isTooltipVisible = true;
        positionTooltip(x, y);
      };

      img.onerror = function () {
        console.error("Error al cargar la imagen:", imageSrc);
        // No mostrar tooltip si la imagen no carga
        return;
      };

      img.src = imageSrc;
    } else if (isTooltipVisible) {
      // Si ya está mostrando la misma imagen, solo actualizar posición
      positionTooltip(x, y);
    } else {
      // Si la imagen ya está cargada pero el tooltip no está visible
      tooltip.style.display = "block";
      tooltip.style.opacity = "1";
      isTooltipVisible = true;
      positionTooltip(x, y);
    }
  }

  function positionTooltip(x, y) {
    if (!tooltip || !isTooltipVisible) return;

    // Limitar la frecuencia de actualización de posición
    clearTimeout(positionUpdateTimeout);

    positionUpdateTimeout = setTimeout(() => {
      const mapRect = document
        .querySelector(".map-wrapper")
        .getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();

      // Calcular nueva posición
      let posX = x - mapRect.left + 15;
      let posY = y - mapRect.top - tooltipRect.height / 2;

      // Ajustar para no salir del mapa
      if (posX + tooltipRect.width > mapRect.width - 10) {
        posX = x - mapRect.left - tooltipRect.width - 15;
      }

      if (posY < 10) posY = 10;
      if (posY + tooltipRect.height > mapRect.height - 10) {
        posY = mapRect.height - tooltipRect.height - 10;
      }

      posX = Math.max(
        10,
        Math.min(posX, mapRect.width - tooltipRect.width - 10),
      );
      posY = Math.max(
        10,
        Math.min(posY, mapRect.height - tooltipRect.height - 10),
      );

      tooltip.style.top = `${posY}px`;
      tooltip.style.left = `${posX}px`;

      lastPosition = { x, y };
    }, 16); // ~60fps
  }

  function hideImageTooltip() {
    if (!tooltip || !isTooltipVisible) return;

    tooltip.style.opacity = "0";
    isTooltipVisible = false;

    // Limpiar timeout de posición
    clearTimeout(positionUpdateTimeout);

    // Ocultar después de la transición
    setTimeout(() => {
      if (!isTooltipVisible) {
        tooltip.style.display = "none";
        // No limpiar la imagen para que esté cacheada para la próxima vez
      }
    }, 300);
  }

  function setupInteractions() {
    const mapNumbers = document.querySelectorAll(".map-number");
    if (mapNumbers.length === 0) return;

    // Event listeners para los números del mapa
    mapNumbers.forEach((number) => {
      number.addEventListener("mouseenter", function (e) {
        const id = this.dataset.id;
        const data = municipalitiesData[id];
        if (!data) return;

        currentHoverId = id;
        this.classList.add("hover-active");

        // Mostrar imagen con retraso
        hoverTimeout = setTimeout(() => {
          if (currentHoverId === id && data.image) {
            showImageTooltip(data.image, e.clientX, e.clientY);
          }
        }, 300);
      });

      number.addEventListener("mouseleave", function () {
        const id = this.dataset.id;

        clearTimeout(hoverTimeout);
        this.classList.remove("hover-active");

        if (currentHoverId === id) {
          hideImageTooltip();
          currentHoverId = null;
        }
      });

      // Mover imagen con el cursor (con throttling)
      number.addEventListener("mousemove", function (e) {
        if (currentHoverId === this.dataset.id && isTooltipVisible) {
          positionTooltip(e.clientX, e.clientY);
        }
      });
    });

    // Ocultar tooltip al salir del mapa completo
    document
      .querySelector(".map-wrapper")
      .addEventListener("mouseleave", function () {
        clearTimeout(hoverTimeout);
        clearTimeout(positionUpdateTimeout);

        if (currentHoverId) {
          hideImageTooltip();
          currentHoverId = null;
        }

        // Remover clases de hover
        mapNumbers.forEach((number) => {
          number.classList.remove("hover-active");
        });
      });

    Object.keys(municipalitiesData).forEach((id) => {
      if (municipalitiesData[id].image) {
        const img = new Image();
        img.src = municipalitiesData[id].image;
      }
    });
  }
});
