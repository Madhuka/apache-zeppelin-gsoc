var chartControllers = angular.module('chartControllers', []);

chartControllers.controller('contactCtrl', ['$scope', '$http',
  function ($scope, $http) {    
      $scope.pageName = "contact";

  }]);

chartControllers.controller('chartCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.pageName = "chartControllers";
  }]);