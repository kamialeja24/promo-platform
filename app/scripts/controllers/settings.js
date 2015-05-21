'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('SettingsCtrl', ['$scope','$rootScope','ManagerService','ApiEndpoint','Upload','fileUpload','$http',function ($scope,$rootScope, ManagerService,ApiEndpoint, Upload, fileUpload, $http) {
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
                 $scope.dataLoading = false;
            
            });
            
        }
        ManagerService.updateManager($scope.manager);
        $scope.loadData();         
    };
    $scope.api = ApiEndpoint;
    
    $scope.$on('modalInfo', function(event, data) { console.log(data); });
    
  }]);
