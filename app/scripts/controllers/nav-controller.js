var navControllers = angular.module('navControllers', []);

navControllers.controller('navCtrl', ['$scope', '$location',
  function($scope, $location) {

    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };

  }
]);