'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:AddProductCtrl
 * @description
 * # ProductsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('EditProductCtrl',['$scope','$rootScope','ShopService','ProductService','CategoryService','fileUpload','SweetAlert','ApiEndpoint','$stateParams','$state',function ($scope, $rootScope, ShopService, ProductService, CategoryService, fileUpload,SweetAlert,ApiEndpoint,$stateParams,$state){
    var manager = $rootScope.globals.currentUser.userObject;
    var selectData = [];

    $scope.shops = [];
    $scope.translations= {checkAll: 'Todos',uncheckAll: 'Ninguno',buttonDefaultText:'Seleccione Tiendas',dynamicButtonTextSuffix:'Seleccionado'};
    $scope.dataLoading = false;

    $scope.updateProduct =  function(product){

        product.discount = product.discount/100;
      if ($scope.category){
        if ($scope.expirationDate !=(new Date().toISOString().slice(0,10))) {
          var productUpdatePromise = ProductService.updateProduct(manager, product, $scope.expirationDate, $scope.product.id, $scope.category);
        }else{
          var productUpdatePromise = ProductService.updateProduct(manager, product, $scope.product.expiration_date, $scope.product.id, $scope.category);
        }
      }else{
        if ($scope.expirationDate != (new Date().toISOString().slice(0,10))) {
          var productUpdatePromise = ProductService.updateProductNoCategory(manager, product, $scope.expirationDate, $scope.product.id);
        }else{
          var productUpdatePromise = ProductService.updateProductNoCategory(manager, product, $scope.product.expiration_date, $scope.product.id);
        }
      }
        $scope.dataLoading = true;
        productUpdatePromise.then(
          // Success product creation
          function (data){
            if (product.image){
              var uploadUrl = ApiEndpoint.url+"/platform/managers/"+manager.id+"/products/"+data.data.product.id;
              var promise = fileUpload.uploadFileToUrl(product.image, uploadUrl,"image","PUT");
              promise.then(
                // Success image upload
                function(data){
                  // Add locations to product
                  for( var i in $scope.selectData){
                    ShopService.addProductToShop(manager,$scope.selectData[i].id,data.data.product.id);
                  }
                  $scope.dataLoading = false;
                  SweetAlert.swal("¡Bien!", "Tu producto "+data.data.product.name+" ha sido creado actualizado correctamente ", "success");
                  $state.go('list-of-products');
                  $scope.dataLoading = false;
                },
                // Failed image upload
                function (data){

                }
              );
            }else{
              // Add locations to product
              for( var i in $scope.selectData){
                ShopService.addProductToShop(manager,$scope.selectData[i].id,data.data.product.id);
              }
              SweetAlert.swal("¡Bien!", "Tu producto "+data.data.product.name+" ha sido actualizado correctamentee ", "success");
              $state.go('list-of-products');
              $scope.dataLoading = false;
            }
          },
          // Failed product creation
          function (data){

          }
        );



    };
    $scope.loadData = function(manager,product_id){
      var dataPromise = ProductService.getProduct(manager,product_id);
      dataPromise.then(
        function (data){
          $scope.product = data.data.product;
          $scope.product.price =parseInt($scope.product.price);
          $scope.product.discount = parseFloat($scope.product.discount)*100;
          console.log(data);
        },
        function (data){

        }

      );

    };
    $scope.deleteLocation = function(shop_id){
      var deletePromise = ShopService.deleteProductOfShop(manager,shop_id,$stateParams.id);
      deletePromise.then(
        function(data){
          $scope.loadData(manager,$stateParams.id);
        },
        function (){

        }
      );
    };

    var mapShops = function (manager){
      var shopsPromise = ShopService.getShops(manager);

      shopsPromise.then(
        function (data){

          for (var i in data.data.shops){
            var id = data.data.shops[i].id;
            var label = data.data.shops[i].name;
            var obj = '{ "id":"'+id+'", "label":"'+label+'"}';
            selectData.push(JSON.parse(obj));

          }

        },
        function (data){

        }

      );


    };
    $scope.loadData(manager,$stateParams.id);
    mapShops(manager);
    $scope.selectData = selectData;
    $scope.$on('selectedCategory', function(event, data) {  $scope.category = data; });
    $scope.$on('dateChanged', function(event, data) { $scope.expirationDate = data;
    });


  }]);
