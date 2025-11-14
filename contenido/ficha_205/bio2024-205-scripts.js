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

// Contenido 2

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const value = parseInt(bar.getAttribute("data-value"));
    const max = parseInt(bar.getAttribute("data-max"));
    const percentage = (value / max) * 100;

    // Animación de la barra
    setTimeout(() => {
      bar.style.width = percentage + "%";
    }, 100);
  });
});

// contenido 3
const contenido3 = document.getElementById("instituciones-involucradas");
if (contenido3) {
  // Procesar datos del Excel
  const instituciones = [
    {
      nombre: "Fundacion ProSierra Nevada de Santa Marta",
      tipos: ["ONG", "Privada", "Nacional"],
    },
    { nombre: "Fundación Santodomingo", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "Environomica", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "Salva tu Río", tipos: ["ONG", "Privada", "Nacional"] },
    {
      nombre: "Fundación Tras La Perla",
      tipos: ["ONG", "Privada", "Nacional"],
    },
    { nombre: "Fundación Nativa", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "Fundación Atelopus", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "Fundación Bachaqueros", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "Fundación SELVA", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "OPePA", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "Coralina", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "ProAves", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "ProCAT", tipos: ["ONG", "Privada", "Nacional"] },
    { nombre: "Asoarhuaco", tipos: ["Indígena", "Nacional"] },
    { nombre: "Invemar", tipos: ["Pública"] },
    { nombre: "Corpamag", tipos: ["Pública"] },
    { nombre: "UAESPNN", tipos: ["Pública"] },
    { nombre: "Universidad del Magdalena", tipos: ["Pública"] },
    { nombre: "Ideam", tipos: ["Pública"] },
    { nombre: "DNP", tipos: ["Pública"] },
    { nombre: "Prosperidad Social", tipos: ["Pública"] },
    { nombre: "Ecopetrol", tipos: ["Pública"] },
    { nombre: "Instituto Humboldt", tipos: ["Pública"] },
    { nombre: "WWF", tipos: ["ONG", "Privada", "Internacional"] },
    { nombre: "TNC", tipos: ["ONG", "Privada", "Internacional"] },
    {
      nombre: "Conservation International",
      tipos: ["ONG", "Privada", "Internacional"],
    },
    { nombre: "WCS", tipos: ["ONG", "Privada", "Internacional"] },
    {
      nombre: "Global Conservation",
      tipos: ["ONG", "Privada", "Internacional"],
    },
    { nombre: "Sacred Forests", tipos: ["ONG", "Privada", "Internacional"] },
    {
      nombre: "Chantecaille Conservation Foundation",
      tipos: ["ONG", "Privada", "Internacional"],
    },
    { nombre: "ACDI/Voca", tipos: ["ONG", "Privada", "Internacional"] },
    {
      nombre: "Gordon and Betty Moore Foundation",
      tipos: ["ONG", "Privada", "Internacional"],
    },
    {
      nombre: "MacArthur Foundation",
      tipos: ["ONG", "Privada", "Internacional"],
    },
    { nombre: "FUPAD", tipos: ["ONG", "Privada", "Internacional"] },
    { nombre: "USAID", tipos: ["Pública", "Internacional"] },
    { nombre: "GTZ", tipos: ["Pública", "Internacional"] },
    { nombre: "GIZ", tipos: ["Pública", "Internacional"] },
    { nombre: "AFD", tipos: ["Pública", "Internacional"] },
    { nombre: "AECID", tipos: ["Pública", "Internacional"] },
    { nombre: "Embrapa", tipos: ["Pública", "Internacional"] },
    {
      nombre: "Misión diplomática - Países Bajos",
      tipos: ["Pública", "Misión diplomática", "Internacional"],
    },
    {
      nombre: "Misión diplomática - Estados Unidos",
      tipos: ["Pública", "Misión diplomática", "Internacional"],
    },
    {
      nombre: "Misión diplomática - Reino Unido",
      tipos: ["Pública", "Misión diplomática", "Internacional"],
    },
    {
      nombre: "Misión diplomática - Japón",
      tipos: ["Pública", "Misión diplomática", "Internacional"],
    },
    {
      nombre: "Misión diplomática - Suiza",
      tipos: ["Pública", "Misión diplomática", "Internacional"],
    },
    {
      nombre: "Misión diplomática - Alemania",
      tipos: ["Pública", "Misión diplomática", "Internacional"],
    },
    {
      nombre: "Misión diplomática - Francia",
      tipos: ["Pública", "Misión diplomática", "Internacional"],
    },
    {
      nombre: "Misión diplomática - España",
      tipos: ["Pública", "Misión diplomática", "Internacional"],
    },
    { nombre: "Banco Mundial", tipos: ["Multilateral"] },
    { nombre: "BID", tipos: ["Multilateral"] },
    { nombre: "GEF", tipos: ["Multilateral"] },
    { nombre: "CAF", tipos: ["Multilateral"] },
  ];

  // Contar instituciones por tipo
  const tiposCount = {
    ONG: 0,
    Indígena: 0,
    Privada: 0,
    Pública: 0,
    "Misión diplomática": 0,
    Nacional: 0,
    Multilateral: 0,
    Internacional: 0,
  };

  // Obtener instituciones por tipo para el tooltip
  const institucionesPorTipo = {
    ONG: [],
    Indígena: [],
    Privada: [],
    Pública: [],
    "Misión diplomática": [],
    Nacional: [],
    Multilateral: [],
    Internacional: [],
  };

  instituciones.forEach((inst) => {
    inst.tipos.forEach((tipo) => {
      tiposCount[tipo]++;
      if (!institucionesPorTipo[tipo].includes(inst.nombre)) {
        institucionesPorTipo[tipo].push(inst.nombre);
      }
    });
  });

  // Convertir a array para Highcharts
  const chartData = Object.entries(tiposCount)
    .filter(([tipo, count]) => count > 0)
    .map(([tipo, count]) => ({
      name: `${tipo} (${count})`,
      y: count,
      percentage: ((count / instituciones.length) * 100).toFixed(1),
      originalName: tipo, // Mantener el nombre original para el tooltip
      instituciones: institucionesPorTipo[tipo], // Lista de instituciones para el tooltip
    }));

  // Crear el gráfico
  Highcharts.chart("instituciones-involucradas", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: 500,
      type: "pie",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
      spacingTop: 0, // Eliminar espacio superior
      spacingBottom: 10,
      marginTop: 0, // Margen superior en 0
    },
    title: {
      text: null,
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      borderColor: "#CCCCCC",
      borderRadius: 8,
      borderWidth: 1,
      useHTML: true, // Habilitar HTML para el tooltip
      formatter: function () {
        const institucionesList = this.point.instituciones
          .map(
            (inst) =>
              `<li style="margin-bottom: 3px; font-size: 11px;">${inst}</li>`
          )
          .join("");

        return `
          <div style="min-width: 200px;">
            <div style="color:${this.point.color}; font-weight: bold; margin-bottom: 8px;">
              ● ${this.point.originalName}
            </div>
            <div style="margin-bottom: 8px;">
              <span style="font-weight: bold;">Cantidad:</span> ${this.point.y}<br/>             
            </div>
            <hr style="margin: 0 !important;" />
            <ul style="margin: 0; padding-left: 15px; ">
              ${institucionesList}
            </ul>
          </div>
        `;
      },
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
      align: "left",
      verticalAlign: "top",
      layout: "vertical",
      x: 10,
      y: 10,
      itemStyle: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "11px",
        fontWeight: "normal",
      },
      itemHoverStyle: {
        color: "#333",
      },
      itemMarginTop: 3,
      itemMarginBottom: 3,
      symbolHeight: 10,
      symbolWidth: 10,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        center: ["45%", "50%"], // Mover hacia arriba (segundo valor más bajo)
        size: "100%",
      },
    },
    series: [
      {
        borderColor: "#ffffff",
        borderWidth: 1,
        name: "Instituciones",
        borderColor: "#ffffff",
        borderWidth: 1,
        colorByPoint: true,
        data: chartData,
      },
    ],
  });
}
