'use strict';
/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.GoogleChartFactory 
 * @description
 * # Extending Gobal Chart Factory for Google Chart Model
 *
 */
angular.module('apacheZeppelinGsocApp').factory('GoogleChartFactory', function(
  ChartFactory) {
  var ChartList = {
    'Bar': 'BarChart',
    'Line': 'LineChart'
  };
  //googleChart model (sample chart data model)
  //TO-DO Sample Data will remove after model set.
  var GoogelChartChartModel = {
    type: 'BarChart',
    cssStyle: 'height:400px; width:500px;',
    data: {
      'cols': [{
        id: 'pizza',
        label: 'Pizza',
        type: 'string'
      }, {
        id: 'populartiy',
        label: 'Populartiy',
        type: 'number'
      }],
      'rows': [{
        c: [{
          v: 'Pepperoni'
        }, {
          v: 14
        }]
      }]
    },
    options: {
      'isStacked': 'true',
      'fill': 20,
      'height': 400,
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
    formatters: {}
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

  function setChartTypeView(chartType) {
    GoogleChartFactory.viewModel.type = ChartList[chartType];
  }
  //google chart
  var GoogleChartFactory = new ChartFactory('googleChart', googlexChart);
  GoogleChartFactory.viewModel = GoogelChartChartModel;
  GoogleChartFactory.setChartType = function(chartType) {
    GoogleChartFactory.type = chartType;
    setChartTypeView(chartType);
  };
  // define a new internal private method for this chart object
  function setChartAxis() {}
  return GoogleChartFactory;
});