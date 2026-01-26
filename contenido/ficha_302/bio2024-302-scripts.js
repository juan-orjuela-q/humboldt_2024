// Datos de la fauna silvestre exactamente como en la imagen
const faunaData = [
  {
    id: 1,
    orden: "Artiodactyla",
    familia: "Tayas-suldae",
    especie: "Dicotyles tajecu",
    nombreComun: "Zaino",
    precioCompra: "$ 18 000",
    precioVenta: "$ 22 000",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-zaino.png", // Ruta de ejemplo
  },
  {
    id: 2,
    orden: "Artiodactyla",
    familia: "Cervidae",
    especie: "Mazama americana",
    nombreComun: "Venado",
    precioCompra: "$ 12 000",
    precioVenta: "$ 25 000",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-venado.png",
  },
  {
    id: 3,
    orden: "Anseriformes",
    familia: "Anatidae",
    especie: "Dendrocygna autumnalis",
    nombreComun: "Pisingo",
    precioCompra: "$ 4000 c/u",
    precioVenta: "$ 6000 c/u",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-pisingo.png",
  },
  {
    id: 4,
    orden: "Rodentia",
    familia: "Caviidae", 
    especie: "Anas discors",
    nombreComun: "Barraquete",
    precioCompra: "$ 2000 c/u",
    precioVenta: "$ 4000 c/u",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-barraquete.png",
  },
  {
    id: 5,
    orden: "Cingulata",
    familia: "Dasypodidae",
    especie: "Dasypus novemcinctus",
    nombreComun: "Armadillo",
    precioCompra: "$ 24 000",
    precioVenta: "$ 30 000",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-armadillo.png",
  },
  {
    id: 6,
    orden: "Rodentia",
    familia: "Dasyproctidae",
    especie: "Dasyprocta punctata",
    nombreComun: "Neque",
    precioCompra: "$ 13 000",
    precioVenta: "$ 18 000",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-neque.png",
  },
  {
    id: 7,
    orden: "Rodentia", 
    familia: "Cavilidae",
    especie: "Hydrochoerus sthmius",
    nombreComun: "Ponche",
    precioCompra: "$ 13 000",
    precioVenta: "$ 18 000",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-ponche.png",
  },
  {
    id: 8,
    orden: "Rodentia",
    familia: "Cuniculidae",
    especie: "Cuniculus paca",
    nombreComun: "Guartinaja",
    precioCompra: "$ 20 000",
    precioVenta: "$ 25 000",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-guartinaja.png",
  },
  {
    id: 9,
    orden: "Lagomorpha",
    familia: "Leporidae",
    especie: "Sylvilagus floridanus",
    nombreComun: "Conejo",
    precioCompra: "$ 24 000",
    precioVenta: "$ 30 000",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-conejo.png",
  },
  {
    id: 10,
    orden: "Pelecaniformes",
    familia: "Phalacroconacidae",
    especie: "Phalacroconax brasilianus",
    nombreComun: "Pato yuyo",
    precioCompra: "$ 3000 c/u",
    precioVenta: "$ 7000 c/u",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-pato.png",
  },
  {
    id: 11,
    orden: "Testudines",
    familia: "Testudinidae",
    especie: "Chelonoidis carbonarius",
    nombreComun: "Morrocoyo",
    precioCompra: "$ 6000",
    precioVenta: "$ 10 000",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-morrocoyo.png",
  },
  {
    id: 12,
    orden: "Testudines",
    familia: "Emydidae",
    especie: "Trachemys callirostris",
    nombreComun: "Hicotea",
    precioCompra: "$ 6000",
    precioVenta: "$ 10 000",
    imagen: "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-hicotea.png",
  },
];

// Variables de ordenación
let currentSort = { column: null, direction: "asc" };
let sortedData = [...faunaData];

// Mapeo de imágenes por especie (aquí puedes cambiar las rutas)
const imageMap = {
  "Dicotyles tajecu": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-zaino.png",
  "Mazama americana": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-venado.png",
  "Dendrocygna autumnalis": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-pisingo.png",
  "Anas discors": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-barraquete.png",
  "Dasypus novemcinctus": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-armadillo.png",
  "Dasyprocta punctata": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-neque.png",
  "Hydrochoerus sthmius": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-ponche.png",
  "Cuniculus paca": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-guartinaja.png",
  "Sylvilagus floridanus": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-conejo.png",
  "Phalacroconax brasilianus": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-pato.png",
  "Chelonoidis carbonarius": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-morrocoyo.png",
  "Trachemys callirostris": "https://reporte.humboldt.org.co/assets/img/2024/3/302/ficha-302-hicotea.png",
};

// Función para generar las filas de la tabla
function generarFilasTabla() {
  const tbody = document.getElementById("fauna-tbody");
  tbody.innerHTML = "";

  sortedData.forEach((animal, index) => {
    const row = document.createElement("tr");
    row.className = "fauna-row";
    row.setAttribute("data-id", animal.id);

    // Determinar la clase para la celda de orden
    const ordenClass =
      animal.orden === "" ? "orden-column empty-orden" : "orden-column";

    // Obtener imagen para esta especie
    const animalImage = animal.imagen || imageMap[animal.especie] || "";

    // Crear contenido de la celda de orden
    let ordenContent = animal.orden;
    if (animalImage && animal.orden !== "") {
      ordenContent = `
        <div class="orden-cell">
          <img src="${animalImage}" alt="${animal.nombreComun}" />
          <span class="orden-text">${animal.orden}</span>
        </div>
      `;
    }

    row.innerHTML = `
      <td class="${ordenClass}">${ordenContent}</td>
      <td class="familia-column">${animal.familia}</td>
      <td class="especie-column"><em>${animal.especie}</em></td>
      <td class="nombre-column"><strong>${animal.nombreComun}</strong></td>
      <td class="precio-column">${animal.precioCompra}</td>
      <td class="precio-column">${animal.precioVenta}</td>
    `;

    tbody.appendChild(row);
  });
}

// Función para ordenar los datos
function sortData(column) {
  // Remover clase active-sort de todos los encabezados
  document.querySelectorAll(".fauna-table th").forEach((th) => {
    th.classList.remove("active-sort");
  });

  // Si es la misma columna, invertir dirección
  if (currentSort.column === column) {
    currentSort.direction = currentSort.direction === "asc" ? "desc" : "asc";
  } else {
    // Nueva columna, orden ascendente por defecto
    currentSort.column = column;
    currentSort.direction = "asc";
  }

  // Añadir clase active-sort al encabezado actual
  const currentTh = document.querySelector(
    `.fauna-table th[data-column="${column}"]`
  );
  if (currentTh) {
    currentTh.classList.add("active-sort");
  }

  // Ordenar los datos
  sortedData.sort((a, b) => {
    let aValue = a[column];
    let bValue = b[column];

    // Para manejar celdas vacías
    if (aValue === "") aValue = "zzzzzzzzzz"; // Colocar al final
    if (bValue === "") bValue = "zzzzzzzzzz"; // Colocar al final

    // Para orden alfabético
    if (typeof aValue === "string") {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) {
      return currentSort.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return currentSort.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Actualizar indicadores visuales
  updateSortHeaders();

  // Regenerar la tabla
  generarFilasTabla();
}

// Función para actualizar indicadores de ordenación
function updateSortHeaders() {
  // Remover todas las clases de ordenación
  document.querySelectorAll(".fauna-table th").forEach((th) => {
    th.classList.remove("sorted-asc", "sorted-desc");
  });

  // Añadir clase a la columna actualmente ordenada
  if (currentSort.column) {
    const currentTh = document.querySelector(
      `.fauna-table th[data-column="${currentSort.column}"]`
    );
    if (currentTh) {
      currentTh.classList.add(
        currentSort.direction === "asc" ? "sorted-asc" : "sorted-desc"
      );
    }
  }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // Generar la tabla inicial
  generarFilasTabla();

  // Event listeners para ordenación de columnas
  document.querySelectorAll(".fauna-table th.sortable").forEach((th) => {
    th.addEventListener("click", () => {
      const column = th.getAttribute("data-column");
      sortData(column);
    });
  });
});

// Exportar funciones para uso externo
window.faunaOrdenacion = {
  sortData,
  generarFilasTabla,
};
