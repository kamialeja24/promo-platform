'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:ExpirationDateCtrl
 * @description
 * # ProductsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('ExpirationDateCtrl', function ($scope) {
     $scope.today = function() {
        var date = new Date();
        $scope.dt = date;
        
      };
      $scope.$watch(function(scope) { 
      var current_date = $scope.dt.toISOString().slice(0,10);
        
         $scope.$emit('dateChanged', current_date);
      
      });

      $scope.clear = function () {
        $scope.dt = null;
      };

      $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
      };
      $scope.toggleMin();

      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };
      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];
      $scope.today();
  });