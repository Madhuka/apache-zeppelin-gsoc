'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.GoogleChartFactory 
 * @description
 * # Extending Gobal Chart Factory for Google Chart Model
 *
 */

angular.module('apacheZeppelinGsocApp').factory('GoogleChartFactory', function(ChartFactory) {

  //highChart model
  var GoogelChartChartModel = {
    type: 'bar',
    cssStyle : 'height:400px; width:600px;',
    data : {
    'cols': [{
    id: 'pizza',
    label: 'Pizza',
    type: 'string'
}, {
    id: 'populartiy',
    label: 'Populartiy',
    type: 'number'
}

    ],
    'rows': [{
c: [{
    v: 'Pepperoni'
}, {
    v: 14
}]
    }, {
c: [{
    v: 'Mushroom'
}, {
    v: 6
}]
    }, {
c: [{
    v: 'Hawaiian'
}, {
    v: 5
}]
    }, {
c: [{
    v: 'Sausage'
}, {
    v: 10
}]
    }]
},
  options : {
    'isStacked': 'true',
    'fill': 20,
    'height': 300,
    'displayExactValues': true,
    'vAxis': {
    'gridlines': {
    'count': 6
}
    },
    'hAxis': {
        'title': 'hAxis title'
    }
},
formatters : {}
};

  function googleChartModel(d) {
    return {
      c: [{
        v: d.Make
      }, {
        v: +d.Length
      }]
    };
  }

  function getGoogleChart(error, rows) {
    GoogelChartChartModel.data.rows = rows;
  }

  var googlexChart = {
    model: googleChartModel,
    get: getGoogleChart
  };

   function setChatTypeView(chartType){
    GoogleChartFactory.viewModel.type = chartType;
  }

  //google chart
  var GoogleChartFactory = new ChartFactory('googleChart', googlexChart);
  GoogleChartFactory.viewModel = GoogelChartChartModel;
  

  GoogleChartFactory.setChartType = function(chartType) {
    GoogleChartFactory.type = chartType; 
    setChatTypeView(chartType);   
 };

  // define a new internal private method for this chart object
  function setChartAxis() {
  }

  return GoogleChartFactory;
  
});