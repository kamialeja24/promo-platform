'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:AddProductCtrl
 * @description
 * # ProductsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('AddProductCtrl',['$scope','$rootScope','ShopService','ProductService','CategoryService','fileUpload','SweetAlert','ApiEndpoint',function ($scope, $rootScope, ShopService, ProductService, CategoryService, fileUpload,SweetAlert,ApiEndpoint){
      var manager = $rootScope.globals.currentUser.userObject;
      var selectData = [];
      $scope.shops = [];
      $scope.translations= {checkAll: 'Todos',uncheckAll: 'Ninguno',buttonDefaultText:'Seleccione Tiendas',dynamicButtonTextSuffix:'Seleccionado'};
      
      $scope.createProduct =  function(product){
        
        if ($scope.category && $scope.shops){
            product.discount = product.discount/100;
            var productCreationPromise = ProductService.createProduct(manager,product,$scope.expirationDate,$scope.category);
            productCreationPromise.then(
                // Success product creation
                function (data){
                     if (product.image){
                        var uploadUrl = ApiEndpoint.url+"/platform/managers/"+manager.id+"/products/"+data.data.product.id;
                        var promise = fileUpload.uploadFileToUrl(product.image, uploadUrl,"image","PUT");
                        promise.then(
                            // Success image upload
                            function(data){
                                for( var i in $scope.selectData){
                                    ShopService.addProductToShop(manager,$scope.selectData[i].id,data.data.product.id);
                                    console.log($scope.selectData[i].id);
                                 }
                                SweetAlert.swal("¡Bien!", "Tu producto "+data.data.product.name+" ha sido creado correctamente ", "success"); 
                                $scope.product = {};
                                $scope.category = {};
                            },
                            // Failed image upload
                            function (data){
                            
                            }
                        );
                     }else{
                     for( var i in $scope.selectData){
                        ShopService.addProductToShop(manager,$scope.selectData[i].id,data.data.product.id);
                        console.log($scope.selectData[i].id);
                     
                     }
                     SweetAlert.swal("¡Bien!", "Tu producto "+data.data.product.name+" ha sido creado correctamente ", "success"); 
                     $scope.product = {};
                     $scope.category = {};
                     }
                     
                },
                // Failed product creation
                function (data){
                
                }
            );
        
        }else{
         SweetAlert.swal("¡Espera!", "Debes seleccionar una categoria y almenos una ubicacion donde tu producto estara disponible ", "error"); 
        }
        
        
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
      mapShops(manager);
      $scope.selectData = selectData;
      $scope.$on('selectedCategory', function(event, data) {  $scope.category = data; });
      $scope.$on('dateChanged', function(event, data) { $scope.expirationDate = data;});
     
      
  }]);
