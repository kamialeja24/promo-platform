'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:ProductsCategoryModalCtrl
 * @description
 * # ProductsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('ProductsCategoryModalCtrl',['$scope','$modal','$log','CategoryService','SweetAlert', function ($scope, $modal, $log, CategoryService, SweetAlert) {

    var selectedCategory = {};
    var updateCategory = function(){
        $scope.$emit('selectedCategory', selectedCategory);  
    }
//Open a modal window to know the product categories
     $scope.categoryModal = function (size) {
         
        var modalInstance = $modal.open({
          templateUrl: 'categoryModal.html',
          controller: function ($scope, $modalInstance) {
              var categoriesPromise = CategoryService.getMiddleCategories();
              categoriesPromise.then(
                function (data){
                    $scope.categories = data.data.categories;
                },
                function (data){}
              );
              $scope.setSelectedCategory = function(category){
                $scope.selectedCategory = category;
                selectedCategory = category;
                updateCategory();
                SweetAlert.swal("¡Asi es!", "Has seleccionado la categoria: "+category.name+" presiona Esc o cancelar para salir", "success"); 
              };
              $scope.ok = function () {
                $modalInstance.close();
              };

              $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
              };
          },
          backdrop: 'static',    
          size: size,
          resolve: {
          }
        });

      };

  }]);