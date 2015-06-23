'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.NVD3ChartFactory 
 * @description
 * # Extending Gobal Chart Factory for NVD3 Chart Model
 *
 */

angular.module('apacheZeppelinGsocApp').factory('NVD3ChartFactory', function(ChartFactory) {

  var ChartList = {'Bar':'discreteBarChart','Line':'lineChart'};
  ////TO-DO Sample Data will remove after model set.
  var NVD3ChartChartModel = {
    options: {
      chart: {
        type: 'discreteBarChart',
        height: 300,
        width: 500,
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
        'label': '',
        'value': 1,
        'valuex': 0
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
    setChatTypeView(chartType);

    //loadYAxisLabel('car');
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
      'axisLabel': 'Make',
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