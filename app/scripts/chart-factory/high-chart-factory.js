'use strict';
/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.HighChartFactory 
 * @description
 * # Extending Gobal Chart Factory for High Chart Model
 *
 */
angular.module('apacheZeppelinGsocApp').factory('HighChartFactory', function(ChartMetaService, ChartFactory) {
  var ChartList = {
    'Bar': 'bar',
    'Line': 'line'
  };
  //highChart model
  var HighChartChartModel = {
    options: {
      chart: {
        type: 'bar'
      }
    },
    xAxis: {
      categories: []
    },
    series: [{
      data: []
    }],
    size: {
      width: 500,
      height: 300
    },
    loading: false
  };
  //high chart
  // define a new internal private method for this chart object
  function highChartModel(d) {
    return +d.Length;
  }

  function getHighChart(error, rows) {
    console.log('loading for view');
    console.log(rows);
    HighChartChartModel.series[0].data = rows;
  }

  function setChartTypeView(chartType) {
    HighChartFactory.viewModel.options.chart.type = ChartList[chartType];
  }

  function setChartAxis() {}
  var highxChart = {
    model: highChartModel,
    get: getHighChart
  };
  //setting up the highchart and chart view model for this chart
  var HighChartFactory = new ChartFactory('highxChart', highxChart);
  HighChartChartModel.series[0].data = null;
  HighChartFactory.viewModel = HighChartChartModel;
  HighChartFactory.setChartType = function(chartType) {
    HighChartFactory.type = chartType;
    setChartTypeView(chartType);
  };
  HighChartFactory.setChartAxis = function(data) {
    loadYAxisLabel(data);
  };
  HighChartFactory.dataTransform = function() {
    ChartMetaService.getChartData().row(highxChart.model).get(highxChart.get);
  };
  var highAxisLabels = {};

  function getHighYaxis(error, rows) {
    console.log(rows);
    highAxisLabels = rows;
    HighChartFactory.viewModel.xAxis.categories = highAxisLabels;
  }

  function highYaxisModel(d) {
    return d.Make;
  }

  function loadYAxisLabel(fileName) {
    highAxisLabels = d3.csv(fileName).row(highYaxisModel).get(getHighYaxis);
  }
  return HighChartFactory;
});