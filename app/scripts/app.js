'use strict';

/**
 * @ngdoc overview
 * @name apacheZeppelinGsocApp
 * @description
 * # apacheZeppelinGsocApp
 *
 * Main module of the application.
 */
angular
  .module('apacheZeppelinGsocApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
