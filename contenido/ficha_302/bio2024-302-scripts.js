// Datos de la fauna silvestre
const faunaData = [
  {
    id: 1,
    nombre: "Zaino",
    nombreCientifico: "Dicotyles tajacu",
    familia: "Tayassuidae",
    imagen: "./input/img/ficha-302-zaino.png",
    precioCompra: "$ 18 000",
    precioVenta: "$ 22 000",
    unidad: "(kg)"
  },
  {
    id: 2,
    nombre: "Venado",
    nombreCientifico: "Mazama americana",
    familia: "Cervidae",
    imagen: "./input/img/ficha-302-venado.png",
    precioCompra: "$ 12 000",
    precioVenta: "$ 25 000",
    unidad: "(kg)"
  },
  {
    id: 3,
    nombre: "Ñeque",
    nombreCientifico: "Dasyprocta punctata",
    familia: "Dasyproctidae",
    imagen: "./input/img/ficha-302-neque.png",
    precioCompra: "$ 13 000",
    precioVenta: "$ 18 000",
    unidad: "(kg)"
  },
  {
    id: 4,
    nombre: "Ponche",
    nombreCientifico: "Hydrochoenus isthmius",
    familia: "Caviidae",
    imagen: "./input/img/ficha-302-ponche.png",
    precioCompra: "$ 13 000",
    precioVenta: "$ 18 000",
    unidad: "(kg)"
  },
  {
    id: 5,
    nombre: "Guartinaja",
    nombreCientifico: "Cuniculus paca",
    familia: "Cuniculidae",
    imagen: "./input/img/ficha-302-guartinaja.png",
    precioCompra: "$ 20 000",
    precioVenta: "$ 25 000",
    unidad: "(kg)"
  },
  {
    id: 6,
    nombre: "Armadillo",
    nombreCientifico: "Dasypus novemcinctus",
    familia: "Dasypodidae",
    imagen: "./input/img/ficha-302-armadillo.png",
    precioCompra: "$ 24 000",
    precioVenta: "$ 30 000",
    unidad: "(kg)"
  },
  {
    id: 7,
    nombre: "Conejo",
    nombreCientifico: "Sylvilagus floridanus",
    familia: "Leporidae",
    imagen: "./input/img/ficha-302-conejo.png",
    precioCompra: "$ 24 000",
    precioVenta: "$ 30 000",
    unidad: "(kg)"
  },
  {
    id: 8,
    nombre: "Morrocoyo",
    nombreCientifico: "Chelonoidis carbonarius",
    familia: "Testudinidae",
    imagen: "./input/img/ficha-302-morrocoyo.png",
    precioCompra: "$ 6 000",
    precioVenta: "$ 10 000",
    unidad: "(kg)"
  },
  {
    id: 9,
    nombre: "Hicotea",
    nombreCientifico: "Trachemys callirostris",
    familia: "Emydidae",
    imagen: "./input/img/ficha-302-Hicotea.png",
    precioCompra: "$ 6 000",
    precioVenta: "$ 10 000",
    unidad: "c/u"
  },
  {
    id: 10,
    nombre: "Pisingo",
    nombreCientifico: "Dendrocygna autumnalis",
    familia: "Anatidae",
    imagen: "./input/img/ficha-302-pisingo.png",
    precioCompra: "$ 4 000",
    precioVenta: "$ 6 000",
    unidad: "c/u"
  },
  {
    id: 11,
    nombre: "Barraquete",
    nombreCientifico: "Anas discors",
    familia: "Anatidae",
    imagen: "./input/img/ficha-302-barraquete.png",
    precioCompra: "$ 2 000",
    precioVenta: "$ 4 000",
    unidad: "c/u"
  },
  {
    id: 12,
    nombre: "Pato yuyo",
    nombreCientifico: "Phalacrocorax brasilianus",
    familia: "Phalacrocoracidae",
    imagen: "./input/img/ficha-302-pato.png",
    precioCompra: "$ 3 000",
    precioVenta: "$ 7 000",
    unidad: "c/u"
  }
];

// Variables de paginación
let currentPage = 1;
const itemsPerPage = 6;
let totalPages = Math.ceil(faunaData.length / itemsPerPage);

// Función para generar las filas de la tabla
function generarFilasTabla() {
  const tbody = document.getElementById('fauna-tbody');
  tbody.innerHTML = '';

  faunaData.forEach((animal, index) => {
    const row = document.createElement('tr');
    row.className = 'simple-table fauna-row';
    row.setAttribute('data-id', animal.id);
    
    row.innerHTML = `
      <td class="img-column">
        <img src="${animal.imagen}" alt="${animal.nombre}" />
        <div>
          <p class="name">${animal.nombre}</p>
          <p class="scientific-name">${animal.nombreCientifico}</p>
          <p class="family">Familia: ${animal.familia}</p>
        </div>
      </td>
      <td>
        <p class="price-label">Precio de compra ${animal.unidad}</p>
        <p class="price-value">${animal.precioCompra}</p>
      </td>
      <td>
        <p class="price-label">Precio de venta ${animal.unidad}</p>
        <p class="price-value">${animal.precioVenta}</p>
      </td>
    `;
    
    tbody.appendChild(row);
  });

  actualizarPaginacion();
}

// Función para actualizar la paginación
function actualizarPaginacion() {
  // Ocultar todas las filas
  const todasLasFilas = document.querySelectorAll('.fauna-row');
  todasLasFilas.forEach(row => row.classList.remove('active'));
  
  // Mostrar solo las filas de la página actual
  const inicio = (currentPage - 1) * itemsPerPage;
  const fin = inicio + itemsPerPage;
  
  for (let i = inicio; i < fin && i < todasLasFilas.length; i++) {
    todasLasFilas[i].classList.add('active');
  }
  
  // Actualizar información de página
  document.getElementById('page-info').textContent = `Página ${currentPage} de ${totalPages}`;
  
  // Actualizar estado de los botones
  document.getElementById('prev-page').disabled = currentPage === 1;
  document.getElementById('next-page').disabled = currentPage === totalPages;
}

// Función para cambiar de página
function cambiarPagina(direccion) {
  if (direccion === 'next' && currentPage < totalPages) {
    currentPage++;
  } else if (direccion === 'prev' && currentPage > 1) {
    currentPage--;
  }
  actualizarPaginacion();
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  generarFilasTabla();
  
  // Event listeners para los botones de paginación
  document.getElementById('prev-page').addEventListener('click', () => cambiarPagina('prev'));
  document.getElementById('next-page').addEventListener('click', () => cambiarPagina('next'));
});

// También exportar funciones para uso externo si es necesario
window.faunaPaginacion = {
  cambiarPagina,
  actualizarPaginacion,
  generarFilasTabla
};


