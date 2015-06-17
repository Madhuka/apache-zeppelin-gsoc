'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.ChartService 
 * @description
 * # ChartService will be using ChartFactories.
 *
 */


angular.module('apacheZeppelinGsocApp').service('ChartService', function(HighChartFactory) {

  /*using chart facotry*/
  this.getHighChart = function() {
    var myChart = HighChartFactory;
    return myChart;
  };

});