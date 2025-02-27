// Sales
Highcharts.chart("sales", {
  chart: {
    type: "column",
    height: "350px",
  },

  title: {
    text: "Sales",
    align: "center",
  },

  xAxis: {
    categories: ["Electronic", "clothing", "Footware", "Grocery", "Book"],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "1000 (M)",
    },
  },
  tooltip: {
    valueSuffix: " (1000 M)",
  },
  plotOptions: {
    column: {
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "#fe6a35"],
          [1, "#f0b6a1"],
        ],
      },
      dataLabels: {
        enabled: true,
      },
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "sales",
      data: [366292, 300000, 207000, 168300, 127500],
    },
  ],
});

// forcasting
Highcharts.chart("forcasting", {
  chart: {
    type: "column",
    height: 350,
  },
  title: {
    text: "Forcasting",
    align: "center",
  },

  xAxis: {
    categories: ["Electronic", "Book", "Clothing", "Footware", "Grocery"],
  },
  yAxis: {
    min: 0,
    title: {
      text: "Percent %",
    },
  },
  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true,
  },
  plotOptions: {
    column: {
      stacking: "percent",
      dataLabels: {
        enabled: true,
        format: "{point.percentage:.0f}%",
      },
    },
  },
  series: [
    {
      name: "Forcasting",
      data: [100, 100, 100, 100, 100],
    },
    {
      name: "Achived",
      data: [80, 60, 50, 30, 24],
    },
  ],
});

// Growth Vs Return
Highcharts.chart("growthVsReturn", {
  chart: {
    type: "column",
    height: "350px",
  },
  title: {
    text: "Growth Vs Return",
    align: "center",
    style: {
      color: "#111",
      fontSize: "20",
    },
  },
  xAxis: {
    categories: ["Electronic", "clothing", "Footware", "Grocery", "Book"],
  },
  colors: ["#00FF00", "#FF0000"],

  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
      },
      borderRadius: "3px",
    },
  },

  series: [
    {
      name: "Growth",
      data: [306292, 260000, 207000, 168300, 127500],
    },
    {
      name: "Return",
      data: [-201086, -181086, -151086, -101086, -91086],
    },
  ],
});

// Activity Sales (continent)
Highcharts.chart("activitySalesContinent", {
  chart: {
    type: "bar",
    height: 350,
  },
  title: {
    text: "Continent Wise Sales",
    align: "left",
  },

  xAxis: {
    categories: [
      "Asia",
      "Africa",
      "Europe",
      "SA",
      "NA",
      "Oceania",
      "Antarctica",
    ],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "1000 (M)",
    },
  },
  tooltip: {
    valueSuffix: " (1000 M)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Sales",
      data: [366292, 300000, 207000, 168300, 127500, 30000, 60006],
      color: "#6b8abc",
    },
  ],
});

// Activity Sales (Country)
Highcharts.chart("activitySalesCountry", {
  chart: {
    type: "bar",
    height: 350,
  },
  title: {
    text: "Country Wise Sales",
    align: "left",
  },

  xAxis: {
    categories: [
      "India",
      "England",
      "Germany",
      "Chaina",
      "Nepal",
      "Sri Lanka",
      "Canada",
    ],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "1000 (M)",
    },
  },

  tooltip: {
    valueSuffix: " (1000 M)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Sales",
      data: [366292, 300000, 207000, 168300, 127500, 30000, 60006],
      color: "orange",
    },
  ],
});

// Activity Sales (In India)
Highcharts.chart("activitySalesIndia", {
  chart: {
    type: "bar",
    height: 350,
  },
  title: {
    text: "Sales In India",
    align: "left",
  },

  xAxis: {
    categories: [
      "Mumbai",
      "Delhi",
      "Pune",
      "Goa",
      "Gujrat",
      "Haryana",
      "Punjab",
    ],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "1000 (M)",
    },
  },

  tooltip: {
    valueSuffix: " (1000 M)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Sales",
      data: [36292, 30000, 25000, 16300, 12500, 11000, 9006],
      color: "#544fc5",
    },
  ],
});

// Activity Sales (In city)
Highcharts.chart("activitySalesCity", {
  chart: {
    type: "bar",
    height: 350,
  },
  title: {
    text: "Sales In City",
    align: "left",
  },

  xAxis: {
    categories: [
      "Mumbai",
      "Delhi",
      "Pune",
      "Goa",
      "Gujrat",
      "Haryana",
      "Punjab",
    ],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "1000 (M)",
    },
  },

  tooltip: {
    valueSuffix: " (1000 M)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Sales",
      data: [36292, 30000, 25000, 16300, 12500, 11000, 9006],
      color: "#fe6a35",
    },
  ],
});

// Sales By Channels
Highcharts.chart("salesByChannels", {
  chart: {
    type: "pie",
    height: 350,
  },
  title: {
    text: "Sales By Channels",
    align: "left",
  },

  accessibility: {
    announceNewData: {
      enabled: true,
    },
    point: {
      valueSuffix: "%",
    },
  },

  plotOptions: {
    series: {
      borderRadius: 5,
      dataLabels: [
        {
          enabled: true,
          distance: 15,
          format: "{point.name}",
        },
        {
          enabled: true,
          distance: "-30%",
          filter: {
            property: "percentage",
            operator: ">",
            value: 5,
          },
          format: "{point.y:.1f}%",
          style: {
            fontSize: "0.9em",
            textOutline: "none",
          },
        },
      ],
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
  },

  series: [
    {
      name: "Browsers",
      colorByPoint: true,
      data: [
        {
          name: "Online",
          y: 25.04,
        },
        {
          name: "Corporates",
          y: 9.47,
        },
        {
          name: "Dealers",
          y: 9.32,
        },
        {
          name: "Retails",
          y: 18.15,
        },
        {
          name: "Distributers",
          y: 11.02,
        },
        {
          name: "others",
          y: 5.02,
        },
      ],
    },
  ],
});

// Top 5 Sales Category
Highcharts.chart("salesCategory", {
  chart: {
    type: "bar",
    height: 350,
  },
  title: {
    text: "Top 5 Sales Categories",
    align: "left",
  },

  xAxis: {
    categories: ["Electronic", "clothing", "Footware", "Grocery", "Book"],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "1000 (M)",
    },
  },
  tooltip: {
    valueSuffix: " (1000 M)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Sales",
      data: [366292, 300000, 207000, 168300, 127500],
    },
  ],
});

// Top Produts Segment Wise
Highcharts.chart("productSegment", {
  chart: {
    type: "pie",
    height: 350,
  },
  title: {
    text: "Product Sales Segment",
    align: "left",
  },

  accessibility: {
    announceNewData: {
      enabled: true,
    },
    point: {
      valueSuffix: "%",
    },
  },

  plotOptions: {
    series: {
      borderRadius: 5,
      dataLabels: [
        {
          enabled: true,
          distance: 15,
          format: "{point.name}",
        },
        {
          enabled: true,
          distance: "-30%",
          filter: {
            property: "percentage",
            operator: ">",
            value: 5,
          },
          format: "{point.y:.1f}%",
          style: {
            fontSize: "0.9em",
            textOutline: "none",
          },
        },
      ],
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
  },

  series: [
    {
      name: "Browsers",
      colorByPoint: true,
      data: [
        {
          name: "Electronics",
          y: 61.04,
          drilldown: "Electronics",
        },
        {
          name: "Book",
          y: 9.47,
          drilldown: "Book",
        },
        {
          name: "Clothing",
          y: 9.32,
          drilldown: "Clothing",
        },
        {
          name: "Footware",
          y: 8.15,
          drilldown: "Footware",
        },
        {
          name: "Grocery",
          y: 11.02,
          drilldown: "Grocery",
        },
      ],
    },
  ],
  drilldown: {
    series: [
      {
        name: "Electronics",
        id: "Electronics",
        data: [
          ["Mobile", 36.89],
          ["Laptops", 18.16],
          ["watches", 0.54],
          ["TV", 0.7],
          ["Earbuds", 0.8],
          ["Camera", 0.41],

          ["others", 0.17],
        ],
      },
      {
        name: "Book",
        id: "Book",
        data: [
          ["Novels", 0.1],
          ["Auto Bigraphy", 2.01],
          ["Dramas", 2.29],
          ["Fictional", 0.49],
          ["Comics", 2.48],
          ["Religious", 0.64],

          ["Others", 0.16],
        ],
      },
      {
        name: "Cloting",
        id: "Clothing",
        data: [
          ["Women Wear", 6.62],
          ["Mens Wear", 2.55],
          ["Kids Wear", 0.15],

          ["Shirt & Pants", 0.15],
          ["Jeans & Tops", 0.15],
          ["Others", 0.15],
        ],
      },
      {
        name: "Footware",
        id: "Footware",
        data: [
          ["Boots", 4.17],
          ["Sneakers", 3.33],
          ["Heels", 0.11],
          ["Slippers", 0.23],
          ["Clog", 0.16],
          ["Others", 0.15],
        ],
      },

      {
        name: "Grocery",
        id: "Grocery",
        data: [
          ["Fruit and Berries", 4.17],
          ["Corn", 3.33],
          ["peas", 0.11],
          ["Cookie", 0.23],
          ["Noodles", 0.16],
          ["Others", 0.15],
        ],
      },
    ],
  },
});

// Top 5 Buyers
Highcharts.chart("buyers", {
  chart: {
    type: "column",
    height: 350,
  },
  title: {
    text: "Top 5 Buyers",
    align: "left",
  },

  xAxis: {
    categories: ["Buyer 1", "Buyer 2", "Buyer 3", "Buyer 4", "Buyer 5"],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "1000 metric tons (MT)",
    },
  },
  tooltip: {
    valueSuffix: " (1000 MT)",
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
      },
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },

  series: [
    {
      name: "Sale",
      data: [406292, 360000, 307000, 288300, 277500],
      color: "#00e272",
    },
  ],
});

// Sales By Marketing
Highcharts.chart("salesByMarketing", {
  chart: {
    type: "pie",
    height: 350,
  },
  title: {
    text: "sales By Marketing",
    align: "left",
  },

  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      borderWidth: 2,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b><br>{point.percentage}%",
        distance: 20,
      },
    },
  },
  series: [
    {
      enableMouseTracking: false,
      animation: {
        duration: 2000,
      },
      colorByPoint: true,
      data: [
        {
          name: "Google Ads ",
          y: 25,
        },
        {
          name: "Facebook",
          y: 20,
        },
        {
          name: "Instagram",
          y: 20,
        },
        {
          name: "Marketing",
          y: 20,
        },
        {
          name: "Email",
          y: 5,
        },
        { name: "Twitter", y: 10 },
      ],
    },
  ],
});

// Geological Sales Country Wise
(async () => {
  const topology = await fetch(
    "https://code.highcharts.com/mapdata/custom/world-highres3.topo.json"
  ).then((response) => response.json());

  const data = [
    ["us", 10],
    ["ca", 20],
    ["in", 10],
    ["ru", 20],
    ["ge", 10],
    ["br", 20],
    ["ch", 10],
    ["bh", 20],
    ["sr", 10],
    ["nz", 20],
    ["au", 20],
    ["fr", 20],
    ["pk", 20],
  ];

  // Create the chart
  Highcharts.mapChart("countryMap", {
    chart: {
      map: topology,
      height: 350,
    },
    title: {
      text: "Geological Sales - Country",
      align: "left",
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "top",
        x: 380,
      },
    },
    legend: {
      align: "center",
      verticalAlign: "top",
      enabled: false,
      y: 0,
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        data: data,
        name: "Random data",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
  });
})();

//  Geological Sales India Wise
(async () => {
  const topology = await fetch(
    "https://code.highcharts.com/mapdata/countries/in/in-all.topo.json"
  ).then((response) => response.json());

  const data = [
    ["in-py", 10],
    ["in-ld", 11],
    ["in-wb", 12],
    ["in-or", 13],
    ["in-br", 14],
    ["in-sk", 15],
    ["in-ct", 16],
    ["in-tn", 17],
    ["in-mp", 18],
    ["in-2984", 19],
    ["in-ga", 20],
    ["in-nl", 21],
    ["in-mn", 22],
    ["in-ar", 23],
    ["in-mz", 24],
    ["in-tr", 25],
    ["in-3464", 26],
    ["in-dl", 27],
    ["in-hr", 28],
    ["in-ch", 29],
    ["in-hp", 30],
    ["in-jk", 31],
    ["in-kl", 32],
    ["in-ka", 33],
    ["in-dn", 34],
    ["in-mh", 35],
    ["in-as", 36],
    ["in-ap", 37],
    ["in-ml", 38],
    ["in-pb", 39],
    ["in-rj", 40],
    ["in-up", 41],
    ["in-ut", 42],
    ["in-jh", 43],
  ];

  // Create the chart
  Highcharts.mapChart("indiaMap", {
    chart: {
      map: topology,
      height: 350,
    },

    title: {
      text: "Geological Sales",
      align: "left",
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "top",
        x: 380,
      },
    },
    legend: {
      align: "center",
      verticalAlign: "top",
      enabled: false,
      y: 0,
    },
    colorAxis: {
      min: 0,
    },

    series: [
      {
        data: data,
        name: "Random data",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
  });
})();

//  Geological Sales Disrict Wise
(async () => {
  const topology = await fetch(
    "https://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.topo.json"
  ).then((response) => response.json());
  const data = [
    { code: "in-KA", value: 10 }, // Karnataka
    { code: "in-MH", value: 15 }, // Maharashtra
    { code: "in-TN", value: 20 }, // Tamil Nadu
    { code: "in-UP", value: 5 }, // Uttar Pradesh
  ];

  // Create the chart
  Highcharts.mapChart("districtMap", {
    chart: {
      map: topology,
      height: 350,
    },

    title: {
      text: "Geological Sales - District",
      align: "left",
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "top",
        x: 380,
      },
    },
    legend: {
      align: "center",
      verticalAlign: "top",
      enabled: false,
      y: 0,
    },
    colorAxis: {
      min: 0,
    },

    series: [
      {
        data: data,
        name: "Random data",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
  });
})();

// Marketing Sales Team Wise
Highcharts.chart("marketingSalesTeamWise", {
  chart: {
    type: "column",
    height: 350,
  },
  title: {
    text: "Marketing Team Performance",
    align: "left",
  },

  xAxis: {
    categories: ["Team 1", "Team 2", "Team 3", "Team 4", "Team5"],
    accessibility: {
      description: "Months of the year",
    },
    backgroundColor: "pink",
  },
  yAxis: {
    title: {
      text: "Amount",
    },
    labels: {
      format: "{value} K",
    },
  },
  tooltip: {
    crosshairs: true,
    shared: true,
  },
  plotOptions: {
    column: {
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "#3ab456"],
          [1, "#fdef1d"],
          [2, "#d545fc"],
        ],
      },
    },
    spline: {
      marker: {
        radius: 4,
        lineColor: "#666666",
        lineWidth: 0.1,
      },
    },
  },
  series: [
    {
      name: "Marketing Sales",
      marker: {
        symbol: "square",
      },
      data: [6, 5, 7, 4, 6],
    },
  ],
});
