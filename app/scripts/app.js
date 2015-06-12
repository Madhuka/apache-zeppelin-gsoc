var zeppelinGsocApp = angular.module('zeppelinGsocApp', [
  'ngRoute',
  'chartControllers',
  'navControllers'
]);
zeppelinGsocApp.factory('Datax', function () {
    return { dataSet: 'car',
    getDataSet: function() {
      return dataSet;
    },
    setDataSet: function(name) {
      dataSet = name;
    }
     };
});
zeppelinGsocApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/contact', {
        templateUrl: 'view/contact.html'
      }).
      when('/milestone01', {
        templateUrl: 'view/milestone01.html',
        controller: 'chartCtrl'
      }).
      when('/home', {
        templateUrl: 'view/about.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);