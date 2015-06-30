'use strict';
/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.NVD3ChartFactory 
 * @description
 * # Extending Gobal Chart Factory for NVD3 Chart Model
 *
 */
angular.module('apacheZeppelinGsocApp').factory('NVD3ChartFactory', function(
  ChartFactory) {
  var ChartList = {
    'Bar': 'multiBarHorizontalChart',
    'Line': 'lineChart'
  };
  //NVD3 Chart model
  var NVD3ChartChartModel = {
    options: {
      chart: {
        type: 'multiBarHorizontalChart',
        height: 300,
        width: 500,
        showLegend: true,
        margin: {
          top: 20,
          right: 30,
          bottom: 20,
          left: 70
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
    data: []
  };

  function getNVD3(error, rows) {
    var data = {
      'values': rows
    };
    NVD3ChartChartModel.data[0] = data;
    console.log(NVD3ChartChartModel.data);
  }

  function nvd3Model(d) {
    return {
      label: d.Make,
      value: +d.Length,
      valuex: +d.No
    };
  }

  function setChartTypeView(chartType) {
    NVD3ChartFactory.viewModel.options.chart.type = ChartList[chartType];
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
    setChartTypeView(chartType);
  };
  NVD3ChartFactory.setChartAxis = function(data) {
    loadYAxisLabel(data);
  };
  // define a new internal private method for this chart object
  var nvd3AxisLabels = {};

  function getNVD3Yaxis(error, rows) {
    console.log(rows);
    nvd3AxisLabels = rows;
    NVD3ChartFactory.viewModel.options.chart.xAxis = {
       //'axisLabel': 'Make',
      'tickFormat': function(d) {
        return nvd3AxisLabels[d];
      }
    };
  }

  function nvd3YaxisModel(d) {
    return d.Make;
  }

  function loadYAxisLabel(fileName) {
    nvd3AxisLabels = d3.csv(fileName).row(nvd3YaxisModel).get(getNVD3Yaxis);
  }
  return NVD3ChartFactory;
});