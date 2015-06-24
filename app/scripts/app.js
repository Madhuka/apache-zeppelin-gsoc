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
      .when('/milestone01', {
        templateUrl: 'views/milestone01.html',
        controller:'ChartCtrl'
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
