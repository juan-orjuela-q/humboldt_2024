/* contenido 1 */
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

  //Diagrama de venn

  const labels = [
    // Montes de María (izquierda)
    {
      text: "Vara de humo",
      x: 340,
      y: 180,
      region: "Montes de María",
      tooltip: "<h3>Vara de humo</h3><p><em>Cordia alliodora</em></p>",
    },

    {
      text: "Yuca",
      x: 240,
      y: 230,
      region: "Montes de María",
      tooltip: "<h3>Yuca</h3><p><em>Manihot esculenta</em></p>",
    },
    {
      text: "Palma amarga",
      x: 350,
      y: 230,
      region: "Montes de María",
      tooltip: "<h3>Palma amarga</h3><p><em>Sabal mauritiformis</em></p>",
    },

    {
      text: "Ñame",
      x: 230,
      y: 280,
      region: "Montes de María",
      color: "#f4a261",
      tooltip: "<h3>Ñame</h3><p><em>Dioscorea spp.</em></p>",
    },
    {
      text: "Plátano",
      x: 340,
      y: 280,
      region: "Montes de María",
      color: "#f4a261",
      tooltip: "<h3>Plátano</h3><p><em>Musa spp.</em></p>",
    },

    {
      text: "Mataratrón",
      x: 300,
      y: 330,
      region: "Montes de María",
      tooltip: "<h3>Matarratón</h3><p><em>Gliricidia sepium</em></p>",
    },
    {
      text: "Totumo",
      x: 250,
      y: 380,
      region: "Montes de María",
      tooltip: "<h3>Totumo</h3><p><em>Crescentia cujete</em></p>",
    },

    {
      text: "Maíz",
      x: 220,
      y: 430,
      region: "Montes de María",
      tooltip: "<h3>Maíz</h3><p><em>Zea maiz</em></p>",
    },
    {
      text: "Ají",
      x: 240,
      y: 480,
      region: "Montes de María",
      tooltip: "<h3>Ají</h3><p><em>Capsicum annuum</em></p>",
    },

    {
      text: "Campano",
      x: 360,
      y: 480,
      region: "Montes de María",
      tooltip: "<h3>Campano o samán</h3><p><em>Samanea saman</em></p>",
    },

    // Barranquilla (derecha)
    {
      text: "Algorrobo",
      x: 620,
      y: 200,
      region: "Barranquilla",
      tooltip: "<h3>Algarrobo</h3><p><em>Hymenaea courbaril</em></p>",
    },
    {
      text: "Cañandonga",
      x: 680,
      y: 250,
      region: "Barranquilla",
      tooltip: "<h3>Cañandonga</h3><p><em>Cassia grandis</em></p>",
    },
    {
      text: "Bijao de hoja pequeña",
      x: 690,
      y: 300,
      region: "Barranquilla",
      tooltip:
        "<h3>Bijao de hoja pequeña</h3><p><em>Thalia geniculata</em></p>",
    },
    {
      text: "Cilantro cimarrón",
      x: 700,
      y: 350,
      region: "Barranquilla",
      tooltip: "<h3>Cilantro cimarrón</h3><p><em>Eryngium foetidum</em></p>",
    },
    {
      text: "Batata",
      x: 720,
      y: 400,
      region: "Barranquilla",
      tooltip: "<h3>Batata</h3><p><em>Ipomoea batatas</em></p>",
    },

    { text: "Zarzaparrilla", x: 600, y: 480, region: "Barranquilla" },

    // Becerril (inferior)
    {
      text: "Camajón",
      x: 420,
      y: 620,
      region: "Becerril",
      tooltip: "<h3>Camajón</h3><p><em>Sterculia apetala</em></p>",
    },
    {
      text: "Caracolí",
      x: 570,
      y: 620,
      region: "Becerril",
      tooltip: "<h3>Caracolí</h3><p><em>Anacardium excelsum</em></p>",
    },
    { text: "Guáimaro", x: 480, y: 670, region: "Becerril" },
    {
      text: "Orejero",
      x: 480,
      y: 570,
      region: "Becerril",
      tooltip: "<h3>Orejero</h3><p><em>Enterolobium cyclocarpum</em></p>",
    },

    // Centro (intersección de las tres)
    {
      text: "Jobo",
      x: 435,
      y: 350,
      region: "Centro",
      tooltip: "<h3>Jobo</h3><p><em>Spondias mombin</em></p>",
    },
    {
      text: "Mamón",
      x: 515,
      y: 350,
      region: "Centro",
      tooltip: "<h3>Mamón</h3><p><em>Melicoccus bijugatus</em></p>",
    },
    {
      text: "Corozo",
      x: 440,
      y: 400,
      region: "Centro",
      tooltip: "<h3>Corozo</h3><p><em>Bactris guineensis</em></p>",
    },
    {
      text: "Bijao",
      x: 520,
      y: 400,
      region: "Centro",
      tooltip: "<h3>Bijao</h3><p><em>Calathea lutea</em></p>",
    },
    {
      text: "Guásimo",
      x: 470,
      y: 450,
      region: "Centro",
      tooltip: "<h3>Guásimo</h3><p><em>Guazuma ulmifolia</em></p>",
    },
  ];

  // referencias
  const svg = document.getElementById("venn");
  const labelsLayer = document.getElementById("labels-layer");
  const svgns = "http://www.w3.org/2000/svg";
  const paddingX = 12,
    paddingY = 8; // padding dentro de la caja

  // función que crea cada caja con texto (crea <g> con <rect> y <text>)
  function createLabelNode(item) {
    const g = document.createElementNS(svgns, "g");
    g.setAttribute("class", "label-group");

    // texto (temporal en DOM para medir)
    const text = document.createElementNS(svgns, "text");
    text.setAttribute("class", "label-text");
    text.setAttribute("x", item.x);
    text.setAttribute("y", item.y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.textContent = item.text;

    // añadir texto primero (para medir bbox)
    g.appendChild(text);
    labelsLayer.appendChild(g);

    // ahora medir y crear rect detrás
    // usar getBBox para calcular ancho/alto del texto
    const bbox = text.getBBox();
    const rectWidth = bbox.width + paddingX * 2;
    const rectHeight = bbox.height + paddingY * 2;
    const rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("class", "label-rect");
    rect.setAttribute("x", item.x - rectWidth / 2);
    rect.setAttribute("y", item.y - rectHeight / 2);
    rect.setAttribute("width", rectWidth);
    rect.setAttribute("height", rectHeight);
    rect.setAttribute("rx", 8);
    rect.setAttribute("ry", 8);

    // 👇 si el item tiene color personalizado, lo aplica
    if (item.color) {
      rect.style.fill = item.color;
    }

    // mover rect detrás del texto
    g.insertBefore(rect, text);

    // hover: mostrar tooltip con el texto (opcional)
    // --- TOOLTIP PERSONALIZADO ---
    g.addEventListener("mouseenter", (e) => {
      showTooltip(item.tooltip || "Sin información", e.pageX, e.pageY);
    });
    g.addEventListener("mousemove", (e) => {
      moveTooltip(e.pageX, e.pageY);
    });
    g.addEventListener("mouseleave", hideTooltip);
    return g;
  }

  // color por región (puedes ajustar)
  function getBoxColor(region) {
    switch (region) {
      case "Montes de María":
        return "#f1f97e"; // amarillo-verde
      case "Barranquilla":
        return "#f7e199"; // distinto tono
      case "Becerril":
        return "#d3f2c5";
      case "Centro":
        return "#dff0b8";
      default:
        return "#eaf6d6";
    }
  }

  // tooltip helpers
  const tooltip = document.getElementById("tooltip");
  function showTooltip(text, cx, cy) {
    tooltip.style.display = "block";
    tooltip.innerHTML = text;
    // posicionar con pequeño offset
    tooltip.style.left = cx + 14 + "px";
    tooltip.style.top = cy - 18 + "px";
  }
  function moveTooltip(cx, cy) {
    tooltip.style.left = cx + 14 + "px";
    tooltip.style.top = cy - 18 + "px";
  }
  function hideTooltip() {
    tooltip.style.display = "none";
  }

  // crear todos los labels
  labels.forEach((item) => {
    createLabelNode(item);
  });
});

/* contenido 2 */

const container = document.getElementById("barranquilla-graphic");
if (container) {
  Highcharts.chart("barranquilla-graphic", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: 600,
      type: "pie",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    title: {
      text: "Expedición científica sobre la biodiversidad funcional en agroecosistemas",
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
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
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
            name: "Medicinal",
            y: 66,
            sliced: false,
            selected: true,
            color: "#75C8DA",
          },
          {
            name: "Alimentos",
            y: 33,
            color: "#D50000",
          },
          {
            name: "Materiales",
            y: 9,
            color: "#E9C101",
          },
          {
            name: "Usos ambientales",
            y: 2,
            color: "#79AB2B",
          },
          {
            name: "Alimento de animales",
            y: 3,
            color: "#F59C00",
          },
          {
            name: "Cosméticos",
            y: 2,
            color: "#00748B",
          },
          {
            name: "Sociales (incluye espir)",
            y: 23,
            color: "#BEE2E9",
          },
          {
            name: "Veneno o tóxico",
            y: 1,
            color: "#695DA6",
          },
          {
            name: "Leña o combustible",
            y: 0,
            color: "#FC7268",
          },
        ],
      },
    ],
  });

  Highcharts.chart("montes-graphic", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: 600,
      type: "pie",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    title: {
      text: "Expedición científica sobre la biodiversidad funcional en agroecosistemas",
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
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
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
            name: "Medicinal",
            y: 21,
            color: "#75C8DA",
          },
          {
            name: "Alimentos",
            y: 37,
            color: "#D50000",
          },
          {
            name: "Materiales",
            y: 59,
            sliced: false,
            selected: true,
            color: "#E9C101",
          },

          {
            name: "Usos ambientales",
            y: 8,
            color: "#79AB2B",
          },
          {
            name: "Alimento de animales",
            y: 10,
            color: "#F59C00",
          },
          {
            name: "Cosméticos",
            y: 1,
            color: "#00748B",
          },
          {
            name: "Sociales (incluye espir)",
            y: 3,
            color: "#BEE2E9",
          },

          {
            name: "Veneno o tóxico",
            y: 0,
            color: "#695DA6",
          },
          {
            name: "Leña o combustible",
            y: 0,
            color: "#FC7268",
          },
        ],
      },
    ],
  });

  Highcharts.chart("becerril-graphic", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: 600,
      type: "pie",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    title: {
      text: "Expedición científica sobre la biodiversidad funcional en agroecosistemas",
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
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
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
            name: "Medicinal",
            y: 71,
            color: "#75C8DA",
          },
          {
            name: "Alimentos",
            y: 74,
            sliced: false,
            selected: true,
            color: "#D50000",
          },
          {
            name: "Materiales",
            y: 59,
            color: "#E9C101",
          },
          {
            name: "Usos ambientales",
            y: 30,
            color: "#79AB2B",
          },
          {
            name: "Alimento de animales",
            y: 0,
            color: "#F59C00",
          },
          {
            name: "Cosméticos",
            y: 0,
            color: "#00748B",
          },
          {
            name: "Sociales (incluye espiritual y religioso)",
            y: 54,
            color: "#BEE2E9",
          },
          {
            name: "Veneno o tóxico",
            y: 6,
            color: "#695DA6",
          },
          {
            name: "Leña o combustible",
            y: 8,
            color: "#FC7268",
          },
        ],
      },
    ],
  });
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tab a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remover clase active de todos los padres
      document.querySelectorAll(".tab").forEach((tab) => {
        tab.classList.remove("active");
      });

      // Agregar clase active al padre del enlace clickeado
      this.parentElement.classList.add("active");

      const target = this.getAttribute("href");

      // Ocultar todos los contenidos de pestañas
      document.querySelectorAll(".tab-content > div").forEach((content) => {
        content.style.display = "none";
      });

      // Mostrar el contenido objetivo con fadeIn
      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.style.display = "block";
        targetElement.style.opacity = "0";

        let opacity = 0;
        const fadeIn = setInterval(() => {
          if (opacity >= 1) {
            clearInterval(fadeIn);
          }
          targetElement.style.opacity = opacity.toString();
          opacity += 0.1;
        }, 60); // 600ms total (60ms * 10 steps)
      }
    });
  });
});
