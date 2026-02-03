Highcharts.chart("container", {
  chart: {
    type: "bar",
    backgroundColor: "none",
    style: {
      fontFamily: "Rubik, sans-serif",
    },
  },
  title: {
    text: null,
  },
  subtitle: {
    text: null,
  },
  xAxis: {
    categories: [
      "Contaminantes por transporte",
      "Corredor",
      "Escape de cautividad",
      "Liberación en la naturaleza",
      "No intencional / No asistida",
      "Polizones por transporte",
    ],
    title: {
      text: null,
    },
    labels: {
      style: {
        color: "#000000",
        fontFamily: "Rubik, sans-serif",
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: null,
      align: "high",
    },
    labels: {
      overflow: "justify",
      style: {
        color: "#000000",
        fontFamily: "Rubik, sans-serif",
      },
    },
    gridLineWidth: 1,
    lineWidth: 0,
  },
  tooltip: {
    valueSuffix: " registros",
    style: {
      fontFamily: "Rubik, sans-serif",
    },
  },
  plotOptions: {
    bar: {
      color: "#F59C00",
      borderWidth: 0, 
      borderRadius: 0,
      dataLabels: {
        enabled: true,
        style: {
          color: "#000000",
          fontFamily: "Rubik, sans-serif",
          fontWeight: "bold",
          textOutline: "none",
        },
      },
      groupPadding: 0.1,
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    shadow: true,
    itemStyle: {
      color: "#000000",
      fontFamily: "Rubik, sans-serif",
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Número de registros",
      data: [45, 4, 89, 24, 49, 43],
    },
  ],
});

// Funcionalidad del Modal
document.addEventListener('DOMContentLoaded', function() {
  // Elementos del modal
  const modalTrigger = document.getElementById('modal-trigger');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-container');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalCloseBtnFooter = document.getElementById('modal-close-btn');
  
  // Función para abrir el modal
  function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }
  
  // Función para cerrar el modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll del body
  }
  
  // Event listeners
  if (modalTrigger) {
    modalTrigger.addEventListener('click', openModal);
  }
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  
  if (modalCloseBtnFooter) {
    modalCloseBtnFooter.addEventListener('click', closeModal);
  }
  
  // Cerrar modal al hacer clic fuera del contenido
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  
  // Cerrar modal con tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
  
  // Prevenir que el clic dentro del modal cierre el modal
  if (modalContainer) {
    modalContainer.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // Botón de acción dentro del modal
  const modalActionBtn = document.querySelector('.modal-action-btn');
  if (modalActionBtn) {
    modalActionBtn.addEventListener('click', function() {
      // Aquí puedes agregar la acción para el botón "Más información"
      alert('Redirigiendo a más información...');
      // window.location.href = 'enlace-a-mas-informacion.html';
    });
  }
});
