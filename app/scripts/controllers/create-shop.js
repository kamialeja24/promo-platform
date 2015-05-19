'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:CreateShopCtrl
 * @description
 * # CreateShopCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('CreateShopCtrl',['$scope','ShopService','$rootScope','SweetAlert', function($scope, ShopService,$rootScope,SweetAlert){
    $scope.createShop = function (shop){
        var manager = $rootScope.globals.currentUser.userObject;
        var promise = ShopService.createShop(shop,manager);
        promise.then(
            function (data){
                console.log(data);
                SweetAlert.swal("Tienda creada con exito!", "Ve a la pestaña lista de tienda para ver tus locaciones", "success");
                $scope.shop = {};
            },
            function (data){
                console.log(data);
            }
        );
    }
  
  }]);
