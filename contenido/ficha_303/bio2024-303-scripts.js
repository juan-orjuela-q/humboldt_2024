// ============================================
// CONTENIDO 1 - GRÁFICO DE COLUMNAS
// ============================================
document.addEventListener("DOMContentLoaded", function () {
const contenido1 = document.getElementById("tendencia-perdida");
if (contenido1) {
  Highcharts.chart("tendencia-perdida", {
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
      style: {
        color: "#000",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      categories: ["Consumo", "Comercio", "Mascota", "Artesanía", "Medicina"],
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
      max: 800,
      title: {
        text: "Número de registros",
        style: {
          color: "#000",
        },
      },
      labels: {
        style: {
          color: "#000",
        },
      },
      tickPositions: [0, 100, 200, 300, 400, 500, 600, 700, 800],
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} registros</b></td></tr>',
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
        grouping: true,
      },
    },
    legend: {
      itemStyle: {
        color: "#000",
      },
    },
    series: [
      {
        name: "Aves",
        data: [621, 387, 773, 5, 1],
        color: "#EC7A44",
      },
      {
        name: "Mamíferos",
        data: [642, 454, 534, 63, 15],
        color: "#4AB9AD",
      },
      {
        name: "Reptiles",
        data: [289, 239, 128, 93, 38],
        color: "#056C88",
      },
    ],
  });
}
});

// ============================================
// CONTENIDO 2 - SISTEMA DE FILTROS
// ============================================

// Datos de especies
const speciesData = [
  {
    grupo: "Reptil",
    nombreCientifico: "Boa constrictor",
    nombreComun: "Boa",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: true,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Bothrops asper",
    nombreComun: "Mapaná",
    alimento: false,
    comercio: true,
    mascota: false,
    artesania: false,
    medicina: true,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Crocodylus acutus",
    nombreComun: "Caimán aguja",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: true,
    iic: 0.51,
    iicLevel: "Medio",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Caiman crocodylus fuscus",
    nombreComun: "Babilla",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Chelonoidis carbonarius",
    nombreComun: "Morrocoyo",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: true,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Crotalus durissus",
    nombreComun: "Cascabel",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: true,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Helicops danieli",
    nombreComun: "Mapaná agua",
    alimento: false,
    comercio: false,
    mascota: false,
    artesania: false,
    medicina: true,
    iic: 0.81,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Iguana iguana",
    nombreComun: "Iguana",
    alimento: true,
    comercio: true,
    mascota: false,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Kinosternon scorpioides",
    nombreComun: "Tapaculo",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Micrurus sp.",
    nombreComun: "Coral",
    alimento: false,
    comercio: false,
    mascota: false,
    artesania: false,
    medicina: true,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Podocnemis lewyana",
    nombreComun: "Nuca torcía",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: true,
    iic: 0.93,
    iicLevel: "Alto",
  },
  {
    grupo: "Reptil",
    nombreCientifico: "Trachemys callirostris",
    nombreComun: "Hicotea",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Amazona ochrocephala",
    nombreComun: "Loro",
    alimento: false,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Ara ararauna",
    nombreComun: "Guacamaya",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Ara macao",
    nombreComun: "Colombiana",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Ardea alba",
    nombreComun: "Garza blanca",
    alimento: true,
    comercio: false,
    mascota: false,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Ardea cocoi",
    nombreComun: "Garza morena",
    alimento: true,
    comercio: false,
    mascota: false,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Ardea herodias",
    nombreComun: "Garza",
    alimento: true,
    comercio: true,
    mascota: false,
    artesania: false,
    medicina: false,
    iic: 0.84,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Brotogeris jugularis",
    nombreComun: "Perico cardon",
    alimento: false,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Burhinus bistriatus",
    nombreComun: "Galán",
    alimento: false,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.82,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Cathartes aura",
    nombreComun: "Laura",
    alimento: false,
    comercio: false,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Chauna chavaria",
    nombreComun: "Chavarrí",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.66,
    iicLevel: "Medio",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Colinus cristatus",
    nombreComun: "Codorniz",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: true,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Columbina minuta",
    nombreComun: "Cascaberlita",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Columbina talpacoti",
    nombreComun: "Tierrerita",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Coragyps atratus",
    nombreComun: "Golero",
    alimento: false,
    comercio: false,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Dendrocygna autumnalis",
    nombreComun: "Pisingo",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Dendrocygna viduata",
    nombreComun: "Viudita",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.66,
    iicLevel: "Medio",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Eupsittula pertinax",
    nombreComun: "Cotorra",
    alimento: false,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Icterus nigrogularis",
    nombreComun: "Toche",
    alimento: false,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Leptotila verreauxi",
    nombreComun: "Turca",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Mycteria americana",
    nombreComun: "Coyongo",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.9,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Ortalis garrula",
    nombreComun: "Guacharaca",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Patagioenas cayennensis",
    nombreComun: "Guarumera",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.99,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Penelope purpurascens",
    nombreComun: "Pava congona",
    alimento: true,
    comercio: true,
    mascota: false,
    artesania: false,
    medicina: false,
    iic: 0.37,
    iicLevel: "Bajo",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Phalacrocorax brasilianus",
    nombreComun: "Pato yuyo",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.96,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Sicalis flaveola",
    nombreComun: "Canario",
    alimento: false,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Thraupis episcopus",
    nombreComun: "Azulejo",
    alimento: false,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.91,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Vanellus chilensis",
    nombreComun: "Tanga",
    alimento: true,
    comercio: false,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Ave",
    nombreCientifico: "Volatinia jacarina",
    nombreComun: "Chirrió",
    alimento: false,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.57,
    iicLevel: "Medio",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Alouatta seniculus",
    nombreComun: "Mono arroyero",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Aotus griseimembra",
    nombreComun: "Martica",
    alimento: true,
    comercio: false,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.78,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Ateles hybridus",
    nombreComun: "Marimonda",
    alimento: false,
    comercio: false,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.12,
    iicLevel: "Bajo",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Bradypus variegatus",
    nombreComun: "Perico ligero",
    alimento: true,
    comercio: false,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.93,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Cabassous centralis",
    nombreComun: "Mojan",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: true,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Cebus versicolor",
    nombreComun: "Mico carablanc",
    alimento: false,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Coendou longicaudatus",
    nombreComun: "Puerco espín",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Cuniculus paca",
    nombreComun: "Guartinaja",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 0.99,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Dasyprocta punctata",
    nombreComun: "Ñeque",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Dasypus novemcinctus",
    nombreComun: "Jerre-jerre",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: true,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Didelphis marsupialis",
    nombreComun: "Zorra chusca",
    alimento: true,
    comercio: false,
    mascota: false,
    artesania: false,
    medicina: true,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Eira barbara",
    nombreComun: "Guacharo",
    alimento: true,
    comercio: false,
    mascota: true,
    artesania: false,
    medicina: true,
    iic: 0.76,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Herpailurus yagouaroundi",
    nombreComun: "Gato pardo",
    alimento: true,
    comercio: false,
    mascota: false,
    artesania: false,
    medicina: false,
    iic: 0.99,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Hydrochoerus h. isthmius",
    nombreComun: "Ponche, cacó",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Leopardus pardalis",
    nombreComun: "Tigrillo",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Lontra longicaudis",
    nombreComun: "Perro de agua",
    alimento: true,
    comercio: false,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 0.45,
    iicLevel: "Medio",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Mazama sanctaemartae",
    nombreComun: "Venado",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Myrmecophaga tridactyla",
    nombreComun: "Rabo decaballo",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Notosciurus granatensis",
    nombreComun: "Ardita",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Odocoileus virginianus",
    nombreComun: "Venado racimo",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.39,
    iicLevel: "Bajo",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Panthera onca",
    nombreComun: "Tigre jaguar",
    alimento: false,
    comercio: true,
    mascota: false,
    artesania: true,
    medicina: false,
    iic: 0.51,
    iicLevel: "Medio",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Pecari tajacu",
    nombreComun: "Zaino",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 0.99,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Puma concolor",
    nombreComun: "Puma",
    alimento: false,
    comercio: false,
    mascota: false,
    artesania: true,
    medicina: false,
    iic: 0.31,
    iicLevel: "Bajo",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Sylvilagus floridanus",
    nombreComun: "Conejo",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: true,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Tamandua mexicana",
    nombreComun: "Pundungo",
    alimento: true,
    comercio: false,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 1.0,
    iicLevel: "Alto",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Tapirus terrestris",
    nombreComun: "Danta",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.24,
    iicLevel: "Bajo",
  },
  {
    grupo: "Mamífero",
    nombreCientifico: "Tayassu pecari",
    nombreComun: "Puerco manao",
    alimento: true,
    comercio: true,
    mascota: true,
    artesania: false,
    medicina: false,
    iic: 0.28,
    iicLevel: "Bajo",
  },
];

// Sistema de filtros simplificado y funcional
document.addEventListener("DOMContentLoaded", function () {
  console.log("Inicializando sistema de filtros...");

  // Elementos del DOM
  const countDisplay = document.getElementById("count");
  const speciesContainer = document.getElementById("species-cards");
  const clearFiltersBtn = document.getElementById("clear-filters");

  if (!countDisplay || !speciesContainer) {
    console.error("Elementos críticos no encontrados");
    return;
  }

  // Estado de filtros
  let currentFilters = {
    grupo: "Reptil",
    usos: [], // Array de objetos {uso, valor}
    iicLevels: [],
  };

  // Función para obtener el radio button seleccionado
  function getSelectedRadio(name) {
    const radio = document.querySelector(`input[name="${name}"]:checked`);
    return radio ? radio.value : "Reptil";
  }

  // Función para obtener los usos seleccionados (versión con botones)
  function getSelectedCheckboxes(name) {
    if (name === "use-filter") {
      const switches = document.querySelectorAll(".use-switch");
      const selectedUses = [];
      Array.from(switches).forEach((sw) => {
        selectedUses.push({
          uso: sw.dataset.use,
          valor: sw.checked,
        });
      });
      return selectedUses;
    } else {
      const checkboxes = document.querySelectorAll(
        `input[name="${name}"]:checked`
      );
      return Array.from(checkboxes).map((cb) => cb.value);
    }
  }

  // Aplicar filtros
  function applyFilters() {
    console.log("Aplicando filtros...");

    // Actualizar filtros actuales
    currentFilters.grupo = getSelectedRadio("biological-group");
    currentFilters.usos = getSelectedCheckboxes("use-filter");
    currentFilters.iicLevels = getSelectedCheckboxes("iic-filter");

    console.log("Filtros actuales:", currentFilters);

    // Filtrar especies
    let filteredSpecies = speciesData.filter((species) => {
      // Filtrar por grupo
      if (species.grupo !== currentFilters.grupo) return false;

      // Filtrar por usos (OR - al menos uno debe coincidir)
      if (currentFilters.usos.length > 0) {
        // Si todos los switches están activos, no filtrar por uso
        const allActive = currentFilters.usos.every(u => u.valor === true);
        if (!allActive) {
          // Al menos uno de los usos activos debe coincidir
          const algunoCoincide = currentFilters.usos.some(usoFilter => {
            return usoFilter.valor === true && species[usoFilter.uso] === true;
          });
          if (!algunoCoincide) return false;
        }
      }

      // Filtrar por IIC (OR - al menos uno debe coincidir)
      if (currentFilters.iicLevels.length > 0) {
        if (!currentFilters.iicLevels.includes(species.iicLevel)) return false;
      }

      return true;
    });

    // Mostrar resultados
    displaySpecies(filteredSpecies);
    updateCount(filteredSpecies.length);
  }

  // Actualizar contador
  function updateCount(count) {
    countDisplay.textContent = `Mostrando ${count} especies`;
  }

  // Mostrar especies
  function displaySpecies(speciesList) {
    speciesContainer.innerHTML = "";

    if (speciesList.length === 0) {
      speciesContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          <p style="font-size: 18px; font-weight: 600; color: #333; margin-bottom: 15px;">
            No se encontraron especies con los filtros seleccionados.
          </p>
          <p style="color: #666; font-size: 16px;">
            Intenta con diferentes criterios de búsqueda.
          </p>
        </div>
      `;
      return;
    }

    speciesList.forEach((species) => {
      const card = document.createElement("div");
      card.className = "species-card";

      // Determinar imagen según el grupo
      let grupoIcon = "";
      const grupoClass = species.grupo.toLowerCase().replace("í", "i");

      switch (species.grupo) {
        case "Reptil":
          grupoIcon = "./input/img/Ficha-303-icono-reptil.png";
          break;
        case "Ave":
          grupoIcon = "./input/img/Ficha-303-icono-ave.png";
          break;
        case "Mamífero":
          grupoIcon = "./input/img/Ficha-303-icono-mamifero.png";
          break;
        default:
          grupoIcon = "./input/img/Frame.svg"; // fallback
      }

      // Imágenes para los usos
      const alimentoImg = "./input/img/Ficha-303-icono-alimento.png";
      const comercioImg = "./input/img/Ficha-303-icono-comercio.png";
      const mascotaImg = "./input/img/Ficha-303-icono-mascota.png";
      const artesaniaImg = "./input/img/Ficha-303-icono-artesania.png";
      const medicinaImg = "./input/img/Ficha-303-icono-medicinal.png";

      card.innerHTML = `
    <div class="card-header">
      <div class="group-icon ${grupoClass}">
        <img src="${grupoIcon}" alt="${species.grupo}">
        <div class="species-type">${species.grupo}</div>
      </div>
      <div class="species-info">       
        <h3 class="species-name">${species.nombreComun}</h3>
        <p class="species-scientific">${species.nombreCientifico}</p>
      </div>
    </div>
    
    <div class="uses-section">
      <div class="uses-title"></div>
      <div class="uses-grid">
        <div class="use-item">
          <div class="use-icon">
            <img src="${alimentoImg}" alt="Alimento">
          </div>
          <span class="use-label">Alimento:</span>
          <span class="use-status ${species.alimento ? "yes" : "no"}">
            ${species.alimento ? "Sí" : "No"}
          </span>
        </div>
        <div class="use-item">
          <div class="use-icon">
            <img src="${comercioImg}" alt="Comercio">
          </div>
          <span class="use-label">Comercio:</span>
          <span class="use-status ${species.comercio ? "yes" : "no"}">
            ${species.comercio ? "Sí" : "No"}
          </span>
        </div>
        <div class="use-item">
          <div class="use-icon">
            <img src="${mascotaImg}" alt="Mascota">
          </div>
          <span class="use-label">Mascota:</span>
          <span class="use-status ${species.mascota ? "yes" : "no"}">
            ${species.mascota ? "Sí" : "No"}
          </span>
        </div>
        <div class="use-item">
          <div class="use-icon">
            <img src="${artesaniaImg}" alt="Artesanía">
          </div>
          <span class="use-label">Artesanía:</span>
          <span class="use-status ${species.artesania ? "yes" : "no"}">
            ${species.artesania ? "Sí" : "No"}
          </span>
        </div>
        <div class="use-item">
          <div class="use-icon">
            <img src="${medicinaImg}" alt="Medicina">
          </div>
          <span class="use-label">Medicina:</span>
          <span class="use-status ${species.medicina ? "yes" : "no"}">
            ${species.medicina ? "Sí" : "No"}
          </span>
        </div>
      </div>
    </div>
    
    <div class="iic-section">
      <div class="iic-container">
        <div class="iic-value">
          <span>IIC:</span> ${species.iic}
        </div>
        <div class="iic-badge ${species.iicLevel.toLowerCase()}">
          <span>IIC:</span> ${species.iicLevel}
        </div>
      </div>
    </div>
  `;

      speciesContainer.appendChild(card);
    });
  }

  // Configurar event listeners
  function setupEventListeners() {
    // Radio buttons del grupo biológico
    const biologicalRadios = document.querySelectorAll(
      'input[name="biological-group"]'
    );
    biologicalRadios.forEach((radio) => {
      radio.addEventListener("change", applyFilters);
    });

    // Switches de usos
    const useSwitches = document.querySelectorAll(".use-switch");
    useSwitches.forEach((input) => {
      input.addEventListener("change", function () {
        applyFilters();
      });
    });

    // Checkboxes de IIC
    const iicCheckboxes = document.querySelectorAll('input[name="iic-filter"]');
    iicCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", applyFilters);
    });

    // Botón limpiar filtros
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", () => {
        // Restablecer radio buttons
        biologicalRadios.forEach((radio) => {
          radio.checked = radio.value === "Reptil";
        });

        // Restablecer switches de usos (activados por defecto)
        const allUseSwitches = document.querySelectorAll(".use-switch");
        allUseSwitches.forEach((sw) => {
          sw.checked = true;
        });

        // Desmarcar checkboxes de IIC
        iicCheckboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });

        // Aplicar filtros
        applyFilters();
      });
    }

    // Configurar desplegables
    const usosDropdownHeader = document.getElementById("usos-dropdown-header");
    const usosDropdownContent = document.getElementById(
      "usos-dropdown-content"
    );
    const usosDropdownIcon = document.getElementById("usos-dropdown-icon");

    usosDropdownHeader.addEventListener("click", function () {
      usosDropdownContent.classList.toggle("open");
      usosDropdownIcon.classList.toggle("open");
    });

    const iicDropdownHeader = document.getElementById("iic-dropdown-header");
    const iicDropdownContent = document.getElementById("iic-dropdown-content");
    const iicDropdownIcon = document.getElementById("iic-dropdown-icon");

    iicDropdownHeader.addEventListener("click", function () {
      iicDropdownContent.classList.toggle("open");
      iicDropdownIcon.classList.toggle("open");
    });

    // Abrir desplegables por defecto
    usosDropdownContent.classList.add("open");
    usosDropdownIcon.classList.add("open");
    iicDropdownContent.classList.add("open");
    iicDropdownIcon.classList.add("open");
  }

  // Inicializar
  setupEventListeners();
  applyFilters();

  console.log("Sistema de filtros inicializado correctamente");
});

// Asegurar que se ejecute incluso si hay problemas con DOMContentLoaded
window.addEventListener("load", function () {
  // Reintentar si no se inicializó correctamente
  if (
    document.getElementById("species-cards") &&
    !document.querySelector(".species-card")
  ) {
    console.log("Reintentando inicialización...");
    setTimeout(() => {
      if (
        document.querySelectorAll('input[name="biological-group"]').length > 0
      ) {
        document.dispatchEvent(new Event("DOMContentLoaded"));
      }
    }, 100);
  }
});
