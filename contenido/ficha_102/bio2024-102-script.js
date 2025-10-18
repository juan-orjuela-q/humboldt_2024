const container = document.getElementById("status-filter");
if (container) {
  const speciesData = [
    {
      group: "Patos y afines",
      speciesName: "Pisingo o iguaza común",
      scientificName: "Dendrocygna autumnalis",
      order: "Anseriformes",
      family: "Anatidae",
      category: "",
      status: "Migratorio local",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Iguaza careta",
      scientificName: "Dendrocygna viduata",
      order: "Anseriformes",
      family: "Anatidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Pato real",
      scientificName: "Cairina moschata",
      order: "Anseriformes",
      family: "Anatidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Barraquete",
      scientificName: "Spatula discors",
      order: "Anseriformes",
      family: "Anatidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Pato malibú",
      scientificName: "Anas bahamensis",
      order: "Anseriformes",
      family: "Anatidae",
      category: "NT",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Patos y afines",
      speciesName: "Pato canadiense",
      scientificName: "Aythya affinis",
      order: "Anseriformes",
      family: "Anatidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Flamenco",
      scientificName: "Phoenicopterus ruber",
      order: "Phoenicopteriformes",
      family: "Phoenicopteridae",
      category: "EN",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Coyongo",
      scientificName: "Mycteria americana",
      order: "Ciconiiformes",
      family: "Ciconiidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Vaco",
      scientificName: "Tigrisoma lineatum",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Pico de zapato",
      scientificName: "Cochlearius cochlearius",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Guaco",
      scientificName: "Nycticorax nycticorax",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Guaco manglero",
      scientificName: "Nyctanassa violacea",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garcipolo",
      scientificName: "Butorides striata",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garcita verde",
      scientificName: "Butorides virescens",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garcita del ganado",
      scientificName: "Bubulcus ibis",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garzón migratorio",
      scientificName: "Ardea herodias",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza morena",
      scientificName: "Ardea cocoi",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza real",
      scientificName: "Ardea alba",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza tricolor",
      scientificName: "Egretta tricolor",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza rojiza",
      scientificName: "Egretta rufescens",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "NT",
      status: "Residente y migratorio",
      statusClass: "NT",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza patiamarilla",
      scientificName: "Egretta thula",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza azul",
      scientificName: "Egretta caerulea",
      order: "Pelecaniformes",
      family: "Ardeidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Ibis blanco",
      scientificName: "Eudocimus albus",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Ibis escarlata",
      scientificName: "Eudocimus ruber",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Ibis verde",
      scientificName: "Mesembrinibis cayennensis",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Coquito",
      scientificName: "Phimosus infuscatus",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Vadeadoras",
      speciesName: "Garza paleta",
      scientificName: "Platalea ajaja",
      order: "Pelecaniformes",
      family: "Threskiornithidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Págalo grande",
      scientificName: "Stercorarius skua",
      order: "Charadriiformes",
      family: "Stercorariidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Rayador",
      scientificName: "Rynchops niger",
      order: "Charadriiformes",
      family: "Rynchopidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota reidora",
      scientificName: "Leucophaeus atricilla",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota de Franklin",
      scientificName: "Leucophaeus pipixcan",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota de Delaware",
      scientificName: "Larus delawarensis",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gavión",
      scientificName: "Larus marinus",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota sombría",
      scientificName: "Larus fuscus",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviota argéntea",
      scientificName: "Larus argentatus",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín enano",
      scientificName: "Sternula antillarum",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín fluvial",
      scientificName: "Sternula superciliaris",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín picudo",
      scientificName: "Phaetusa simplex",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín blanco",
      scientificName: "Gelochelidon nilotica",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín piquirrojo",
      scientificName: "Hydroprogne caspia",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín común",
      scientificName: "Sterna hirundo",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín patinegro",
      scientificName: "Thalasseus sandvicensis",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Gaviotín real",
      scientificName: "Thalasseus maximus",
      order: "Charadriiformes",
      family: "Laridae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Fragata",
      scientificName: "Fregata magnificens",
      order: "Suliformes",
      family: "Fregatidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Piquero café",
      scientificName: "Sula leucogaster",
      order: "Suliformes",
      family: "Sulidae",
      category: "EN",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Pato yuyo",
      scientificName: "Phalacrocorax brasilianus",
      order: "Suliformes",
      family: "Pharacrocoracidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Marino costeras",
      speciesName: "Pelícano café",
      scientificName: "Pelecanus occidentalis",
      order: "Suliformes",
      family: "Pelecanidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Chorlo gris",
      scientificName: "Pluvialis squatarola",
      order: "Charadriiformes",
      family: "Charadriidae",
      category: "",
      status: "Migratorio",
      statusClass: "VU",
    },
    {
      group: "Limícolas",
      speciesName: "Chorlito semipalmeado",
      scientificName: "Charadrius semipalmatus",
      order: "Charadriiformes",
      family: "Charadriidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Tanga",
      scientificName: "Vanellus chilensis",
      order: "Charadriiformes",
      family: "Charadriidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Chorlito piquigrueso",
      scientificName: "Anarhynchus wilsonia",
      order: "Charadriiformes",
      family: "Charadriidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Ostrero",
      scientificName: "Haematopus palliatus",
      order: "Charadriiformes",
      family: "Haemotopodidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Alcaldito",
      scientificName: "Himantopus mexicanus",
      order: "Charadriiformes",
      family: "Recurvirostridae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Zarapito",
      scientificName: "Numenius phaeopus",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Aguja moteada",
      scientificName: "Limosa fedoa",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "VU",
    },
    {
      group: "Limícolas",
      speciesName: "vuelvepiedras",
      scientificName: "Arenaria interpres",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Playero zancón",
      scientificName: "Calidris himantopus",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "NT",
    },
    {
      group: "Limícolas",
      speciesName: "Playero blanco",
      scientificName: "Calidris alba",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Playero diminuto",
      scientificName: "Calidris minutilla",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "NT",
    },
    {
      group: "Limícolas",
      speciesName: "Playero semipalmeado",
      scientificName: "Calidris pusilla",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "NT",
    },
    {
      group: "Limícolas",
      speciesName: "Playero occidental",
      scientificName: "Calidris mauri",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Becasa piquicorta",
      scientificName: "Limnodromus griseus",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "VU",
    },
    {
      group: "Limícolas",
      speciesName: "Falaropo tricolor",
      scientificName: "Phalaropus tricolor",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Meneaculito",
      scientificName: "Actitis macularius",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Andarríos solitario",
      scientificName: "Tringa solitaria",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Patiamarilla mayor",
      scientificName: "Tringa melanoleuca",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "NT",
    },
    {
      group: "Limícolas",
      speciesName: "Playero alinegro",
      scientificName: "Tringa semipalmata",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Limícolas",
      speciesName: "Patiamarillo menor",
      scientificName: "Tringa flavipes",
      order: "Charadriiformes",
      family: "Scolopacidae",
      category: "",
      status: "Migratorio",
      statusClass: "VU",
    },
    {
      group: "Limícolas",
      speciesName: "Chequé",
      scientificName: "Jacana jacana",
      order: "Charadriiformes",
      family: "Jacanidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Chavarrí",
      scientificName: "Chauna chavaria",
      order: "Anseriformes",
      family: "Anhimidae",
      category: "VU",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Zambullidor chico",
      scientificName: "Tachybaptus dominicus",
      order: "Podicipediformes",
      family: "Podicipedidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Cocinera",
      scientificName: "Crotophaga major",
      order: "Cuculiformes",
      family: "Cuculidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Carrao",
      scientificName: "Aramus guarauna",
      order: "Gruiformes",
      family: "Aramidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Focha gris",
      scientificName: "Gallinula galeata",
      order: "Gruiformes",
      family: "Rallidae",
      category: "",
      status: "Residente y migratorio",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Purruta",
      scientificName: "Porphyrio martinica",
      order: "Gruiformes",
      family: "Rallidae",
      category: "",
      status: "Migratorio local",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Águila pescadora",
      scientificName: "Pandion haliaetus",
      order: "Accipitriformes",
      family: "Pandionidae",
      category: "",
      status: "Migratorio",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Caracolero",
      scientificName: "Rostrhamus sociabilis",
      order: "Accipitriformes",
      family: "Accipitridae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Cangrejero mayor",
      scientificName: "Buteogallus urubitinga",
      order: "Accipitriformes",
      family: "Accipitridae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Martín pescador grande",
      scientificName: "Megaceryle torquata",
      order: "Coraciiformes",
      family: "Alcedinidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Martín pescador matraquero",
      scientificName: "Chloroceryle amazona",
      order: "Coraciiformes",
      family: "Alcedinidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Martín escador pigmeo",
      scientificName: "Chloroceyle aenea",
      order: "Coraciiformes",
      family: "Alcedinidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Martín pescador chico",
      scientificName: "Chloroceryle americana",
      order: "Coraciiformes",
      family: "Alcedinidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Rastrojero barbiamarillo",
      scientificName: "Certhiaxis cinnamomeus",
      order: "Passeriformes",
      family: "Furnariidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Viudita común",
      scientificName: "Fluvicola pica",
      order: "Passeriformes",
      family: "Tyrannidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Monjita pantanera",
      scientificName: "Arundicola leucocephala",
      order: "Passeriformes",
      family: "Tyrannidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Golondrina aliblanca",
      scientificName: "Tachycineta albiventer",
      order: "Passeriformes",
      family: "Hirundinidae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "María mulata",
      scientificName: "Quiscalus mexicanus",
      order: "Passeriformes",
      family: "Icteridae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Turpial cabeciamarillo",
      scientificName: "Chrysomus icterocephalus",
      order: "Passeriformes",
      family: "Icteridae",
      category: "",
      status: "Residente",
      statusClass: "LC",
    },
    {
      group: "Otros",
      speciesName: "Conirrostro manglero",
      scientificName: "Conirostrum bicolor",
      order: "Passeriformes",
      family: "Thraupidae",
      category: "",
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

      // Aplicar filtro de categoría local (status-filter)
      if (currentFilters.status !== "all") {
        filteredSpecies = filteredSpecies.filter(
          (species) => species.category === currentFilters.status
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

    // Event listener para status-filter (categoría local)
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

    // Aplicar filtros al cargar la página (sin simular click)
    applyFilters();
  });

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
      <p class="species-description"><strong>Categoría local:</strong> ${species.category}</p>
      <hr>
      <div class="status-container">
        <span class="species-description"><strong>Estatus:</strong> ${species.status}</span>
        <span class="status ${species.statusClass}">${species.statusClass}</span>
      </div>
    `;

      speciesContainer.appendChild(card);
    });
  }

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
      <p class="species-description"><strong>Categoría local:</strong> ${species.category}</p>
      <hr>
      <div class="status-container">
        <span class="species-description"><strong>Estatus:</strong> ${species.status}</span>
        <span class="status ${species.statusClass}">${species.statusClass}</span>
      </div>
    `;

      speciesContainer.appendChild(card);
    });
  }
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
                            "./input/pajaro-centro.png",
                            series.center[0] + chart.plotLeft - 40,
                            series.center[1] + chart.plotTop - 40,
                            400,
                            290
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
        pointFormat: "{point.name}: <b>{point.cantidad}</b> ({point.percentage:.1f}%)",
        style: {
            fontFamily: "Rubik, sans-serif",
        },
    },
    legend: {
        itemStyle: {
            color: "#000000", // Texto de la leyenda en negro
            fontFamily: "Rubik, sans-serif"
        },
        itemHoverStyle: {
            color: "#333333" // Color al hacer hover
        }
    },
    plotOptions: {
        series: {
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
