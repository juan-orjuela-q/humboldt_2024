console.log ("version 8.0")
const container = document.getElementById("status-filter");
if (container) {
  const speciesData = [
    {
      group: "Patos y afines",
      speciesName: "Pisingo o iguaza común",
      scientificName: "Dendrocygna autumnalis",
      order: "Anseriformes",
      family: "Anatidae",
      status: "Migratorio local",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Iguaza careta",
      scientificName: "Dendrocygna viduata",
      order: "Anseriformes",
      family: "Anatidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Pato real",
      scientificName: "Cairina moschata",
      order: "Anseriformes",
      family: "Anatidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Barraquete",
      scientificName: "Spatula discors",
      order: "Anseriformes",
      family: "Anatidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Pato malibú",
      scientificName: "Anas bahamensis",
      order: "Anseriformes",
      family: "Anatidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Pato canadiense",
      scientificName: "Aythya affinis",
      order: "Anseriformes",
      family: "Anatidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Flamenco",
      scientificName: "Phoenicopterus ruber",
      order: "Phoenicopteriformes",
      family: "Phoenicopteridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Coyongo",
      scientificName: "Mycteria americana",
      order: "Ciconiiformes",
      family: "Ciconiidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Vaco",
      scientificName: "Tigrisoma lineatum",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Pico de zapato",
      scientificName: "Cochlearius cochlearius",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Guaco",
      scientificName: "Nycticorax nycticorax",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Guaco manglero",
      scientificName: "Nyctanassa violacea",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garcipolo",
      scientificName: "Butorides striata",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garcita verde",
      scientificName: "Butorides virescens",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garcita del ganado",
      scientificName: "Bubulcus ibis",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garzón migratorio",
      scientificName: "Ardea herodias",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza morena",
      scientificName: "Ardea cocoi",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza real",
      scientificName: "Ardea alba",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza tricolor",
      scientificName: "Egretta tricolor",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza rojiza",
      scientificName: "Egretta rufescens",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente y migratorio",
      statusClass: "NT",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza patiamarilla",
      scientificName: "Egretta thula",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza azul",
      scientificName: "Egretta caerulea",
      order: "Pelecaniformes",
      family: "Ardeidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Ibis blanco",
      scientificName: "Eudocimus albus",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Ibis escarlata",
      scientificName: "Eudocimus ruber",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Ibis verde",
      scientificName: "Mesembrinibis cayennensis",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Coquito",
      scientificName: "Phimosus infuscatus",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza paleta",
      scientificName: "Platalea ajaja",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Págalo grande",
      scientificName: "Stercorarius skua",
      order: "Charadriiformes",
      family: "Stercorariidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Rayador",
      scientificName: "Rynchops niger",
      order: "Charadriiformes",
      family: "Rynchopidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota reidora",
      scientificName: "Leucophaeus atricilla",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota de Franklin",
      scientificName: "Leucophaeus pipixcan",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota de Delaware",
      scientificName: "Larus delawarensis",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gavión",
      scientificName: "Larus marinus",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota sombría",
      scientificName: "Larus fuscus",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota argéntea",
      scientificName: "Larus argentatus",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín enano",
      scientificName: "Sternula antillarum",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín fluvial",
      scientificName: "Sternula superciliaris",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín picudo",
      scientificName: "Phaetusa simplex",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín blanco",
      scientificName: "Gelochelidon nilotica",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín piquirrojo",
      scientificName: "Hydroprogne caspia",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín común",
      scientificName: "Sterna hirundo",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín patinegro",
      scientificName: "Thalasseus sandvicensis",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín real",
      scientificName: "Thalasseus maximus",
      order: "Charadriiformes",
      family: "Laridae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Fragata",
      scientificName: "Fregata magnificens",
      order: "Suliformes",
      family: "Fregatidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Piquero café",
      scientificName: "Sula leucogaster",
      order: "Suliformes",
      family: "Sulidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Pato yuyo",
      scientificName: "Phalacrocorax brasilianus",
      order: "Suliformes",
      family: "Pharacrocoracidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Pelícano café",
      scientificName: "Pelecanus occidentalis",
      order: "Suliformes",
      family: "Pelecanidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Chorlo gris",
      scientificName: "Pluvialis squatarola",
      order: "Charadriiformes",
      family: "Charadriidae",
      status: "Migratorio",
      statusClass: "VU",
    },
    {
      group: "Limícolas",
      speciesName: "Chorlito semipalmeado",
      scientificName: "Charadrius semipalmatus",
      order: "Charadriiformes",
      family: "Charadriidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Tanga",
      scientificName: "Vanellus chilensis",
      order: "Charadriiformes",
      family: "Charadriidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Chorlito piquigrueso",
      scientificName: "Anarhynchus wilsonia",
      order: "Charadriiformes",
      family: "Charadriidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Ostrero",
      scientificName: "Haematopus palliatus",
      order: "Charadriiformes",
      family: "Haemotopodidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Alcaldito",
      scientificName: "Himantopus mexicanus",
      order: "Charadriiformes",
      family: "Recurvirostridae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Zarapito",
      scientificName: "Numenius phaeopus",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Aguja moteada",
      scientificName: "Limosa fedoa",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "VU",
    },
    {
      group: "Limícolas",
      speciesName: "vuelvepiedras",
      scientificName: "Arenaria interpres",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Playero zancón",
      scientificName: "Calidris himantopus",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "NT",
    },
    {
      group: "Limícolas",
      speciesName: "Playero blanco",
      scientificName: "Calidris alba",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Playero diminuto",
      scientificName: "Calidris minutilla",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "NT",
    },
    {
      group: "Limícolas",
      speciesName: "Playero semipalmeado",
      scientificName: "Calidris pusilla",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "NT",
    },
    {
      group: "Limícolas",
      speciesName: "Playero occidental",
      scientificName: "Calidris mauri",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Becasa piquicorta",
      scientificName: "Limnodromus griseus",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "VU",
    },
    {
      group: "Limícolas",
      speciesName: "Falaropo tricolor",
      scientificName: "Phalaropus tricolor",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Meneaculito",
      scientificName: "Actitis macularius",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Andarríos solitario",
      scientificName: "Tringa solitaria",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Patiamarilla mayor",
      scientificName: "Tringa melanoleuca",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "NT",
    },
    {
      group: "Limícolas",
      speciesName: "Playero alinegro",
      scientificName: "Tringa semipalmata",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Patiamarillo menor",
      scientificName: "Tringa flavipes",
      order: "Charadriiformes",
      family: "Scolopacidae",
      status: "Migratorio",
      statusClass: "VU",
    },
    {
      group: "Limícolas",
      speciesName: "Chequé",
      scientificName: "Jacana jacana",
      order: "Charadriiformes",
      family: "Jacanidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Chavarrí",
      scientificName: "Chauna chavaria",
      order: "Anseriformes",
      family: "Anhimidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Zambullidor chico",
      scientificName: "Tachybaptus dominicus",
      order: "Podicipediformes",
      family: "Podicipedidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Cocinera",
      scientificName: "Crotophaga major",
      order: "Cuculiformes",
      family: "Cuculidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Carrao",
      scientificName: "Aramus guarauna",
      order: "Gruiformes",
      family: "Aramidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Focha gris",
      scientificName: "Gallinula galeata",
      order: "Gruiformes",
      family: "Rallidae",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Purruta",
      scientificName: "Porphyrio martinica",
      order: "Gruiformes",
      family: "Rallidae",
      status: "Migratorio local",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Águila pescadora",
      scientificName: "Pandion haliaetus",
      order: "Accipitriformes",
      family: "Pandionidae",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Caracolero",
      scientificName: "Rostrhamus sociabilis",
      order: "Accipitriformes",
      family: "Accipitridae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Cangrejero mayor",
      scientificName: "Buteogallus urubitinga",
      order: "Accipitriformes",
      family: "Accipitridae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Martín pescador grande",
      scientificName: "Megaceryle torquata",
      order: "Coraciiformes",
      family: "Alcedinidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Martín pescador matraquero",
      scientificName: "Chloroceryle amazona",
      order: "Coraciiformes",
      family: "Alcedinidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Martín escador pigmeo",
      scientificName: "Chloroceyle aenea",
      order: "Coraciiformes",
      family: "Alcedinidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Martín pescador chico",
      scientificName: "Chloroceryle americana",
      order: "Coraciiformes",
      family: "Alcedinidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Rastrojero barbiamarillo",
      scientificName: "Certhiaxis cinnamomeus",
      order: "Passeriformes",
      family: "Furnariidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Viudita común",
      scientificName: "Fluvicola pica",
      order: "Passeriformes",
      family: "Tyrannidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Monjita pantanera",
      scientificName: "Arundicola leucocephala",
      order: "Passeriformes",
      family: "Tyrannidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Golondrina aliblanca",
      scientificName: "Tachycineta albiventer",
      order: "Passeriformes",
      family: "Hirundinidae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "María mulata",
      scientificName: "Quiscalus mexicanus",
      order: "Passeriformes",
      family: "Icteridae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Turpial cabeciamarillo",
      scientificName: "Chrysomus icterocephalus",
      order: "Passeriformes",
      family: "Icteridae",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Conirrostro manglero",
      scientificName: "Conirostrum bicolor",
      order: "Passeriformes",
      family: "Thraupidae",
      status: "Residente",
      statusClass: "NT",
    },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const statusFilter = document.getElementById("status-filter");
    const iucnFilter = document.getElementById("iucn-filter");
    const countDisplay = document.getElementById("count");

    // Estado de los filtros actuales
    let currentFilters = {
      group: "Patos y afines", // Valor por defecto del primer botón activo
      status: "all",
      iucn: "all",
    };

    // Función para aplicar todos los filtros
    function applyFilters() {
      let filteredSpecies = speciesData;

      // Aplicar filtro de grupo funcional
      if (currentFilters.group !== "all") {
        filteredSpecies = filteredSpecies.filter(
          (species) => species.group === currentFilters.group
        );
      }

      // Aplicar filtro de estatus (status-filter) - CORREGIDO
      if (currentFilters.status !== "all") {
        filteredSpecies = filteredSpecies.filter(
          (species) => species.status === currentFilters.status
        );
      }

      // Aplicar filtro de categoría IUCN (iucn-filter)
      if (currentFilters.iucn !== "all") {
        filteredSpecies = filteredSpecies.filter(
          (species) => species.statusClass === currentFilters.iucn
        );
      }

      loadSpecies(filteredSpecies);
      updateCount(filteredSpecies.length);
    }

    // Event listeners para los botones de grupo funcional
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Eliminar la clase 'active' de todos los botones
        filterButtons.forEach((btn) => btn.classList.remove("active"));

        // Agregar la clase 'active' al botón clicado
        button.classList.add("active");

        // Actualizar filtro de grupo
        currentFilters.group = button.dataset.filter;

        // Aplicar todos los filtros
        applyFilters();
      });
    });

    // Event listener para status-filter (estatus) - CORREGIDO
    statusFilter.addEventListener("change", () => {
      currentFilters.status = statusFilter.value;
      applyFilters();
    });

    // Event listener para iucn-filter (categoría IUCN)
    iucnFilter.addEventListener("change", () => {
      currentFilters.iucn = iucnFilter.value;
      applyFilters();
    });

    // Función para actualizar el conteo
    function updateCount(count) {
      countDisplay.textContent = `Mostrando ${count} especies`;
    }

    // Función para cargar las especies
    function loadSpecies(speciesList) {
      const speciesContainer = document.getElementById("species-cards");
      speciesContainer.innerHTML = ""; // Limpiar los resultados previos

      speciesList.forEach((species) => {
        // Reemplazar espacios por guiones en species.group
        const modifiedGroup = species.group.replace(/\s+/g, "-");

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <span class="species-group ${modifiedGroup}">${species.group}</span>
        <p class="species-name">${species.speciesName}</p>
        <p class="scientific-name">${species.scientificName}</p>
        <hr>
        <p class="species-description"><strong>Orden:</strong> ${species.order}</p>
        <p class="species-description"><strong>Familia:</strong> ${species.family}</p>
        <hr>
        <div class="status-container">
          <span class="species-description"><strong>Estatus:</strong> ${species.status}</span>
          <span class="status ${species.statusClass}">${species.statusClass}</span>
        </div>
      `;

        speciesContainer.appendChild(card);
      });
    }

    // Aplicar filtros al cargar la página
    applyFilters();
  });
}

const contenido3 = document.getElementById("contenido3");
if (contenido3) {
  Highcharts.chart("contenido3", {
    chart: {
      type: "pie",
      backgroundColor: "none",
      height: 600,
      custom: {},
      events: {
        render() {
          const chart = this,
            series = chart.series[0];
          let customImage = chart.options.chart.custom.image;

          if (!customImage) {
            customImage = chart.options.chart.custom.image = chart.renderer
              .image(
                "https://reporte.humboldt.org.co/assets/img/2024/1/102/patos-afines-descrpcion.png",
                series.center[0] + chart.plotLeft - 40,
                series.center[1] + chart.plotTop - 40,
                380,
                317
              )
              .add();
          }

          // Actualizar posición de la imagen cuando se redibuje el chart
          customImage.attr({
            x: series.center[0] + chart.plotLeft - 190,
            y: series.center[1] + chart.plotTop - 150,
          });
        },
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    title: {
      text: null,
    },
    tooltip: {
      pointFormat:
        "{point.name}: <b>{point.cantidad}</b> ({point.percentage:.1f}%)",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    legend: {
      itemStyle: {
        color: "#000000", // Texto de la leyenda en negro
        fontFamily: "Rubik, sans-serif",
      },
      itemHoverStyle: {
        color: "#333333", // Color al hacer hover
      },
    },
    plotOptions: {
      series: {
        borderColor: "#ffffff",
        borderWidth: 1,
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: "{point.name}",
            style: {
              color: "#000000",
              fontFamily: "Rubik, sans-serif",
            },
          },
        ],
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Registros",
        colorByPoint: true,
        innerSize: "75%",
        data: [
          {
            name: "Patos y afines",
            y: 30.3,
            cantidad: 25144,
            color: "#1C2445",
          },
          {
            name: "Vadeadoras",
            y: 35.7,
            cantidad: 29603,
            color: "#79AB2B",
          },
          {
            name: "Limícolas",
            y: 10.0,
            cantidad: 8274,
            color: "#692940",
          },
          {
            name: "Marino costeras",
            y: 23.8,
            cantidad: 19721,
            color: "#F59C00",
          },
          {
            name: "Otros",
            y: 0.2,
            cantidad: 184,
            color: "#FC7268",
          },
        ],
      },
    ],
  });
}

/* --- D3 map for ficha102 (basic interactive scaffold) --- */
(function () {
  // Guardar que DOM esté listo
  document.addEventListener("DOMContentLoaded", function () {
    const svg = d3.select("#ficha102-map");
    console.log("ficha102: script loaded, svg selection:", svg.empty());
    if (svg.empty()) return;

    const width = 1000,
      height = 600;
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    // Placeholder projection and path (replace with real GeoJSON and projection)
    const projection = d3.geoMercator().scale(800).translate([400, 300]);
    const path = d3.geoPath().projection(projection);

    // Placeholder geojson: simple rectangle as "country" background
    const land = {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-80, 11],
            [-71, 11],
            [-71, 13],
            [-80, 13],
            [-80, 11],
          ],
        ],
      },
    };

    // Draw land
    svg
      .append("g")
      .attr("class", "regions")
      .append("path")
      .datum(land)
      .attr("d", path)
      .attr("fill", "#e9e9e9")
      .attr("stroke", "#cfcfcf");

    // Quick check: ensure projection works by projecting a sample coordinate
    const testP = projection([-74, 12]);
    if (!testP || isNaN(testP[0]) || isNaN(testP[1])) {
      console.warn(
        "ficha102: projection returned invalid coordinates, drawing fallback markers"
      );
      // fallback: draw simple circles in center area so user sees something
      svg
        .append("g")
        .attr("class", "fallback")
        .selectAll("circle")
        .data([
          { cx: 400, cy: 200 },
          { cx: 500, cy: 320 },
          { cx: 300, cy: 380 },
        ])
        .enter()
        .append("circle")
        .attr("cx", (d) => d.cx)
        .attr("cy", (d) => d.cy)
        .attr("r", 18)
        .attr("fill", "rgba(52,152,219,0.9)");
      // return; // stop further overlay/marker logic to avoid errors
    }

    // Sample marker data (replace or extend with real dataset)
    const markers = [
      {
        id: 1,
        x: -77.5,
        y: 12.6,
        territory: "territorio1",
        total: 300,
        types: {
          Patos: 120,
          Vadeadoras: 100,
          Marino: 80,
          Limicolas: 0,
          Otros: 0,
        },
        overlays: ["AICA", "Humedales"],
      },
      {
        id: 2,
        x: -73.5,
        y: 12.9,
        territory: "territorio2",
        total: 180,
        types: {
          Patos: 60,
          Vadeadoras: 80,
          Marino: 40,
          Limicolas: 0,
          Otros: 0,
        },
        overlays: ["Ramsar"],
      },
      {
        id: 3,
        x: -72.2,
        y: 12.2,
        territory: "territorio3",
        total: 240,
        types: {
          Patos: 90,
          Vadeadoras: 70,
          Marino: 80,
          Limicolas: 0,
          Otros: 0,
        },
        overlays: ["Humedales"],
      },
      {
        id: 4,
        x: -74.2,
        y: 12.5,
        territory: "territorio4",
        total: 120,
        types: {
          Patos: 50,
          Vadeadoras: 30,
          Marino: 20,
          Limicolas: 20,
          Otros: 0,
        },
        overlays: [],
      },
      {
        id: 5,
        x: -76.0,
        y: 12.8,
        territory: "territorio5",
        total: 90,
        types: {
          Patos: 20,
          Vadeadoras: 40,
          Marino: 10,
          Limicolas: 20,
          Otros: 0,
        },
        overlays: ["AICA"],
      },
      {
        id: 6,
        x: -71.9,
        y: 12.3,
        territory: "territorio6",
        total: 60,
        types: {
          Patos: 10,
          Vadeadoras: 20,
          Marino: 20,
          Limicolas: 10,
          Otros: 0,
        },
        overlays: ["Ramsar", "Humedales"],
      },
    ];


    console.log("CREANDO TOOLTIP");
    // Tooltip
    const tooltip = d3
       .select("body")
        .selectAll(".ficha102-tooltip")
        .data([0])
        .join("div")
        .attr("class", "ficha102-tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("background-color", "white")
        .style("border", "1px solid #ddd")
        .style("border-radius", "4px")
        .style("padding", "8px")
        .style("font-size", "12px")
        .style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
        .style("pointer-events", "none");

    const gMarkers = svg.append("g").attr("class", "markers");
    console.log(document.querySelectorAll(".ficha102-tooltip"));
    // Simple overlays for AICA/Ramsar/Humedales (placeholder polygons)
    const overlays = svg.append("g").attr("class", "overlays");

    // Overlay images (use input PNGs). Each overlay has a bbox in lon/lat
    const overlaySamples = [
      {
        name: "AICA",
        href: "input/ficha-102-aves-mayor-congregacion-aica.png",
        // bbox: [minLon, minLat], [maxLon, maxLat]
        bbox: [
          [-78, 11.2],
          [-76, 12.0],
        ],
      },
      {
        name: "Ramsar",
        href: "input/ficha-102-aves-mayor-congregacion-ramsar.png",
        bbox: [
          [-75, 12.5],
          [-73, 13.0],
        ],
      },
      {
        name: "Humedales",
        href: "input/ficha-102-aves-mayor-congregacion-humedales.png",
        bbox: [
          [-74, 11.5],
          [-72, 12.1],
        ],
      },
    ];

    // Render overlays as <image> elements positioned using projection of bbox corners
    const imgs = overlays
      .selectAll("image.overlay")
      .data(overlaySamples)
      .enter()
      .append("image")
      .attr("class", "overlay")
      .attr("href", (d) => d.href)
      .attr("preserveAspectRatio", "xMidYMid slice")
      .attr("data-name", (d) => d.name)
      .style("pointer-events", "none")
      .each(function (d) {
        // compute position and size from bbox
        const [[minLon, minLat], [maxLon, maxLat]] = d.bbox;
        const p1 = projection([minLon, maxLat]); // top-left (lon, lat-> x,y)
        const p2 = projection([maxLon, minLat]); // bottom-right
        if (p1 && p2) {
          const x = Math.min(p1[0], p2[0]);
          const y = Math.min(p1[1], p2[1]);
          const w = Math.abs(p2[0] - p1[0]);
          const h = Math.abs(p2[1] - p1[1]);
          d3.select(this)
            .attr("x", x)
            .attr("y", y)
            .attr("width", w)
            .attr("height", h);
        }
      });

    function updateMarkers(activeTerritories, activeGroups, activeOverlays) {
      const filtered = markers.filter(
        (m) =>
          activeTerritories.has(m.territory) &&
          // if Total is selected, include all; otherwise require at least one selected group with nonzero count
          (activeGroups.has("Total") ||
            Object.keys(m.types).some(
              (t) => activeGroups.has(t) && m.types[t] > 0
            )) &&
          // overlays: include marker if any of its overlays is active OR if no overlay filters are checked (activeOverlays empty means show all)
          (activeOverlays.size === 0 ||
            m.overlays.some((o) => activeOverlays.has(o)))
      );

      const sel = gMarkers.selectAll("g.marker").data(filtered, (d) => d.id);

      const entered = sel
        .enter()
        .append("g")
        .attr("class", "marker")
        .attr("transform", (d) => {
          const p = projection([d.x, d.y]);
          return `translate(${p[0]},${p[1]})`;
        })
        .style("cursor", "pointer");

      entered
        .append("circle")
        .attr("r", (d) => 8 + Math.sqrt(d.total))
        .attr("fill", "orange")
        .attr("opacity", 0.85);

      entered
        .on("mouseenter", (event, d) => {
          tooltip
            .style("opacity", 1)
            .html(`<strong>${getLabelForCategory(d.group)}</strong><br/>Total: ${d.total}`);
        })
        .on("mousemove", (event) => {
          tooltip
            .style("left", event.pageX + 12 + "px")
            .style("top", event.pageY + 12 + "px");
        })
        .on("mouseleave", () => tooltip.style("opacity", 0))
        .on("click", (event, d) => {
          // Example: when clicked, show a breakdown in console (replace with UI)
          console.log("Detalle marcador", d);
        });

      sel.exit().remove();
    }

    // Control elements
    const cbAica = document.querySelectorAll(".filter-aica");
    const cbGroup = document.querySelectorAll(".filter-group");
    const cbTerr = document.querySelectorAll(".filter-terr");

    function getActiveAica() {
      const s = new Set();
      cbAica.forEach((cb) => cb.checked && s.add(cb.value));
      return s;
    }
    function getActiveGroups() {
      const s = new Set();
      cbGroup.forEach((cb) => cb.checked && s.add(cb.value));
      return s;
    }
    function getActiveTerritories() {
      const s = new Set();
      cbTerr.forEach((cb) => cb.checked && s.add(cb.value));
      return s;
    }

    function getActiveOverlayNames() {
      return getActiveAica();
    }

    // Attach change handlers to re-render overlays and markers
    [...cbAica, ...cbGroup, ...cbTerr].forEach((cb) =>
      cb.addEventListener("change", () => {
        // show/hide overlays
        const activeOver = getActiveOverlayNames();
        overlays
          .selectAll(".overlay")
          .attr("display", (d) =>
            activeOver.size === 0 || activeOver.has(d.name) ? null : "none"
          );
        // update markers
        updateMarkers(getActiveTerritories(), getActiveGroups(), activeOver);
      })
    );

    // initial draw
    overlays.selectAll("path.overlay").attr("display", null);
    updateMarkers(
      getActiveTerritories(),
      getActiveGroups(),
      getActiveOverlayNames()
    );
  });
})();

/* ultimo contenido: mapa interactivo */

/*
  js/main.js
  - Controla la UI del panel lateral y la visualización D3 de burbujas
  - IMPORTANTE: Los primeros checkboxes en el panel (Aica, Ramsar, Humedales)
    son controles de capa/imagen (NO son inputs de datos). Al marcarlos se
    muestra la imagen superpuesta correspondiente y opcionalmente se dibujan
    las burbujas si hay datos para esa región.
*/

// Datos de las regiones y territorios con información de aves
/*
  NOTA: Aquí puedes editar posiciones y radios por territorio.
  - `position`: coordenadas relativas dentro del mapa SVG, valores entre 0 y 1.
      position: { x: 0.08, y: 0.55 } // x = 8% desde la izquierda, y = 55% desde arriba
  - `territoryRadius`: radio en PÍXELES del círculo territorial. Si se omite,
      se calcula automáticamente en `actualizarTerritorio()` usando `baseFactor`.
  Recomendación: para control preciso fija `territoryRadius` aquí por territorio.
*/
const regionesData = {
  "aica-region-ecodeltaico": {
    nombre: "AICA - Canal del Dique",
    position: { x: 0.3, y: 0.48 },
    territoryRadius: 40,
    aves: {
      marinoCosteras: 66,
      vadeadoras: 80,
      total: 146,
    },
  },

  "aica-kba-complejo-humedales": {
    nombre: "AICA/KBA Complejo de humedales costeros de La Guajira",
    position: { x: 0.3, y: 0.42 },
    territoryRadius: 30,
    aves: {
      limicolas: 1166,
      marinoCosteras: 2718,
      patos: 13,
      otras: 10,
      vadeadoras: 1351,
    },
  },

  "aica-kba-ramsar-cienaga-grande": {
    nombre:
      "AICA/KBA Reserva de Biosfera Ramsar Ciénaga Grande, Isla de Salamanca y Sabanagrande",
    position: { x: 0.45, y: 0.3 },
    territoryRadius: 40,
    aves: {
      limicolas: 4331,
      marinoCosteras: 8676,
      patos: 22024,
      otras: 9,
      vadeadoras: 22387,
      total: 57427,
    },
  },

  "cienaga-virgen-juan-polo": {
    nombre: "Ciénaga de la Virgen y Juan Polo",
    position: { x: 0.3, y: 0.45 },
    territoryRadius: 30,
    aves: {
      limicolas: 548,
      marinoCosteras: 1660,
      patos: 85,
      otras: 24,
      vadeadoras: 1157,
    },
  },

  "cienaga-totumo-galerazamba": {
    nombre: "Ciénaga del Totumo, Galerazamba y Bocatocino",
    position: { x: 0.32, y: 0.35 },
    territoryRadius: 30,
    aves: {
      limicolas: 1115,
      marinoCosteras: 1492,
      patos: 260,
      vadeadoras: 1444,
    },
  },

  "cienaga-mallorquin-caujaral": {
    nombre: "Ciénaga Mallorquín y Lago del Cisne-Caujaral",
    position: { x: 0.4, y: 0.28 },
    territoryRadius: 30,
    aves: {
      limicolas: 194,
      marinoCosteras: 3086,
      patos: 2,
      otras: 16,
      vadeadoras: 973,
    },
  },

  "golfo-morrosquillo": {
    nombre: "Golfo de Morrosquillo",
    position: { x: 0.3, y: 0.53 },
    territoryRadius: 40,
    aves: {
      marinoCosteras: 53,
      vadeadoras: 120,
    },
  },

  "golfo-uraba": {
    nombre: "Golfo de Urabá",
    position: { x: 0.13, y: 0.74 },
    territoryRadius: 30,
    aves: {
      marinoCosteras: 283,
      otras: 52,
      vadeadoras: 52, // en la tabla decía 52, no 35
    },
  },

  "kba-bajo-sinu": {
    nombre: "KBA Bajo Sinú",
    position: { x: 0.25, y: 0.55 },
    territoryRadius: 50,
    aves: {
      limicolas: 920,
      marinoCosteras: 1687,
      patos: 2760,
      otras: 125,
      vadeadoras: 2039,
      // total: 7531
    },
  },
};

// Definición de categorías y paleta de colores (usar coherente con la leyenda)
const categories = [
  { key: "patos", label: "Patos y afines", color: "#1C2445" },
  { key: "vadeadoras", label: "Vadeadoras", color: "#79AB2B" },
  { key: "marino", label: "Aves marino-costeras", color: "#F59C00" },
  { key: "limicolas", label: "Aves limicolas", color: "#692940" },
  { key: "otras", label: "Otras aves", color: "#FC7268" },
  // { key: 'total', label: 'Total de aves', color: '#F59E0B' }
];

const colorScale = d3
  .scaleOrdinal()
  .domain(categories.map((c) => c.key))
  .range(categories.map((c) => c.color));

function colorForGroup(groupKey) {
  if (!groupKey) return "#6f42c1";
  const normalized = normalizeCategoryKey(groupKey);
  return colorScale(normalized) || "#6f42c1";
}

// Función para obtener el label de visualización de una categoría
function getLabelForCategory(groupKey) {
  if (!groupKey) return "";
  const normalized = normalizeCategoryKey(groupKey);
  const category = categories.find(c => c.key === normalized);
  return category ? category.label : groupKey;
}

// Utilidad para normalizar claves de categoría provenientes de los datos
function normalizeCategoryKey(k) {
  const key = String(k || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");

  const lookup = {
    // PATOS
    patosyafines: "patos",
    patos: "patos",
    anatidos: "patos",
    anatidae: "patos",

    // VADEADORAS
    vadeadoras: "vadeadoras",
    ardeidos: "vadeadoras",
    threskiornithidae: "vadeadoras",

    // MARINO-COSTERAS
    avesmarinocosteras: "marino",
    marinocosteras: "marino",
    marino: "marino",

    // LIMÍCOLAS
    aveslimicolas: "limicolas",
    limicolas: "limicolas",
    playeros: "limicolas",

    // OTRAS
    otrasaves: "otras",
    otras: "otras",

    // TOTAL
    total: "total",
    totaldeaves: "total",
  };

  return lookup[key] || key;
}

// Función para crear visualización de círculos con zoom
function createCirclePacking(data, svgClass, options = {}) {
  d3.select("body").selectAll(".tooltip").remove();
  // Preparar los datos en formato jerárquico para D3
  // Acepta `data` como un array de aves o como un objeto { name, children }
  let hierarchyData;
  if (Array.isArray(data)) {
    hierarchyData = {
      name: "root",
      children: data.map((d) => ({
        name: d.name,
        value: d.value,
        group: d.group,
        details: d.details,
      })),
    };
  } else if (data && data.name && Array.isArray(data.children)) {
    // si nos pasan un objeto con children, lo usamos directamente
    hierarchyData = {
      name: data.name,
      children: data.children.map((d) => ({
        name: d.name,
        value: d.value,
        group: d.group,
        details: d.details,
      })),
    };
  } else {
    console.error("createCirclePacking: formato de datos no válido", data);
    return;
  }

  const svg = d3.select(`.${svgClass}`);

  // Verificar si el SVG existe
  if (svg.empty()) {
    console.error(`SVG con clase ${svgClass} no encontrado`);
    return;
  }

  // Asegurar que el SVG sea visible antes de medir (si está oculto, intentar mostrar temporalmente)
  const svgEl = svg.node();
  const prevDisplay = svgEl.style.display;
  if (getComputedStyle(svgEl).display === "none") {
    svgEl.style.display = "block";
  }

  // Establecer dimensiones por defecto si no se pueden obtener del nodo
  const width = svg.node()?.clientWidth || 600;
  const height = svg.node()?.clientHeight || 400;

  // Restaurar display anterior si era none (la función llamadora puede volver a ocultarlo)
  if (prevDisplay === "none") svgEl.style.display = "none";

  // Limpiar SVG existente
  svg.selectAll("*").remove();

  // Asegurar que el SVG oculte overflow y crear un clipPath para recortar
  // cualquier dibujo que intente salirse del área (seguridad extra además del CSS)
  svg.style("overflow", "hidden");
  const defs = svg.append("defs");
  defs
    .append("clipPath")
    .attr("id", "map-clip")
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width)
    .attr("height", height);

  // Asegurar viewBox para escalado responsivo
  svg
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  // Crear el contenedor principal y aplicar clipPath para recorte
  const g = svg.append("g").attr("clip-path", "url(#map-clip)");

  // Crear tooltip
  const tooltip = d3
    .select("body")
    .selectAll(".tooltip")
    .data([0])
    .join("div")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("background-color", "white")
    .style("border", "1px solid #ddd")
    .style("border-radius", "4px")
    .style("padding", "8px")
    .style("font-size", "12px")
    .style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
    .style("pointer-events", "none");

  // Crear el layout de circle packing
  // Usar un tamaño más pequeño para asegurar que los círculos queden dentro del mapa
  const pack = (data) =>
    d3
      .pack()
      .size([width * 1, height * 1]) // usar 75% del contenedor para mejor ajuste
      .padding(3)(
      d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value - a.value)
    );

  const root = pack(hierarchyData);
  let focus = root;
  let view;
 

  // Si estamos dibujando para un territorio (SVG dedicado), permitir reglas
  // de posicionamiento/escala especiales pasadas vía `options`.
  const isTerritory =
    options.territory === true || svgClass === "territory-circles";
  if (isTerritory) {
    // centro tomado de options (actualizarTerritorio pasa center) o centrado por defecto
    const cx =
      options && options.center && typeof options.center.x === "number"
        ? options.center.x
        : width / 2;
    const cy =
      options && options.center && typeof options.center.y === "number"
        ? options.center.y
        : height / 2;

    // --- usar estrictamente el radius pasado en options (tu JSON). No recalcular ni limitar.
    const territoryRadius =
      options && typeof options.territoryRadius === "number"
        ? options.territoryRadius
        : (root.data && root.data.territoryRadius) ||
          Math.min(width, height) / 4;

    // Ajuste dinámico del factor de escala según cantidad de nodos
    let leavesCount = root.leaves().length;

    // scaleFactor automático según número de nodos visibles
    let scaleFactor =
      leavesCount === 1
        ? 1
        : leavesCount === 2
        ? 1
        : leavesCount === 3
        ? 0.55
        : 0.35;

    // Permitir override manual desde JSON
    if (options && typeof options.scaleFactor === "number") {
      scaleFactor = options.scaleFactor;
    }

    // parámetros para los nodos (solo hojas)
    const nodeRadiusFactor =
      typeof options.nodeRadiusFactor === "number"
        ? options.nodeRadiusFactor
        : 0.6;
    const minNodeR = 3;

    // obtener hojas (solo las burbujas que quieres mostrar dentro del territorio)
    const leaves = root.leaves();
    if (!leaves || leaves.length === 0) {
      // dibujar el padre vacío igualmente
      g.selectAll(".territory-outer").remove();
      g.append("circle")
        .attr("class", "territory-outer")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", territoryRadius)
        .style("fill", "#f59e0b")
        .style("fill-opacity", 0.06)
        .style("stroke", "#f59e0b")
        .style("stroke-width", 2);
      // nada más que hacer
    } else {
      // construir nodos base: radio a partir de d.r (pack) o derivado de value, pero SIN reescalar posiciones del pack
      const nodes = leaves.map((d) => {
        const baseR =
          typeof d.r === "number" && d.r > 0
            ? d.r
            : d.data && d.data.value
            ? Math.sqrt(d.data.value || 1)
            : 2;

        // ---- NUEVO BLOQUE (mínimo y máximo visibles) ----
        const minNodeR = 10; // Mínimo visible (puedes ajustar)
        const maxNodeR = 20; // Máximo para evitar burbujas gigantes
        const r = Math.max(
          minNodeR,
          Math.min(baseR * nodeRadiusFactor, maxNodeR)
        );
        // ---------------------------------------------------

        // posición inicial aleatoria
        const angle = Math.random() * Math.PI * 2;
        const rad = Math.random() * Math.max(0, territoryRadius - r - 2);

        return {
          x: cx + Math.cos(angle) * rad,
          y: cy + Math.sin(angle) * rad,
          r,
          ref: d,
        };
      });

      // eliminar cualquier territory-outer antiguo antes de dibujar
      g.selectAll(".territory-outer").remove();

      // Simulación: collide + radial suave hacia centro + center
      const maxNodeR = Math.max(...nodes.map((n) => n.r));
      const sim = d3
        .forceSimulation(nodes)
        .stop()
        .force("center", d3.forceCenter(cx, cy))
        .force("collide", d3.forceCollide((d) => d.r + 8).strength(1)) // ← separación real
        .force(
          "radial",
          d3
            .forceRadial(
              territoryRadius * 0.55, // ← posición ideal de todos
              cx,
              cy
            )
            .strength(0.8)
        );

      const ticks = Math.max(180, Math.min(700, Math.floor(nodes.length * 8)));
      for (let i = 0; i < ticks; i++) sim.tick();
      sim.stop();

      // asegurar que quedan dentro y volcar posiciones a nodos d3 (refs)
      nodes.forEach((n) => {
        const dx = n.x - cx;
        const dy = n.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const maxInside = Math.max(0, territoryRadius - n.r - 1);
        if (dist > maxInside) {
          n.x = cx + (dx / dist) * maxInside;
          n.y = cy + (dy / dist) * maxInside;
        }
        if (n.ref) {
          n.ref.x = n.x;
          n.ref.y = n.y;
          n.ref.r = n.r; // actualizar r si corresponde
        }
      });

      // dibujar territorio externo
      g.append("circle")
        .attr("class", "territory-outer")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", territoryRadius)
        .style("fill", "#f59e0b")
        .style("fill-opacity", 0.06)
        .style("stroke", "#f59e0b")
        .style("stroke-width", 2);
    }
  }

  // Color por defecto del territorio y función para obtener color por grupo
  const territoryColor = "#f59e0b"; // naranja para el total / territorio
  const color = (d) => {
    if (!d || !d.data) return "#6f42c1";
    if (d.depth === 0) return territoryColor;
    const g = d.data.group;
    return colorForGroup(g);
  };

  // Pequeña utilidad para elegir color de texto sobre fondo (si el fondo es claro usar negro)
  const textColorFor = (hex) => {
    if (!hex) return "#fff";
    // convertir hex a r,g,b
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    // luminancia percibida
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    return lum > 180 ? "#000" : "#fff";
  };

  // Escala de reducción de radios para que las burbujas sean más pequeñas
  const radiusScale = 0.6;

  // Asegurar que el SVG tenga width/height explícitos para cálculos consistentes
  svg
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`);

  // Función para hacer zoom
  const zoomTo = (v) => {
    // Evitar que el zoom agrande la vista (k>1) — sólo permitir reducir o mantener
    const rawK = Math.min(width, height) / v[2];
    const k = rawK;
    view = v;

    // Ajustar la posición para mantener los círculos centrados y dentro del área visible
    const tx = width / 2 - v[0] * k;
    const ty = height / 2 - v[1] * k;

    g.attr("transform", `translate(${tx},${ty}) scale(${k})`);

    g.selectAll("circle.node-circle")
      // Aplicar la misma escala y tope de radio durante el zoom
      .attr("r", (d) => Math.min(d.r * radiusScale, 300))
      .attr("fill-opacity", (d) => (focus === d.parent ? 0.7 : 1))
      .attr("stroke-width", (d) => (focus === d.parent ? 1 : 0));

    g.selectAll("text")
      .attr("font-size", (d) => Math.min(d.r / 3, 12))
      .attr("opacity", (d) =>
        focus === d.parent || (focus === root && d.parent === root) ? 1 : 0
      );
  };

  // NOTA: si quieres quitar la limitación del zoom (permitir acercar más),
  // edita la línea `const k = Math.min(rawK, 1);` y cambia el `1` por
  // un valor mayor (p. ej. 2) o por `rawK` para comportamiento original.

  function zoom(event, d) {
    const focus0 = focus;
    focus = d;

    svg
      .transition()
      .duration(750)
      .tween("zoom", () => {
        const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
        return (t) => zoomTo(i(t));
      });

    // actualizar view para la siguiente interacción ya lo hace zoomTo
  }

  // Crear los círculos y textos
  const node = g
    .selectAll("g")
    .data(root.descendants().filter((d) => d.depth !== 0))
    .join("g")
    .attr("pointer-events", "all")
    .attr("transform", (d) => `translate(${d.x},${d.y})`)
    .on("mouseover", function (event, d) {
      if (focus !== d.parent) return;

      d3.select(this)
        .select("circle")
        .transition()
        .duration(200)
        .style("fill-opacity", 0.9)
        .attr("r", (d) => Math.min(d.r * 1.1 * radiusScale, 300));

      tooltip.transition().duration(200).style("opacity", 1);

      tooltip
        .html(
          `
        
        Grupo: ${getLabelForCategory(d.data.group)}<br/>
        Cantidad: ${d.data.value} individuos<br/>
        <small>${d.data.details || ""}</small>
      `
        )
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 10 + "px");
    })
    .on("mouseout", function (event, d) {
      if (focus !== d.parent) return;

      d3.select(this)
        .select("circle")
        .transition()
        .duration(200)
        .style("fill-opacity", 0.7)
        .attr("r", (d) => Math.min(d.r * radiusScale, 300));

      tooltip.transition().duration(500).style("opacity", 0).style('z-index', 9999);
    })
    .on("click", function (event, d) {
      if (focus === d) {
        zoom(event, d.parent);
        event.stopPropagation();
        return;
      }
      if (d.children) {
        zoom(event, d);
        event.stopPropagation();
      } else {
        // Actualizar información detallada en el panel adecuado
        const infoTarget =
          svgClass === "territory-circles"
            ? document.querySelector("#territory-info")
            : document.querySelector("#region-info");
        if (infoTarget) {
          infoTarget.innerHTML = `
            <h4>${d.data.name}</h4>
            <p><strong>Grupo:</strong> ${d.data.group}</p>
            <p><strong>Cantidad:</strong> ${d.data.value} individuos</p>
            <p>${d.data.details || ""}</p>
          `;
        }
      }
    });

  node
    .append("circle")
    .attr("class", "node-circle")
    .attr("r", (d) => Math.min(d.r * radiusScale, 300))
    .style("fill", (d) => color(d))
    .style("fill-opacity", 0.95)
    .style("stroke", "#fff");

  // node.append("text")
  //   .attr("text-anchor", "middle")
  //   .attr("dy", "0.3em")
  //   .style("fill", d => textColorFor(color(d)))
  //   .style('font-size', d => Math.min((d.r * radiusScale) / 3, 11) + 'px')
  //   .text(d => d.data.name);

  // Inicializar la vista
  // Si es territorio, usar el radio del territorio para centrar/escala inicial
  // Inicializar vista
  if (isTerritory) {
    // Mantener exactamente la ubicación y radio reales
    zoomTo([cx, cy, territoryRadius * 2]);
  } else {
    zoomTo([root.x, root.y, root.r * 2]);
  }
}

// --------------------------termina  createCirclePacking--------------------------

// Cuando el DOM esté listo: inicializamos selectores y handlers de UI
// - checkboxes de región: muestran/ocultan imágenes de la capa
// - checkboxes de territorio: muestran datos territoriales en SVG dedicado
// - los filtros de categoría recalculan la visualización para la(s) región(es) activas
document.addEventListener("DOMContentLoaded", () => {
  const regionCheckboxes = document.querySelectorAll(
    ".panel input[data-region]"
  );
  const territoryCheckboxes = document.querySelectorAll(
    "#territory-selector input[data-territory]"
  );
  const groupCheckboxes = document.querySelectorAll(
    ".panel input[data-category]"
  );
  const regiones = document.querySelectorAll(".region");
  const infoContainer = document.querySelector("#info-container");
  const territoryInfo = document.querySelector("#territory-info");
  const totalDisplay = document.querySelector("#total-count");

  // Crear un SVG específico para territorios si no existe
  const mapaContainer = document.querySelector(".mapa");
  if (!document.querySelector(".territory-circles")) {
    const territorySvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    territorySvg.classList.add("circle-pack-svg", "territory-circles");
    mapaContainer.appendChild(territorySvg);
  }

  // Mapeo explícito entre los valores `data-territory` del HTML y las
  // claves presentes en `regionesData`. Añade o modifica según tus datos reales.
  const territoryIdMap = {
    "aica-region-canal": "aica-region-ecodeltaico",
    "aica-humedales-la-virgen": "aica-kba-complejo-humedales",
    "aica-ramsar-cienaga-grande": "aica-kba-ramsar-cienaga-grande",
    "cienaga-la-virgen": "cienaga-virgen-juan-polo",
    "cienaga-totumo": "cienaga-totumo-galerazamba",
    "cienaga-mallorquin": "cienaga-mallorquin-caujaral",
    "golfo-morrosquillo": "golfo-morrosquillo",
    "golfo-uraba": "golfo-uraba",
    "kba-bajo-sinu": "kba-bajo-sinu",
  };

  // Función para actualizar visualización de territorio
  function actualizarTerritorio(territoryId) {
    // mapear ids descriptivos a las claves de datos si existe el mapeo
    const lookupId =
      typeof territoryIdMap !== "undefined" && territoryIdMap[territoryId]
        ? territoryIdMap[territoryId]
        : territoryId;
    // Buscar datos de forma flexible: aceptar claves explícitas en `regionesData`
    // (por ejemplo 'aica-region-canal') o claves numéricas tipo 'territorio-1'.
    let data = null;

    // 1) Si el checkbox pasa una clave que coincide directamente
    if (regionesData[lookupId]) data = regionesData[lookupId];

    // 2) Si se pasó un número o id corto, intentar 'territorio-N'
    if (!data && /^\d+$/.test(String(territoryId))) {
      data = regionesData[`territorio-${territoryId}`];
    }

    // 3) Intentar 'territorio-' + id (por compatibilidad con el viejo HTML)
    if (!data && regionesData[`territorio-${territoryId}`]) {
      data = regionesData[`territorio-${territoryId}`];
    }

    // 4) Buscar por coincidencia parcial en las claves (si el id es más descriptivo)
    if (!data) {
      const keys = Object.keys(regionesData);
      const match = keys.find((k) =>
        k.toLowerCase().includes(String(lookupId).toLowerCase())
      );
      if (match) data = regionesData[match];
    }

    if (!data) {
      console.warn("No se encontraron datos para el territoryId:", territoryId);
      const svgEl = document.querySelector(".territory-circles");
      if (svgEl) svgEl.style.display = "none";
      const tinfo = document.querySelector("#territory-info");
      if (tinfo) tinfo.innerHTML = "<p>No hay datos para ese territorio.</p>";
      return;
    }

    // Asegurar que el SVG esté visible antes de crear la visualización
    const svgEl = document.querySelector(".territory-circles");
    if (svgEl) svgEl.style.display = "block";

    // Pasar el territorio como nodo raíz para que los pájaros sean hijos (zoomable)
    // --- PARTE 1: Centro (ubicación) ---
    // `svgW` y `svgH` son las dimensiones en píxeles del SVG en pantalla.
    // `cx` y `cy` calculan el centro del territorio en píxeles a partir de
    // `data.position` (coordenadas relativas 0..1) o centran por defecto.
    // Si quieres mover el círculo territorial manualmente, edita `position` en `regionesData`.
    const svgW = svgEl.clientWidth || 600;
    const svgH = svgEl.clientHeight || 400;
    const cx = data.position.x * svgW;
    const cy = data.position.y * svgH;
    // --- PARTE 2: Tamaño (radio) ---
    // Aquí se decide el `territoryRadius` final (en píxeles) que será usado
    // para dibujar el círculo exterior del territorio.
    // Opciones de control:
    //  - Si `data.territoryRadius` está definido en `regionesData`, se intentará usarlo.
    //  - Si no, se calcula `computedRadius = minDim * baseFactor`.
    //  - Finalmente se aplica un tope `maxRelative` para evitar círculos gigantes.
    // Para cambiar el comportamiento global edita `baseFactor` (porcentaje) y `maxRelative`.
    const minDim = Math.min(svgW, svgH);
    // Factor por defecto (conservador: 8% del menor lado). Reducir para círculos más pequeños.
    const baseFactor = minDim < 500 ? 0.08 : 0.08;
    // Si el dato ya trae un radius absoluto, lo respetamos pero lo limitamos
    const suggestedFromData =
      typeof data.territoryRadius === "number" ? data.territoryRadius : null;
    // Máximo permitido relativo al contenedor (25% del menor lado) — límite para evitar overflow
    // const maxRelative = Math.floor(minDim * 0.25);
    const computedRadius = Math.round(minDim * baseFactor);
    const territoryRadiusToUse = suggestedFromData || Math.round(minDim * 0.25);
    // Normalizar `data.aves` a un array de nodos si viene como objeto de totales
    let children = [];
    if (Array.isArray(data.aves)) {
      children = data.aves;
    } else if (data.aves && typeof data.aves === "object") {
      // convertir { limicolas: 123, patos: 10, ... } -> [{name:'limicolas', value:123, group:'limicolas'}, ...]
      children = Object.entries(data.aves).map(([k, v]) => {
        const groupKey = normalizeCategoryKey(k);
        return { name: getLabelForCategory(k), value: Number(v) || 0, group: groupKey };
      });
    }

    // --- PARTE 3: Parámetros de visualización internos ---
    // Opciones que controlan el empaquetamiento y el tamaño de las burbujas internas.
    // - `scaleFactor`: compacta o dispersa las posiciones generadas por d3.pack.
    // - `nodeRadiusFactor`: multiplica el radio calculado por d3.pack (más pequeño => burbujas menores).
    // - `maxRadius`: tope absoluto (px) para cada burbuja interna.
    // Si quieres que las burbujas internas sean aún más pequeñas, reduce `nodeRadiusFactor` y `maxRadius`.
    // DEBUG: imprimir en consola la clave usada, posición y radios calculados
    try {
      const usedKey =
        Object.keys(regionesData).find((k) => regionesData[k] === data) ||
        lookupId;
      console.log(
        "actualizarTerritorio -> usedKey:",
        usedKey,
        "lookupId:",
        lookupId
      );
      console.log(
        "data.position:",
        data.position,
        "svgW,svgH:",
        svgW,
        svgH,
        "cx,cy:",
        cx,
        cy
      );
      console.log(
        "suggestedFromData:",
        suggestedFromData,
        "computedRadius:",
        computedRadius,
        "territoryRadiusToUse:",
        territoryRadiusToUse
      );
    } catch (e) {
      console.warn("Error al loggear debug en actualizarTerritorio", e);
    }
    // Log adicional para verificar que cx, cy se calcularon correctamente ANTES de pasar a createCirclePacking
    console.log(
      "Justo antes de createCirclePacking: cx=" +
        cx +
        ", cy=" +
        cy +
        ", territoryRadiusToUse=" +
        territoryRadiusToUse
    );

    createCirclePacking({ name: data.nombre, children }, "territory-circles", {
      territory: true,
      center: { x: cx, y: cy },
      scaleFactor: 0.8, // qué tan juntas están las burbujas (0-1)
      nodeRadiusFactor: 0.8, // burbujas internas más pequeñas (ajusta aquí)
      maxRadius: 80, // radio máximo de cada burbuja interna (px)
      territoryRadius: territoryRadiusToUse,
    });

    // Los datos del territorio se muestran dentro de los círculos (zoomable). Si quieres
    // mantener también un listado, podemos rellenar `#territory-info` aquí.
  }

  // Manejar checkboxes de territorio
  territoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const territoryId = e.target.dataset.territory;

      // Desmarcar otros territorios
      territoryCheckboxes.forEach((cb) => {
        if (cb !== e.target) cb.checked = false;
      });

      if (e.target.checked) {
        actualizarTerritorio(territoryId);
      } else {
        document.querySelector(".territory-circles").style.display = "none";
        territoryInfo.innerHTML = "<p>No hay datos aún.</p>";
      }
    });
  });

  // Mapeo de categorías a nombres de grupo en los datos
  const categoryToGroups = {
    patos: ["Anátidos", "Pelicánidos"],
    vadeadoras: ["Ardeidos", "Threskiornithidae", "Cicónidos", "Charádridos"],
    marino: ["Láridos", "Fenicopéridos"],
    limicolas: ["Playeros"],
    // 'otras' se evalúa dinámicamente como los grupos restantes
    otras: [],
  };

  // Generar la leyenda dinámica en el contenedor `#legend` usando `categories`
  const legendRoot = d3.select("#legend");
  if (!legendRoot.empty()) {
    legendRoot
      .style("padding", "8px")
      .style("background", "rgba(255,255,255,0.95)")
      .style("border", "1px solid #ddd");
    const items = legendRoot
      .selectAll(".legend-item")
      .data(categories)
      .join("div")
      .attr("class", "legend-item")
      .style("display", "flex")
      .style("align-items", "center")
      .style("gap", "8px")
      .style("margin", "4px 0");

    items
      .append("span")
      .style("width", "14px")
      .style("height", "14px")
      .style("border-radius", "7px")
      .style("display", "inline-block")
      .style("background", (d) => d.color);

    items
      .append("span")
      .text((d) => d.label)
      .style("font-size", "12px");
  }

  // Función para actualizar la información y los círculos
  function actualizarInfo(regionId) {
    const data = regionesData[regionId];
    if (data) {
      // Calcular conteos por categoría (fijos) y total para la región
      let aves = data.aves || [];
      
      // Si aves es un objeto, convertirlo a array con los labels correctos
      if (!Array.isArray(aves) && typeof aves === "object") {
        aves = Object.entries(aves).map(([k, v]) => {
          const groupKey = normalizeCategoryKey(k);
          return { name: getLabelForCategory(k), value: Number(v) || 0, group: groupKey };
        });
      }

      // Grupos ya mapeados por categoría
      const mappedGroups = new Set();
      Object.keys(categoryToGroups).forEach((cat) => {
        (categoryToGroups[cat] || []).forEach((g) => mappedGroups.add(g));
      });

      const counts = {
        patos: 0,
        vadeadoras: 0,
        marino: 0,
        limicolas: 0,
        otras: 0,
        total: 0,
      };

      aves.forEach((a) => {
        const v = a.value || 0;
        counts.total += v;
        // asignar a categoría si coincide
        let assigned = false;
        Object.entries(categoryToGroups).forEach(([cat, groups]) => {
          if (groups && groups.includes(a.group)) {
            counts[cat] += v;
            assigned = true;
          }
        });
        if (!assigned) {
          // cuenta en 'otras'
          counts.otras += v;
        }
      });

      // Actualizar el indicador total en el menú
      if (totalDisplay) totalDisplay.textContent = counts.total;

      // Mostrar el panel con las categorías fijas y sus conteos en el contenedor de región
      const regionInfo = document.querySelector("#region-info");
      if (regionInfo) {
        regionInfo.innerHTML = `
          <h4>${data.nombre}</h4>
          <p>${data.descripcion}</p>
          <div class="categorias-list">
            <ul>
              <li>Patos y afines: <strong>${counts.patos}</strong></li>
              <li>Vadeadoras: <strong>${counts.vadeadoras}</strong></li>
              <li>Aves marino-costeras: <strong>${counts.marino}</strong></li>
              <li>Aves limícolas: <strong>${counts.limicolas}</strong></li>
              <li>Otras aves: <strong>${counts.otras}</strong></li>
              <li>Total de aves: <strong>${counts.total}</strong></li>
            </ul>
          </div>
        `;
      }

      // Además, crear la visualización de círculos usando el filtrado actual de categorías seleccionadas
      // selectedCats: categorías seleccionadas en el panel (si hay filtros)
      const selectedCats = Array.from(groupCheckboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.dataset.category);
      let allowedGroups = new Set();
      let includeOthers = false;
      if (selectedCats.length > 0) {
        selectedCats.forEach((cat) => {
          if (cat === "otras") includeOthers = true;
          else
            (categoryToGroups[cat] || []).forEach((g) => allowedGroups.add(g));
        });
      }

      const filteredAves =
        selectedCats.length === 0
          ? aves.slice()
          : aves.filter(
              (a) =>
                allowedGroups.has(a.group) ||
                (includeOthers && !mappedGroups.has(a.group))
            );

      // Determinar la clase del SVG donde dibujar. Normalmente usamos `${regionId}-circles`,
      // pero algunos elementos en el HTML usan nombres ligeramente distintos (p. ej. "guajira-circles"
      // en lugar de "la-guajira-circles"). Intentamos varias alternativas para encontrar el SVG.
      let svgClass = `${regionId}-circles`;
      if (!document.querySelector(`.${svgClass}`)) {
        // Intentar quitar prefijo 'la-' (caso frecuente en el proyecto)
        const alt = regionId.replace(/^la-/, "");
        svgClass = `${alt}-circles`;
      }
      if (!document.querySelector(`.${svgClass}`)) {
        // Intentar con la última parte después del guion (por ejemplo 'la-guajira' -> 'guajira')
        const parts = regionId.split("-");
        const last = parts[parts.length - 1];
        svgClass = `${last}-circles`;
      }

      // Finalmente llamar a la función que dibuja las burbujas en el SVG encontrado (si existe)
      if (document.querySelector(`.${svgClass}`)) {
        createCirclePacking(filteredAves, svgClass);
      } else {
        console.warn(
          "No se encontró SVG para la región:",
          regionId,
          "intentos de clase:",
          svgClass
        );
      }
    }
  }

  // Manejo de checkboxes de región (panel lateral)
  // Al marcar una región:
  //  - añadimos la clase 'activa' a la imagen correspondiente para mostrarla
  //  - mostramos el SVG de círculos (si existe)
  //  - actualizamos la info y dibujamos las burbujas llamando a actualizarInfo
  // Ahora los checkboxes de región SOLO controlan la visibilidad de la imagen
  // (añaden/quitan la clase 'activa'). No disparan la creación de burbujas.
  regionCheckboxes.forEach((chk) => {
    chk.addEventListener("change", (e) => {
      const regionName = e.target.dataset.region;
      const regions = document.querySelectorAll(`.region.region-${regionName}`);

      if (e.target.checked) {
        // Mostrar la capa de imagen de la región
        regions.forEach((region) => region.classList.add("activa"));
      } else {
        // Ocultar la capa de imagen de la región
        regions.forEach((region) => region.classList.remove("activa"));
      }
    });
  });

  // Manejo de checkboxes de categoría (filtro por grupo)
  groupCheckboxes.forEach((cb) => {
    cb.addEventListener("change", () => {
      // Para cada región activa, recalcular y actualizar
      regionCheckboxes.forEach((rchk) => {
        if (rchk.checked) {
          actualizarInfo(rchk.dataset.region);
        }
      });
      // Si no hay región activa, actualizar total a 0
      if (![...regionCheckboxes].some((rc) => rc.checked) && totalDisplay)
        totalDisplay.textContent = 0;
    });
  });

  // Re-dibujar territorio activo al redimensionar la ventana (debounced)
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const active = Array.from(territoryCheckboxes).find((cb) => cb.checked);
      if (active) actualizarTerritorio(active.dataset.territory);
    }, 200);
  });

  // Manejo de clics en las regiones
  regiones.forEach((region) => {
    region.addEventListener("click", () => {
      const regionClass = Array.from(region.classList).find((cls) =>
        cls.startsWith("region-")
      );
      if (regionClass) {
        const regionName = regionClass.replace("region-", "");
        const checkbox = document.querySelector(
          `input[data-region="${regionName}"]`
        );
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event("change"));
        }
      }
    });
  });
});
