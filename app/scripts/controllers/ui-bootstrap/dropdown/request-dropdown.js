'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:RequestDropdownCtrl
 * @description
 * # Ctrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp').controller('RequestDropdownCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

   $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});
