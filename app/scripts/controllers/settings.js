'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('SettingsCtrl', ['$scope','$rootScope','ManagerService','ApiEndpoint','Upload','fileUpload','$http','SweetAlert',function ($scope,$rootScope, ManagerService,ApiEndpoint, Upload, fileUpload, $http, SweetAlert) {
    $scope.manager = [];
    $scope.dataLoading = false;
    $scope.loadData = function(){
        var promise = ManagerService.getManager($rootScope.globals.currentUser.userObject.id);
            promise.then(
                function(data){
                   $scope.manager = data.data.manager;
                   console.log(data);
                   $scope.$emit('manager', data.data.manager);
                }
            );
    };

      
    $scope.updateManager = function(manager){
        var file = $scope.companyLogo;
        if (file){
            console.log('file is ' + JSON.stringify(file));
            var uploadUrl = ApiEndpoint.url+"/platform/managers/"+$rootScope.globals.currentUser.userObject.id;
            var promise = fileUpload.uploadFileToUrl(file, uploadUrl,"company_logo","PUT");
            $scope.dataLoading = true;
            console.log(promise);
            promise.then(function(data){
                console.log(data);
                SweetAlert.swal("Bien", "La imagen fue actualizada con exito", "success")
                 $scope.dataLoading = false;
            
            });
            
        }
        var managerPromise = ManagerService.updateManager($scope.manager);
        $scope.dataLoading = true;
        managerPromise.then(
            function(){
                 $scope.dataLoading = false;
                 $scope.loadData();
            }
        );
        $scope.loadData();         
    };
    $scope.api = ApiEndpoint;
    
    $scope.$on('modalInfo', function(event, data) { console.log(data); });
    
  }]);
