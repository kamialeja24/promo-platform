'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:VendedorHomeCtrl
 * @description
 * # VendedorHomeCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('VendedorHomeCtrl', ['$scope', '$state', 'AuthenticationService',function ($scope, $state, AuthenticationService) {
      $scope.logout = function(){
        AuthenticationService.ClearCredentials();
        $state.go('login');
      };
    
  }]);
