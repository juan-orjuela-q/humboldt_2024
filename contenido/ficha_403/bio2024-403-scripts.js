// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar los modales
  initModals();
  
  // Otras funcionalidades específicas
  initProjectSpecificFunctions();
});

function initModals() {
  // Botones que abren modales
  const componentButtons = document.querySelectorAll('.component-btn');
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const closeButtons = document.querySelectorAll('.modal-close');
  
  // Abrir modal al hacer clic en un botón
  componentButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.stopPropagation(); // Evitar propagación
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevenir scroll
        
        // Añadir clase para animación
        setTimeout(() => {
          modal.querySelector('.modal-content').classList.add('modal-open');
        }, 10);
      }
    });
  });
  
  // Cerrar modal al hacer clic en el botón de cerrar
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal-overlay');
      closeModal(modal);
    });
  });
  
  // Cerrar modal al hacer clic fuera del contenido
  modalOverlays.forEach(modal => {
    modal.addEventListener('click', function(event) {
      if (event.target === this) {
        closeModal(this);
      }
    });
  });
  
  // Cerrar modal con la tecla Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const openModal = document.querySelector('.modal-overlay[style*="display: flex"]');
      if (openModal) {
        closeModal(openModal);
      }
    }
  });
  
  // Función para cerrar modal
  function closeModal(modal) {
    if (modal) {
      // Remover clase de animación
      modal.querySelector('.modal-content').classList.remove('modal-open');
      
      // Pequeña animación de salida
      modal.querySelector('.modal-content').style.animation = 'modalFadeOut 0.3s ease';
      
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
        // Resetear animación
        modal.querySelector('.modal-content').style.animation = '';
      }, 250);
    }
  }
  
  // Añadir keyframes para animación de salida
  const style = document.createElement('style');
  style.textContent = `
    @keyframes modalFadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
  `;
  document.head.appendChild(style);
}

function initProjectSpecificFunctions() {
  // Funciones específicas del proyecto
  console.log('Funciones del proyecto Bio2024-403 inicializadas');
  
  // Añadir efecto de ripple a los botones (opcional)
  const buttons = document.querySelectorAll('.component-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Crear efecto ripple
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        top: ${y}px;
        left: ${x}px;
      `;
      
      this.appendChild(ripple);
      
      // Remover el elemento después de la animación
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Añadir estilos para el efecto ripple
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    .component-btn {
      position: absolute;
      overflow: hidden;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);
}

// Función para actualizar contenido dinámicamente
function updateComponentContent(modalId, newContent) {
  const modal = document.getElementById(modalId);
  if (modal) {
    const modalBody = modal.querySelector('.modal-body');
    if (modalBody) {
      modalBody.innerHTML = newContent;
    }
  }
}

// Exportar funciones si es necesario
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initModals,
    initProjectSpecificFunctions,
    updateComponentContent
  };
}


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
