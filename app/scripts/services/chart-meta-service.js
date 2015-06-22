'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.ChartMetaService 
 * @description
 * # ChartMetaService will be using Handle Basic Chart Meta Details.
 *
 */


angular.module('apacheZeppelinGsocApp').service('ChartMetaService', function() {

  /*Chart Meta Data Service*/
  var MetaModel = {
    ChartLib:null,
    ChartTemplateURL:null,
    ChartType:null,
    ChartDataSetName:null
  };

  //getters
  this.getChartLib = function() {
    return MetaModel.ChartLib ;
  };

  this.getChartType = function() {
    return MetaModel.ChartType ;
  };

  this.getChartTemplateURL = function() {
    return MetaModel.ChartTemplateURL ;
  };

  this.getChartDataSetName = function() {
    return MetaModel.ChartDataSetName ;
  };

  //setters
  this.setChartLib = function(ChartLib) {
    MetaModel.ChartLib = ChartLib ;
  };

  this.setChartType = function(ChartType) {
    MetaModel.ChartType = ChartType ;
  };

  this.setChartTemplateURL = function(ChartTemplateURL) {
    MetaModel.ChartTemplateURL = ChartTemplateURL;
  };

  this.setChartDataSetName = function(ChartDataSetName) {
    MetaModel.ChartDataSetName = ChartDataSetName ;
  };

 //looking for UI model logic
 this.isMetaCompleted = function() {
    return MetaModel.ChartType !== null ;
  };

});