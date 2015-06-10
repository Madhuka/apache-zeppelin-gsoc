var zeppelinGsocApp = angular.module('zeppelinGsocApp', [
  'ngRoute',
  'chartControllers',
  'navControllers'
]);

zeppelinGsocApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/contact', {
        templateUrl: 'partials/contact.html'
      }).
      when('/milestone01', {
        templateUrl: 'partials/milestone01.html',
        controller: 'chartCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/about.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);