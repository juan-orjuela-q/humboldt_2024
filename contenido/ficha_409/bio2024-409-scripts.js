document.addEventListener("DOMContentLoaded", function () {
  // === GRÁFICO 1: CARIBE CONTINENTAL PROTEGIDO ===
  Highcharts.chart("caribe-protegido", {
    chart: {
      type: "pie",
      backgroundColor: "none",
      style: {
        fontFamily: "Rubik, sans-serif",
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
        "{series.name}: <b>{point.percentage:.1f}%</b><br/>Superficie: <b>{point.valor} ha</b>",
      style: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
        color: "#000000",
      },
      backgroundColor: "#FFFFFF",
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
        fontWeight: "normal",
        color: "#FFFFFF",
      },
      itemHoverStyle: {
        color: "#CCCCCC",
      },
      margin: 20,
      padding: 10,
    },
    plotOptions: {
      series: {
        borderColor: "#000000",
        borderWidth: 1,
        allowPointSelect: false,
        cursor: "pointer",
        showInLegend: true,
        // Eliminados los dataLabels que mostraban texto a los costados
      },
      pie: {
        size: "100%",
        innerSize: "75%",
        center: ["50%", "50%"],
        // Desactivar dataLabels para que no aparezcan textos alrededor
        dataLabels: {
          enabled: false, // Esto elimina todos los textos alrededor del círculo
        },
      },
    },
    series: [
      {
        name: "Caribe Continental Protegido",
        colorByPoint: true,
        data: [
          {
            name: "Natural",
            y: 64.2,
            valor: "1 268 285",
            color: "#00748B",
          },
          {
            name: "Transformado",
            y: 35.8,
            valor: "706 926",
            color: "#F59C00",
          },
        ],
      },
    ],
    subtitle: {
      text: "Caribe continental<br/>protegido<br/> 1 975 212 ha",
      align: "center",
      verticalAlign: "middle",
      useHTML: true, // Permite usar HTML en el texto
      style: {
        color: "#FFFFFF",
        fontFamily: "Rubik, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
      },
      y: 0,
    },
  });

  // === GRÁFICO 2: CARIBE CONTINENTAL NO PROTEGIDO ===
  Highcharts.chart("caribe-no-protegido", {
    chart: {
      type: "pie",
      backgroundColor: "none",
      style: {
        fontFamily: "Rubik, sans-serif",
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
        "{series.name}: <b>{point.percentage:.1f}%</b><br/>Superficie: <b>{point.valor} ha</b>",
      style: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
        color: "#000000",
      },
      backgroundColor: "#FFFFFF",
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
        fontWeight: "normal",
        color: "#FFFFFF",
      },
      itemHoverStyle: {
        color: "#CCCCCC",
      },
      margin: 20,
      padding: 10,
    },
    plotOptions: {
      series: {
        borderColor: "#000000",
        borderWidth: 1,
        allowPointSelect: false,
        cursor: "pointer",
        showInLegend: true,
      },
      pie: {
        size: "100%",
        innerSize: "75%",
        center: ["50%", "50%"],
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Caribe Continental NO Protegido",
        colorByPoint: true,
        data: [
          {
            name: "Natural",
            y: 38.5,
            valor: "4 450 214",
            color: "#00748B",
          },
          {
            name: "Transformado",
            y: 61.5,
            valor: "7 116 482",
            color: "#F59C00",
          },
        ],
      },
    ],
    subtitle: {
      text: "Caribe continental<br/>NO protegido<br/>11 566 696 ha",
      align: "center",
      verticalAlign: "middle",
      useHTML: true,
      style: {
        color: "#FFFFFF",
        fontFamily: "Rubik, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
      },
      y: 0,
    },
  });

  // === GRÁFICO 3: TOTAL CARIBE CONTINENTAL ===
  Highcharts.chart("total-caribe", {
    chart: {
      type: "pie",
      backgroundColor: "none",
      style: {
        fontFamily: "Rubik, sans-serif",
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
        "{series.name}: <b>{point.percentage:.1f}%</b><br/>Superficie: <b>{point.valor} ha</b>",
      style: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
        color: "#000000",
      },
      backgroundColor: "#FFFFFF",
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
        fontWeight: "normal",
        color: "#FFFFFF",
      },
      itemHoverStyle: {
        color: "#CCCCCC",
      },
      margin: 20,
      padding: 10,
    },
    plotOptions: {
      series: {
        borderColor: "#000000",
        borderWidth: 1,
        allowPointSelect: false,
        cursor: "pointer",
        showInLegend: true,
      },
      pie: {
        size: "100%",
        innerSize: "75%",
        center: ["50%", "50%"],
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Total Caribe Continental",
        colorByPoint: true,
        data: [
          {
            name: "Natural",
            y: 42.2,
            valor: "5 718 524",
            color: "#00748B",
          },
          {
            name: "Transformado",
            y: 57.8,
            valor: "7 823 384",
            color: "#F59C00",
          },
        ],
      },
    ],
    subtitle: {
      text: "Total Caribe<br/>continental<br/>13 541 908 ha",
      align: "center",
      verticalAlign: "middle",
      useHTML: true,
      style: {
        color: "#FFFFFF",
        fontFamily: "Rubik, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
      },
      y: 0,
    },
  });

  Highcharts.chart("porcentaje-territorio", {
    chart: {
      type: "column",
      height: "700px",
      backgroundColor: "transparent",
      style: {
        fontFamily: "Rubik, sans-serif",
      },
      spacing: [10, 10, 10, 10], // Reducir espaciado
    },
    title: {
      text: null, // Eliminar título
    },
    xAxis: {
      categories: [""], // Categoría vacía
      title: {
        text: null,
      },
      labels: {
        enabled: false, // Ocultar etiquetas
      },
      lineWidth: 0, // Eliminar línea del eje
      tickLength: 0, // Eliminar marcas
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: null, // Eliminar título
      },
      labels: {
        enabled: false, // Ocultar etiquetas
      },
      gridLineWidth: 0, // Eliminar líneas de la cuadrícula
      lineWidth: 0, // Eliminar línea del eje
    },
    legend: {
      enabled: true,
    },
    tooltip: {
      enabled: false,
      shared: false,
    },
    plotOptions: {
      column: {
        stacking: "percent",
        pointWidth: 30,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format:
            '<span style="font-size: 16px; font-weight: bold;">{point.y:.2f}%</span><br/><span style="font-size: 12px;">{point.hectareas}</span>',
          style: {
            fontFamily: "Rubik, sans-serif",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#fff",
            textOutline: "none",
          },
          verticalAlign: "middle",
          align: "left",
          x: 50,
          useHTML: true,
        },
      },
    },
    series: [
      {
        name: "Protegido",
        color: "#A22783",
        data: [
          {
            y: 14.59,
            hectareas: "11 566 696 ha",
            color: "#A22783",
          },
        ],
      },
      {
        name: "No protegido",
        color: "#D1D2D4",
        data: [
          {
            y: 85.41,
            hectareas: "1 975 212 ha",
            color: "#D1D2D4",
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Años para el eje X
  const years = [1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2022, 2023];

  // 📌 DATOS EN NEGATIVO SEGÚN LAS IMÁGENES:

  // 1️⃣ Áreas Protegidas
  const perdidaProtegidas = [
    0.0, // 1985
    -1.45, // 1990
    -1.69, // 1995
    -1.83, // 2000
    -2.95, // 2005
    -2.63, // 2010
    -3.22, // 2015
    -4.6, // 2020
    -4.91, // 2022
    -5.78, // 2023
  ];

  // 2️⃣ Áreas NO Protegidas
  const perdidaNoProtegidas = [
    0.0, // 1985
    -3.31, // 1990
    -7.64, // 1995
    -8.71, // 2000
    -10.09, // 2005
    -9.02, // 2010
    -7.97, // 2015
    -8.02, // 2020
    -7.33, // 2022
    -8.29, // 2023
  ];

  // 3️⃣ Caribe Continental TOTAL
  const perdidaCaribe = [
    0.0, // 1985
    -2.91, // 1990
    -6.33, // 1995
    -7.19, // 2000
    -8.51, // 2005
    -7.61, // 2010
    -6.94, // 2015
    -7.29, // 2020
    -6.83, // 2022
    -7.77, // 2023
  ];

  // Gráfico con 3 series en NEGATIVO
  Highcharts.chart("grafico-unico", {
    chart: {
      backgroundColor: "transparent",
      height: "500px",
      style: {
        color: "black",
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    title: {
      text: "Porcentaje de Pérdida de Cobertura Natural (1985-2023)",
      style: {
        color: "black",
        fontFamily: "Rubik, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: "Datos del Caribe Continental Colombiano - Valores negativos = pérdida",
      style: {
        color: "#666",
        fontFamily: "Rubik, sans-serif",
        fontSize: "12px",
      },
    },
    xAxis: {
      title: {
        text: "Año",
        style: {
          color: "black",
          fontFamily: "Rubik, sans-serif",
        },
      },
      labels: {
        style: {
          color: "black",
          fontFamily: "Rubik, sans-serif",
        },
      },
      categories: years,
      crosshair: true,
    },
    yAxis: {
      title: {
        text: "Porcentaje de Pérdida (%)",
        style: {
          color: "black",
          fontFamily: "Rubik, sans-serif",
        },
      },
      labels: {
        style: {
          color: "black",
          fontFamily: "Rubik, sans-serif",
        },
        formatter: function () {
          return this.value.toFixed(2) + "%";
        },
      },
      min: -12, // Valor mínimo del eje Y (abajo)
      max: 1, // Valor máximo del eje Y (arriba)
      tickInterval: 2,
      gridLineWidth: 1,
      gridLineColor: "rgba(0,0,0,0.1)",
      plotLines: [
        {
          color: "#333",
          width: 1,
          value: 0,
          zIndex: 5,
          dashStyle: "dash",
          label: {
            text: "Línea base (0% pérdida)",
            style: {
              color: "#666",
              fontSize: "11px",
            },
          },
        },
      ],
    },
    tooltip: {
      shared: true,
      useHTML: true,
      formatter: function () {
        let tooltip = "<b>Año: " + this.x + "</b><br/>";

        this.points.forEach((point) => {
          const valor = point.y;
          const porcentaje = valor.toFixed(2);
          const signo = valor > 0 ? "+" : "";

          tooltip += `
            <div style="display: flex; align-items: center; margin: 5px 0;">
              <span style="display: inline-block; width: 10px; height: 10px; 
                  background-color: ${point.color}; margin-right: 8px; border-radius: 50%;"></span>
              <div>
                <div style="font-weight: bold;">${point.series.name}</div>
                <div>Pérdida: <b>${signo}${porcentaje}%</b></div>
                <div style="font-size: 11px; color: #666; margin-top: 2px;">
                  ${valor === 0 ? "Año base" : valor < 0 ? "Pérdida de cobertura" : "Ganancia de cobertura"}
                </div>
              </div>
            </div>
          `;
        });

        return tooltip;
      },
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontFamily: "Rubik, sans-serif",
        color: "black",
      },
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
          radius: 5,
        },
        lineWidth: 2,
      },
    },
    series: [
      {
        name: "Áreas Protegidas",
        data: perdidaProtegidas,
        color: "#2CAFFE", // Azul claro
        marker: {
          symbol: "circle",
        },
        dashStyle: "Solid",
      },
      {
        name: "Áreas NO Protegidas",
        data: perdidaNoProtegidas,
        color: "#FF6B6B", // Rojo coral
        marker: {
          symbol: "square",
        },
        dashStyle: "Solid",
      },
      {
        name: "Caribe Continental Total",
        data: perdidaCaribe,
        color: "#4ECDC4", // Turquesa
        marker: {
          symbol: "triangle",
        },
        dashStyle: "Solid",
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
});
//conteniodo 4
document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("remanencia", {
    chart: {
      type: "bar",
      height: "500px",
      backgroundColor: "transparent",
      style: {
        fontFamily: "'Rubik', sans-serif",
        color: "#000000",
      },
    },
    title: {
      text: null,
      align: "left",
      style: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: "18px",
      },
    },
    xAxis: {
      categories: [
        "Total Caribe<br/> continental",
        "Caribe continental<br/> NO protegido",
        "Caribe continental<br/> protegido",
      ],
      labels: {
        style: {
          color: "#000000",
          textAlign: "center",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Porcentaje (%)",
        style: {
          color: "#000000",
        },
      },
      labels: {
        style: {
          color: "#000000",
        },
      },
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        color: "#000",
        fontFamily: "Rubik, sans-serif",
        fontSize: "14px",
      },
      itemHoverStyle: {
        color: "#00748B",
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
    },
    plotOptions: {
      bar: {
        stacking: "percent",
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.1f}%",
          color: "#000000",
          style: {
            textOutline: "none",
            fontWeight: "normal",
          },
        },
      },
    },
    series: [
      {
        name: "Natural",
        data: [
          42.2283488086615, // Total Caribe continental - Natural
          38.4743760830249, // Caribe continental NO protegido - Natural
          64.2101073430558, // Caribe continental protegido - Natural
        ],
        color: "#F59C00",
      },
      {
        name: "Transformado",
        data: [
          57.7716511913385, // Total Caribe continental - Transformado
          61.5256239169751, // Caribe continental NO protegido - Transformado
          35.7898926569442, // Caribe continental protegido - Transformado
        ],
        color: "#BBBBBB",
      },
    ],
  });
  const container = document.getElementById("conectividad");
  if (container) {
    Highcharts.chart("conectividad", {
      chart: {
        type: "column",
        backgroundColor: "none",
        height: "500px",
        style: {
          fontFamily: "Rubik, sans-serif",
          color: "#000",
          fontSize: "14px",
        },
      },
      title: {
        text: null,
        align: "left",
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      subtitle: {
        text: null,
        align: "left",
        style: {
          color: "#666",
          fontFamily: "Rubik, sans-serif",
          fontSize: "12px",
        },
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        categories: [
          "1970",
          "1990",
          "2000",
          "2010",
          "2020",
          "2022",
          "2023",
          "2023 Amazonia",
        ],
        lineColor: "#000",
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
          text: "Porcentaje(%)",
          style: {
            color: "#000",
            fontFamily: "Rubik, sans-serif",
            fontSize: "14px",
            fontWeight: "bold",
          },
        },
        labels: {
          style: {
            color: "#000",
            fontFamily: "Rubik, sans-serif",
            fontSize: "14px",
          },
          format: "{value}%",
        },
        max: 20,
        min: 0,
        gridLineWidth: 0,
        lineColor: "#000",
        lineWidth: 1,
      },
      legend: {
        enabled: false,
        align: "center",
        verticalAlign: "bottom",
        layout: "horizontal",
        itemStyle: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
        },
        itemHoverStyle: {
          color: "#00748B",
        },
      },
      plotOptions: {
        column: {
          borderWidth: 0,
          // Colores basados en el año (azules para años pasados, verde para el más reciente)
          color: "#00748B", // Color principal para todas las barras
          dataLabels: {
            enabled: true,
            format: "{y}%",
            style: {
              color: "#000",
              fontFamily: "Rubik, sans-serif",
              fontSize: window.innerWidth < 768 ? "12px" : "14px",
              textOutline: "none",
              fontWeight: "bold",
            },
            verticalAlign: "top",
            y: window.innerWidth < 768 ? -20 : -25,
          },
          states: {
            hover: {
              enabled: true,
              brightness: -0.1,
            },
          },
        },
        series: {
          pointPadding: 0.1,
          groupPadding: 0.1,
        },
      },
      tooltip: {
        style: {
          color: "#000",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
          zIndex: 9999,
        },
        backgroundColor: "#FFFFFF",
        borderColor: "#ddd",
        borderRadius: 8,
        borderWidth: 1,
        shadow: true,
        useHTML: true,
        headerFormat:
          '<div style="font-size:12px; color:#000; font-weight:bold; margin-bottom:5px;">Conectividad</div>',
        pointFormat:
          '<div style="display:flex; align-items:center; gap:8px;">' +
          '<div style="width:12px; height:12px; background-color:{point.color}; border-radius:2px;"></div>' +
          '<span style="color:#00748B">Año {point.name}</span>: ' +
          '<b style="color:#000">{point.y}% dPC</b>' +
          "</div>",
      },
      series: [
        {
          name: "Probabilidad de Conectividad (dPC)",
          colorByPoint: false,
          data: [
            {
              name: "1970",
              y: 2.98, // dPC1970
              color: "#689F38", // Azul claro para años antiguos
            },
            {
              name: "1990",
              y: 4.19, // dPC1990
              color: "#689F38",
            },
            {
              name: "2000",
              y: 4.19, // dPC2000
              color: "#689F38",
            },
            {
              name: "2010",
              y: 4.2, // dPC2010
              color: "#689F38",
            },
            {
              name: "2020",
              y: 4.47, // dPC2020
              color: "#689F38", // Azul más fuerte para años recientes
            },
            {
              name: "2022",
              y: 4.43, // dPC2022
              color: "#689F38",
            },
            {
              name: "2023",
              y: 5.43, // dPC2023
              color: "#689F38", // Verde para el año más reciente
            },
            {
              name: "2023 Amazonia",
              y: 12.76,
              color: "#00748B",
            },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 768,
            },
            chartOptions: {
              plotOptions: {
                column: {
                  dataLabels: {
                    style: {
                      fontSize: "10px",
                    },
                  },
                },
              },
            },
          },
        ],
      },
    });
  }
});
