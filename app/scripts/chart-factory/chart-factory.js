'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.Chart Factory 
 * @description
 * # Gobal Chart Factory
 * Controller of the top navigation, mainly use for the dropdown menu
 *
 */

angular.module('apacheZeppelinGsocApp').factory('ChartFactory', function() {

  //Genric Chart model
  var ChartFactory = function(chartLibName, chartModel) {
    this.libname = chartLibName;
    this.model = chartModel;
    this.viewModel = {};
    this.type = {};
    this.data = {};
  };

  ChartFactory.setChartType = function(chartType) {
    ChartFactory.type = chartType;
  };


  return ChartFactory;
});