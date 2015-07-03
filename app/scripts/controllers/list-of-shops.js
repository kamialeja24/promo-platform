'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:ListOfShopsCtrl
 * @description
 * # ListOfShopsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('ListOfShopsCtrl',['$scope','ShopService','$rootScope','SweetAlert',function($scope,ShopService,$rootScope,SweetAlert){
    var manager = $rootScope.globals.currentUser.userObject;

    $scope.loadData = function (){
      var promise = ShopService.getShops(manager);
      promise.then(
        function(data){
          console.log(data);
          $scope.shops = data.data.shops;
        }
      );
    };


    $scope.deleteShop = function(id){
      SweetAlert.swal({
          title: "¿Esta seguro?",
          text: "No podrás recuperar la informacion de esta tienda",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Si, Borralo",
          cancelButtonText: "No, No estoy seguro",
          closeOnConfirm: false,
          closeOnCancel: false },
        function(isConfirm){
          if (isConfirm) {
            var deletePromise = ShopService.deleteShop(manager,id);
            deletePromise.then(
              function(data){
                SweetAlert.swal("Borrado", "Su Tienda ha sido borrada", "success");
                $scope.loadData();
              },
              function(data){
                SweetAlert.swal("Error", "Algo ha ocurrido", "error");
              });

          } else {
            SweetAlert.swal("Cancelado", "Su tienda no sera borrada", "error");
          }
        });
    };
    $scope.loadData();
  }]);
