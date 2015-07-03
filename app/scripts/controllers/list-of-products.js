'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:ListOfProductsCtrl
 * @description
 * # ListOfProductsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('ListOfProductsCtrl',['$scope','$rootScope','ProductService','ApiEndpoint','SweetAlert','SubscriptionService', function ($scope, $rootScope, ProductService, ApiEndpoint, SweetAlert, SubscriptionService) {
    var manager = $rootScope.globals.currentUser.userObject;
    $scope.dataLoading = false;
    $scope.loadData = function(){
      var productsPromise = ProductService.getProducts(manager);
      $scope.dataLoading = true;
      productsPromise.then(
        // Promise for products Success
        function(data){
          $scope.dataLoading = false;
          $scope.products = data.data.products;
        },
        // Promise for products Fail
        function(data){
          $scope.dataLoading = false;

        }
      );

    };
    $scope.getSubscriptions = function(){
      var promise = SubscriptionService.getSubscription(manager.id);
      promise.then(
        function(data){
          console.log(data);
          if (data.data.subscriptions.length === 0){
            $scope.hasSubscription = false;
          }else{
            $scope.hasSubscription = true;
          }
        }
      );
    };

    $scope.publish = function(product_id){
      var publishPromise = SubscriptionService.publish(manager.id, product_id);
      $scope.dataLoading = true;
      publishPromise.then(
        // success publishing
        function(data){
          $scope.dataLoading = false;
          SweetAlert.swal("Publicado!", "Ahora tus clientes podrán ver el producto", "success");
          $scope.loadData();
        },
        // error publishing
        function (data){
          $scope.dataLoading = false;
          SweetAlert.swal("Lo sentimos!", data.data.message, "error");

        }
      );
    };

    $scope.unpublish = function(product_id){
      $scope.dataLoading = true;
      var publishPromise = SubscriptionService.unPublish(manager.id, product_id);
      publishPromise.then(
        // success unpublishing
        function(data){
          $scope.dataLoading = false;
          SweetAlert.swal("Exito!", "Tu producto ya no es visible para tus clientes", "success");

          $scope.loadData();
        },
        // error unpublishing
        function (data){
          $scope.dataLoading = false;
          SweetAlert.swal("Lo sentimos!", "Algo ocurrió ", "error");

        }


      );

    };

    $scope.deleteProduct = function (id){
      console.log(id);
      SweetAlert.swal({
          title: "¿Esta seguro?",
          text: "No podrás recuperar la información de este producto y sera borrado de todas sus locaciones",
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
            $scope.dataLoading = true;
            deletePromise.then(
              function(data){
                $scope.dataLoading = false;
                SweetAlert.swal("Borrado", "Su Producto ha sido borrado", "success");

                $scope.loadData();
              },
              function(data){
                $scope.dataLoading = false;
                SweetAlert.swal("Error", "Algo ha ocurrido", "error");

              });

          } else {
            SweetAlert.swal("Cancelado", "Su Producto no sera borrado", "error");
          }
        });
    };
    $scope.api = ApiEndpoint;
    $scope.loadData();
    $scope.getSubscriptions();

  }]);
