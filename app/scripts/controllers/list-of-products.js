'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:ListOfProductsCtrl
 * @description
 * # ListOfProductsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('ListOfProductsCtrl',['$scope','$rootScope','ProductService','ApiEndpoint','SweetAlert', function ($scope, $rootScope, ProductService, ApiEndpoint, SweetAlert) {
      var manager = $rootScope.globals.currentUser.userObject;
      $scope.loadData = function(){
        var productsPromise = ProductService.getProducts(manager);
          productsPromise.then(
            // Promise for products Success
            function(data){
                $scope.products = data.data.products;
            },
            // Promise for products Fail
            function(data){

            }
          );

      };
      $scope.deleteProduct = function (id){
          console.log(id);
        SweetAlert.swal({
           title: "¿Esta seguro?",
           text: "No podrás recuperar la informacion de este producto y sera borrado de todas sus locaciones",
           type: "warning",
           showCancelButton: true,
           confirmButtonColor: "#DD6B55",
           confirmButtonText: "Si, Borralo",
           cancelButtonText: "No, No estoy seguro",
           closeOnConfirm: false,
           closeOnCancel: false }, 
        function(isConfirm){ 
           if (isConfirm) {
              var deletePromise = ProductService.deleteProduct(manager,id);
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
      $scope.api = ApiEndpoint;
      $scope.loadData();
  }]);
