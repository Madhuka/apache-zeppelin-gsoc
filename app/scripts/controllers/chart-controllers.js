
//new move.
'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the top navigation, mainly use for the dropdown menu
 *
 * @author madhuka udantha
 */

angular.module('apacheZeppelinGsocApp').controller('ChartCtrl', function($scope) {
  
  var vm = this;

 
  function loadData(fileName) {   
            console.log('loading data '+fileName);
            setButtonActive('dataButton',fileName);
           /* data = getData(fileName);
            setActive('b1',fileName);
            //$scope.Datax = Datax;
            console.log(Datax)
            loadYAxisLabel(fileName);
            $scope.a = true;
            drawChart();*/
        }

  //deafult button picker
  var active={'dataButton':false,'b2':false,'b3':'bar'};

  function setButtonActive(set,type) {
            active[set] = type;
        }

  function isButtonActive(set,type) {
           return active[set] === type;
        }

  vm.loadData = loadData;
  vm.isButtonActive = isButtonActive;

  
});