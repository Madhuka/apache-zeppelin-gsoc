'use strict';

/**
 * @ngdoc overview
 * @name apacheZeppelinGsocApp
 * @description
 * # apacheZeppelinGsocApp
 * @author madhuka udantha
 *
 * Main module of the application.
 */
angular
  .module('apacheZeppelinGsocApp', [
    'ngResource',
    'ngRoute',
	  'googlechart',
    'highcharts-ng',
    'nvd3'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/about.html'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'ChartCtrl'
      })
      .when('/milestone01', {
        templateUrl: 'views/milestone01.html',
        controller: 'ChartCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	    .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
