'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:VendedorHomeCtrl
 * @description
 * # VendedorHomeCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('VendedorHomeCtrl', ['$scope', '$state', 'AuthenticationService','ApiEndpoint','$rootScope','ManagerService',function ($scope, $state, AuthenticationService,ApiEndpoint,$rootScope,ManagerService) {
    $scope.logout = function(){
      AuthenticationService.ClearCredentials();
      $state.go('login');
    };
    $scope.$on('manager', function(event, data) {
      $scope.manager = data;
      checkImagePresence();
    });
    var promise = ManagerService.getManager($rootScope.globals.currentUser.userObject.id);
    promise.then(
      function (data){
        console.log("load data manager in vendedor home state");
        $scope.manager = data.data.manager;
        checkImagePresence();
      }
    );
    $scope.api = ApiEndpoint;

    var checkImagePresence= function(){
      if ($scope.manager.company_logo === '/assets/no_company.jpg'){
        $scope.image_present = false;
      }
      else{
        $scope.image_present = true;
      }
    };

  }]);
