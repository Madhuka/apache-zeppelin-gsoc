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
    ChartLib: null,
    ChartTemplateURL: null,
    ChartService: null,
    ChartType: null,
    ChartDataSetName: null,
    ChartDataSetPath: null,
    ChartData: null
  };
  //getters
  this.getChartLib = function() {
    return MetaModel.ChartLib;
  };
  this.getChartType = function() {
    return MetaModel.ChartType;
  };
  this.getChartTemplateURL = function() {
    return MetaModel.ChartTemplateURL;
  };
  this.getChartService = function() {
    return MetaModel.ChartService;
  };
  this.getChartDataSetName = function() {
    return MetaModel.ChartDataSetName;
  };
  this.getChartDataSetPath = function() {
    return MetaModel.ChartDataSetPath;
  };
  this.getChartData = function() {
    return MetaModel.ChartData;
  };
  //setters
  this.setChartLib = function(ChartLib) {
    MetaModel.ChartLib = ChartLib;
  };
  this.setChartType = function(ChartType) {
    MetaModel.ChartType = ChartType;
  };
  this.setChartTemplateURL = function(ChartTemplateURL) {
    MetaModel.ChartTemplateURL = ChartTemplateURL;
  };
  this.setChartService = function(ChartService) {
    MetaModel.ChartService = ChartService;
  };
  this.setChartDataSetName = function(ChartDataSetName) {
    MetaModel.ChartDataSetName = ChartDataSetName;
    MetaModel.ChartDataSetPath = 'data/' + ChartDataSetName + '.csv';
    MetaModel.ChartData = d3.csv(MetaModel.ChartDataSetPath);
  };
  //looking for UI model logic
  this.isMetaCompleted = function() {
    return MetaModel.ChartType !== null;
  };
});