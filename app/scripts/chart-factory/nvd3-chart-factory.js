'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.NVD3ChartFactory 
 * @description
 * # Extending Gobal Chart Factory for NVD3 Chart Model
 *
 */

angular.module('apacheZeppelinGsocApp').factory('NVD3ChartFactory', function(ChartFactory) {


  var NVD3ChartChartModel = {
    options: {
      chart: {
        type: 'discreteBarChart',
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
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: 10
        }
      }
    },
    data: [{

      values: [{
        'label': 'A',
        'value': 5,
        'valuex': 0
      }, {
        'label': 'B',
        'value': 10,
        'valuex': 1
      }, {
        'label': 'C',
        'value': 24,
        'valuex': 2
      }, {
        'label': 'D',
        'value': 8,
        'valuex': 3
      }]
    }]
  };

  function getNVD3(error, rows) {
    NVD3ChartChartModel.data[0].values = rows;
  }

  function nvd3Model(d) {
    return {
      label: d.Make,
      value: +d.Length,
      valuex: +d.No
    };
  }

  function setChatTypeView(chartType) {
    NVD3ChartFactory.viewModel.options.chart.type = chartType;
  }

  var NVD3Chart = {
    model: nvd3Model,
    get: getNVD3
  };

  //nvd3 chart
  var NVD3ChartFactory = new ChartFactory('NVD3Chart', NVD3Chart);
  NVD3ChartFactory.viewModel = NVD3ChartChartModel;


  NVD3ChartFactory.setChartType = function(chartType) {
    NVD3ChartFactory.type = chartType;
    setChatTypeView(chartType);
  };


  // define a new internal private method for this chart object
  function setChartAxis() {}

  return NVD3ChartFactory;

});