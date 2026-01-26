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
            color: "#689F38",
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
      text: "Caribe continental<br/>protegido",
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
      text: "Caribe continental<br/>NO protegido",
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
      text: "Total Caribe<br/>continental",
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
});

//conteniodo 3
document.addEventListener("DOMContentLoaded", function () {
  // Sistema de tabs
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
        targetElement.style.display = "flex";
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

  // Gráfica 1: Áreas Protegidas
  Highcharts.chart("protegidas", {
    chart: {
      backgroundColor: "transparent",
      height: "500px",
      style: {
        color: "black",
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    title: {
      text: null,
      style: {
        color: "black",
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    xAxis: {
      title: {
        text: "Año",
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
      labels: {
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
      categories: [1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2022, 2023],
    },
    yAxis: {
      title: {
        text: "Superficie (ha)",
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
      labels: {
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
    },
    tooltip: {
      headerFormat: "<b>Áreas Protegidas</b><br/>",
      pointFormat: "Año: {point.x}<br>Superficie: {point.y:,.0f} ha",
      style: {
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    series: [
      {
        name: "Áreas Protegidas",
        data: [
          1344244.64, 1324688.12, 1321623.32, 1319666.39, 1304892.77,
          1309124.26, 1301458.85, 1283375.48, 1279435.74, 1268285.49,
        ],
        color: "#2caffe",
        marker: {
          enabled: true,
        },
      },
    ],
  });

  // Gráfica 2: Áreas NO Protegidas
  Highcharts.chart("no-protegidas", {
    chart: {
      backgroundColor: "transparent",
      height: "500px",
      style: {
        color: "black",
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    title: {
      text: null,
      style: {
        color: "black",
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    xAxis: {
      title: {
        text: "Año",
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
      labels: {
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
      categories: [1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2022, 2023],
    },
    yAxis: {
      title: {
        text: "Superficie (ha)",
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
      labels: {
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
    },
    tooltip: {
      headerFormat: "<b>Áreas NO Protegidas</b><br/>",
      pointFormat: "Año: {point.x}<br>Superficie: {point.y:,.0f} ha",
      style: {
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    series: [
      {
        name: "Áreas NO Protegidas",
        data: [
          4844103.78, 4683830.64, 4481118.7, 4432951.44, 4371804.48, 4418814.03,
          4465072.25, 4462933.21, 4493430.91, 4450214.26,
        ],
        color: "#2caffe",
        marker: {
          enabled: true,
        },
      },
    ],
  });

  // Gráfica 3: Caribe Continental Total
  Highcharts.chart("caribe-continental", {
    chart: {
      backgroundColor: "transparent",
      height: "500px",
      style: {
        color: "black",
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    title: {
      text: null,
      style: {
        color: "black",
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    xAxis: {
      title: {
        text: "Año",
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
      labels: {
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
      categories: [1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2022, 2023],
    },
    yAxis: {
      title: {
        text: "Superficie (ha)",
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
      labels: {
        style: {
          color: "black",
          fontFamily: "Rubik, Arial, sans-serif",
        },
      },
    },
    tooltip: {
      headerFormat: "<b>Caribe Continental Total</b><br/>",
      pointFormat: "Año: {point.x}<br>Superficie: {point.y:,.0f} ha",
      style: {
        fontFamily: "Rubik, Arial, sans-serif",
      },
    },
    series: [
      {
        name: "Caribe Continental",
        data: [
          6188348.42, 6008518.76, 5802742.02, 5752617.83, 5676697.26,
          5727938.28, 5766531.1, 5746308.69, 5772866.65, 5718499.75,
        ],
        color: "#2caffe",
        marker: {
          enabled: true,
        },
      },
    ],
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
      enabled: false,
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
        categories: ["1970", "1990", "2000", "2010", "2020", "2022", "2023", "2023 Amazonia"],
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
