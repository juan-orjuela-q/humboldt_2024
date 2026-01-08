
document.addEventListener("DOMContentLoaded", function() {
    function setupMap(mapId) {
        const filterContainer = document.getElementById(`${mapId}-filters`);
        const contentContainer = document.getElementById(`${mapId}-content`);

        if (!filterContainer || !contentContainer) {
            console.error(`No se encontraron los contenedores para ${mapId}`);
            return;
        }

        // Buscar todos los checkboxes dentro del contenedor de filtros
        filterContainer.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
            const layerId = checkbox.id;
            const img = document.getElementById(`img-${layerId}`);

            if (!img) {
                console.warn(`No se encontrÃ³ la imagen para ${layerId}`);
                return;
            }

            // Evento para mostrar/ocultar la imagen
            checkbox.addEventListener("change", function() {
                img.style.opacity = this.checked ? "1" : "0";
            });
        });
    }

    // Configurar todos los mapas en la pÃ¡gina
    document.querySelectorAll("[id^=bio2024-layerMap]").forEach(mapElement => {
        setupMap(mapElement.id.replace("-filters", "").replace("-content", ""));
    });
});




Highcharts.chart('container', {

    chart: {
        backgroundColor: 'transparent',
        height: 600,
        style: {
            fontFamily: 'rubik, sans-serif'
        },
        zoomType: 'xy'
    },

    title: {
        text: null,
        align: 'left',
        style: {
            color: '#000000'
        },
        margin: 50,
    },

    yAxis: {
        title: {
            text: 'Abundancia (individuo/kmÂ²)',
            style: {
                color: '#000000'
            }
        },
        labels: {
            style: {
                color: '#000000'
            }
        },
        min: 0.0,
        tickInterval: 1,
        max: 8.0,
        gridLineWidth: 0,
    },

    xAxis: {
        title: {
            text: 'AÃ±o',
            style: {
                color: '#000000'
            }
        },
        labels: {
            style: {
                color: '#000000'
            }
        },
        accessibility: {
            rangeDescription: 'Rango: 1992 a 2011'
        },
        min: 1992,
        max: 2011,
        tickInterval: 1
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
            color: '#000000'
        },
        itemHoverStyle: {
            color: '#333333'
        }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            marker: {
                enabled: true
            }
        }
    },

    series: [{
        name: 'CiÃ©naga de Zapatosa CiÃ©naga Costila - Cesar',
        color: '#689F38', 
        data: [
            { x: 2011, y: 0.00 }
        ]
    }, {
        name: 'BahÃ­a Portete - La Guajira',
        color: '#F59C00', 
        data: [
            { x: 1992, y: 0.09 },
            { x: 1995, y: 0.5 },
            { x: 2007, y: 1.37 }
        ]
    }, {
        name: 'VÃ­a Parque Isla Salamanca - Magdalena',
        color: '#695DA6', 
        data: [
            { x: 2006, y: 7.78 }
        ]
    }, {
        name: 'BahÃ­a de CispatÃ¡ - CÃ³rdoba',
        color: '#D50000',
        data: [
            { x: 2001, y: 0.5 },
            { x: 2002, y: 1.25 },
            { x: 2003, y: 0.94 },
            { x: 2004, y: 0.73 },
            { x: 2005, y: 1.09 },
            { x: 2006, y: 0.74 }
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});