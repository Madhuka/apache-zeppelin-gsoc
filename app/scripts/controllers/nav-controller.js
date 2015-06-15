'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.controller:navCtrl
 * @description
 * # navCtrl
 * Controller of the top navigation, mainly use for the dropdown menu
 *
 * @author madhuka udantha
 */

angular.module('apacheZeppelinGsocApp').controller('NavCtrl', function($scope, $rootScope, $location) {
  	
  /*vm stands for ViewModel*/	
  var vm = this;

  function isActive(viewLocation) {
   return viewLocation === $location.path();
  }  

  vm.isActive = isActive;

  
});