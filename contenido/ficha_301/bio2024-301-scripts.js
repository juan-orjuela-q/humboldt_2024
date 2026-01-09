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

//Contenido 2
//Contenido 2
const container = document.getElementById("proporcion-masa");
if (container) {
  // Función para determinar el alto según el ancho de pantalla
  const getChartHeight = () => {
    return window.innerWidth < 1175 ? "75%" : "90%";
  };

  Highcharts.chart("proporcion-masa", {
    chart: {
      type: "column",
      backgroundColor: "none",
      height: getChartHeight(), // Alto dinámico
      style: {
        fontFamily: "Rubik, sans-serif",
        color: "#000",
        fontSize: "14px",
      },
      events: {
        render: function() {
          // Agregar iconos después de que el chart se renderice
          addCustomIcons(this);
        }
      }
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
      lineColor: '#000',
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
        format: '{value}'
      },
      max: 40,
      gridLineWidth: 0,
      lineColor: '#000',
      lineWidth: 1
    },
    legend: {
      enabled: true,
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      itemStyle: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
      itemHoverStyle: {
        color: "#00748B"
      }
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        color: "#F59C00",
        dataLabels: {
          enabled: true,
          format: '{y}',
          style: {
            color: "#000",
            fontFamily: "Rubik, sans-serif",
            fontSize: "14px",
            textOutline: "none",
            fontWeight: "bold"
          },
          verticalAlign: 'top',
          y: -20
        }
      }
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
        '<span style="color:#00748B; font-family: Rubik, sans-serif">{point.name}</span>: <b style="color:#000; font-family: Rubik, sans-serif">{point.y}</b>',
    },
    series: [
      {
        name: "Clase de animal depredado",
        colorByPoint: false,
        data: [
          {
            name: "Cerdo",
            y: 34,
            iconUrl: "./input/img/image 141.svg"
          },
          {
            name: "Camero",
            y: 27,
            iconUrl: "./input/img/image 142.svg"
          },
          {
            name: "Perro",
            y: 22,
            iconUrl: "./input/img/image 143.svg"
          },
          {
            name: "Bovino",
            y: 12,
            iconUrl: "./input/img/image 144.svg"
          }
        ],
      },
    ],
  });
}

// Función para agregar iconos personalizados encima de cada barra
function addCustomIcons(chart) {
  // Limpiar iconos anteriores
  const existingIcons = chart.container.querySelectorAll('.custom-bar-icon');
  existingIcons.forEach(icon => icon.remove());
  
  // Agregar nuevos iconos
  chart.series[0].data.forEach((point, index) => {
    const graphic = point.graphic;
    if (graphic) {
      const barBox = graphic.getBBox();
      
      // Crear elemento de imagen
      const icon = document.createElement('img');
      icon.className = 'custom-bar-icon';
      icon.src = point.options.iconUrl || 'default-icon.png';
      icon.alt = point.name;
      icon.style.position = 'absolute';
      icon.style.width = '60px';
      icon.style.height = '60px';
      icon.style.objectFit = 'contain';
      icon.style.pointerEvents = 'none';
      
      // Posicionar el icono encima de la barra
      icon.style.left = (barBox.x + barBox.width / 1.5) + 'px';
      icon.style.top = (barBox.y - 70) + 'px';
      
      // Agregar el icono al contenedor del chart
      chart.container.appendChild(icon);
    }
  });
}

// Función para redimensionar el chart cuando cambie el tamaño de la ventana
function handleResize() {
  const chart = Highcharts.charts[0];
  if (chart) {
    // Actualizar el alto del chart según el ancho de pantalla
    const newHeight = window.innerWidth < 1175 ? "70%" : "90%";
    chart.update({
      chart: {
        height: newHeight
      }
    });
    
    // Re-renderizar los iconos
    setTimeout(() => addCustomIcons(chart), 100);
  }
}

// Agregar event listener para redimensionamiento
window.addEventListener('resize', handleResize);