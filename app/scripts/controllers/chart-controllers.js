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

angular.module('apacheZeppelinGsocApp').controller('ChartCtrl', function($scope, ChartFactory, GoogleChartFactory, HighChartFactory, NVD3ChartFactory, ChartService, ChartMetaService) {

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
    if (ChartMetaService.isMetaCompleted()) {
      var myNewChart = {};
      switch (ChartMetaService.getChartLib()) {
        case 'NVD3Chart':
          //chart is genrated from servie, service is using HighChartfactory.HighCHart Factory is extended version of ChartFactory.  
          myNewChart = ChartService.getNVD3Chart('discreteBarChart');
          vm.data[0] = myNewChart.viewModel.data[0];
          vm.options = myNewChart.viewModel.options;
          //to work old pattern (Using Factory) 
          //Will be remove after demo
          myChart = myNewChart;
          break;
        case 'highChart':
          myNewChart = ChartService.getHighChart('bar');
          vm.chartConfig = myNewChart.viewModel;
          myChart = myNewChart;
          break;
        case 'googleChart':
          myNewChart = ChartService.getGoogleChart('BarChart');
          vm.chart = myNewChart.viewModel;
          myChart = myNewChart;
          break;

      }


      renderChart(myChart.model, data);
      //nvd3 axis update
    }
  }

  function renderChart(chart, datax, fileName) {
    //var data = getData(fileName);
    console.log('drawing....');
    datax.row(chart.model).get(chart.get);
  }
  var data = {};

  function loadData(fileName) {
    console.log('loading data ' + fileName);
    setButtonActive('dataButton', fileName);
    data = getData(fileName);
    ChartMetaService.setChartDataSetName(fileName);


  }

  function loadChartLibrary(libraryIndex) {

    //loading chart library model
    //myChart.lib = libraryName[libraryIndex];
    console.log('libraryName[libraryIndex]--->');
    console.log(libraryName[libraryIndex]);
    setButtonActive('chartLibraryButton', libraryName[libraryIndex].library);
    ChartMetaService.setChartLib(libraryName[libraryIndex].library);
    drawChart(data);
  }

  function loadChartType(chartType) {
    console.log('-------------xxx---------');
    ChartMetaService.setChartType(chartType);
    console.log(ChartMetaService.getChartLib());
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