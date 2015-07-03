'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('LoginCtrl',['$scope','AuthenticationService','$state', function ($scope, AuthenticationService,$state) {
    $scope.user = {};
    $scope.errors = {};
    $scope.login = function (user){
      $scope.user = user;
      console.log($scope.user);
      AuthenticationService.Login($scope.user.username, $scope.user.password, function(response) {
        if(response){
        if(response.success) {
            var userObject = response.manager;
            AuthenticationService.SetCredentials($scope.user.username, $scope.user.password,userObject);
            $state.go('list-of-products');
            $scope.error = false;
            $scope.dataLoading = false;
          } else {
            if (response.message){
              console.log(response.message);
              $scope.errors= {error:response.message};
              $scope.error = true;
              $scope.dataLoading = false;
            }
          }
        }
        else{
          $scope.errors = {error:'Error de internet'};
          $scope.error = true;
          $scope.dataLoading = false;

        }
      });
    };
  }]);
