/*
 *This contains the sample chats for google charts, nvd3 and high charts
 *
 */

//google chart
var googleChart = {};
googleChart.type = "BarChart";
googleChart.cssStyle = "height:400px; width:600px;";
googleChart.data = {
    "cols": [{
    id: "pizza",
    label: "Pizza",
    type: "string"
}, {
    id: "populartiy",
    label: "Populartiy",
    type: "number"
}

    ],
    "rows": [{
c: [{
    v: "Pepperoni"
}, {
    v: 14
}]
    }, {
c: [{
    v: "Mushroom"
}, {
    v: 6
}]
    }, {
c: [{
    v: "Hawaiian"
}, {
    v: 5
}]
    }, {
c: [{
    v: "Sausage"
}, {
    v: 10
}]
    }]
};

googleChart.options = {
    "isStacked": "true",
    "fill": 20,
    "height": 300,
    "displayExactValues": true,
    "vAxis": {
    "gridlines": {
    "count": 6
}
    },
    "hAxis": {
        "title": "hAxis title"
    }
};

googleChart.formatters = {};

//nvd3 chart
var ncd3Chart1 = {};
ncd3Chart1.options = {
    chart: {
type: "discreteBarChart",
height: 300,
width: 400,
margin: {
    top: 20,
    right: 20,
    bottom: 60,
    left: 55
},
x: function(d) {
    return d.valuex;
},
y: function(d) {
    return d.value;
},
showValues: true,
transitionDuration: 500,
xAxis: {
    axisLabel: "X Axis"
},
yAxis: {
    axisLabel: "Y Axis",
    axisLabelDistance: 10
}
    }
};
ncd3Chart1.data = [{

    values: [{
"label": "A",
"value": 5,
"valuex": 0
    }, {
"label": "B",
"value": 10,
"valuex": 1
    }, {
"label": "C",
"value": 24,
"valuex": 2
    }, {
"label": "D",
"value": 8,
"valuex": 3
    }]
}];

//highchart 
var highchart = {};
highchart.chartConfig = {
    options: {
        title: {
    text: ""
},
chart: {
    type: "bar"
}
    },
    xAxis: {
categories: ["A", "B", "C", "D"]
    },
    series: [{
data: [10, 15, 12, 8]
    }],
    size: {
width: 500,
height: 300
    },
    loading: false
}