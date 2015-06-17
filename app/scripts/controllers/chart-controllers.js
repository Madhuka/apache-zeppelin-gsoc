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

angular.module('apacheZeppelinGsocApp').controller('ChartCtrl', function($scope, ChartFactory, GoogleChartFactory, HighChartFactory, NVD3ChartFactory) {

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
    console.log(datax);
    datax.row(chart.model).get(chart.get);
  }
  var data = {};

  function loadData(fileName) {
    console.log('loading data ' + fileName);
    setButtonActive('dataButton', fileName);
    data = getData(fileName);

  }

  function loadChartLibrary(libraryIndex) {
    //loading chart library model
    //myChart.lib = libraryName[libraryIndex];
    console.log('libraryName[libraryIndex]--->');
    console.log(libraryName[libraryIndex]);
    setButtonActive('chartLibraryButton', libraryName[libraryIndex].library);
    switch(libraryIndex) {
    case 0:
        myChart = NVD3ChartFactory;
        //vm.options = ncd3Chart1.options;
        vm.data[0].values = NVD3ChartFactory.data;
        break;
    case 1:
        myChart = HighChartFactory;
        vm.chartConfig.series[0].data = HighChartFactory.data;        
        break;
    case 2:
        myChart = GoogleChartFactory;
        vm.chart.data.rows = GoogleChartFactory.data;
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