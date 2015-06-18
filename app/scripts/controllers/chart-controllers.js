'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the top navigation, mainly use for the dropdown menu
 *
 * @author madhuka udantha
 */

angular.module('apacheZeppelinGsocApp').controller('ChartCtrl', function($scope, ChartFactory, GoogleChartFactory, HighChartFactory, NVD3ChartFactory, ChartService) {

  var vm = this;
  var myChart = {};

  var libraryName = [{
    'library': 'NVD3Chart'
  }, {
    'library': 'highChart'
  }, {
    'library': 'googleChart'
  }];

  var chartTypes = ['Line', 'Bar'];

  function drawChart(data) {
    console.log('draw the chart ' + myChart.lib);
    console.log(myChart);

    if (myChart.model !== null) {
      renderChart(myChart.model, data);
      //nvd3 axis update
    }
  }

  function renderChart(chart, datax) {
    console.log('drawing....');
    datax.row(chart.model).get(chart.get);
  }
  var data = {};

  function loadData(fileName) {
    console.log('loading data ' + fileName);

    setButtonActive('dataButton', fileName);
    data = getData(fileName);
    //ChartService.getHighChart().type
    //console.log(ChartService.getHighChart().type);
    //drawChart(data);
    //vm.chartConfig  = ChartService.getHChart();
    //vm.chartConfig  = ChartService.getHighChart().type;

  }

  function loadChartLibrary(libraryIndex) {
    var myNewChart = {};
    //loading chart library model
    //myChart.lib = libraryName[libraryIndex];
    console.log('libraryName[libraryIndex]--->');
    console.log(libraryName[libraryIndex]);
    setButtonActive('chartLibraryButton', libraryName[libraryIndex].library);
    switch (libraryIndex) {
      case 0:
        myNewChart = ChartService.getNVD3Chart('discreteBarChart');
        vm.data[0] = myNewChart.viewModel.data[0];
        vm.options = myNewChart.viewModel.options;
        //to work old pattern (Using Factory)
        myChart = myNewChart;
        //myChart = NVD3ChartFactory;
        //vm.data[0].values = NVD3ChartFactory.data;
        break;
      case 1:
        //chart is genrated from servie, service is using HighChartfactory.HighCHart Factory is extended version of ChartFactory.         
        myNewChart = ChartService.getHighChart('bar');
        vm.chartConfig = myNewChart.viewModel;
        //to work old pattern (Using Factory)
        myChart = myNewChart;
        break;
      case 2:
        myNewChart = ChartService.getGoogleChart('BarChart');
        vm.chart = myNewChart.viewModel;
        //to work old pattern (Using Factory)
        myChart = myNewChart;
        break;

    }

    drawChart(data);
  }

  function loadChartType(chartType) {
    setButtonActive('chartTypeButton', chartType);
    //To-Do CHart model will be completing for rendering the chart
  }


  function getData(fileName) {
    return d3.csv('data/' + fileName + '.csv');
  }

  //deafult button picker
  var active = {
    'dataButton': false,
    'chartLibraryButton': false,
    'chartTypeButton': false
  };

  function setButtonActive(set, type) {
    active[set] = type;
  }

  function isButtonActive(set, type) {
    return active[set] === type;
  }

  function isButtonSelected(set) {
    return active[set];
  }

  vm.loadData = loadData;
  vm.isButtonActive = isButtonActive;
  vm.isButtonSelected = isButtonSelected;
  vm.loadChartLibrary = loadChartLibrary;
  vm.loadChartType = loadChartType;
  /*To-DO (Testing) chart lib testing for lib */
  vm.options = ncd3Chart1.options;
  vm.data = ncd3Chart1.data;
  vm.chartConfig = highchart.chartConfig;
  vm.chart = googleChart;
  /*END*/

});