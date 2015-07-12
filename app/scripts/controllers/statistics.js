/**
 * Created by Leo on 10/07/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:CreateShopCtrl
 * @description
 * # DetailedStatisticsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('StatisticsCtrl',['$scope','$rootScope','SweetAlert', 'StatisticsService', '$stateParams', function($scope, $rootScope, SweetAlert, StatisticsService, $stateParams){
    $scope.labels = [];
    $scope.data = [];
    $scope.errorMessage = "";
    $scope.category = "";
    var demographicPromise = StatisticsService.getDemographicGroups();
    demographicPromise.then(
      function (data){
        for(var i in data.data.demographic_groups){
          console.log(data.data.demographic_groups[i]);
          $scope.labels.push(data.data.demographic_groups[i].name);
        }

      },
      function (data) {

      }
    );
    $scope.loadData = function(){
      $scope.checkDates();
      $scope.data = [];
      if ($scope.dateStart){
        if ($scope.dateEnd){
            if($scope.category) {
              var dataPromise = StatisticsService.getPublicStatistics($scope.category.id, $scope.dateStart, $scope.dateEnd);
              dataPromise.then(
                function (data) {
                  for (var i in data.data) {
                    $scope.data.push(data.data[i].number);
                  }
                  var checkData = $scope.data;
                  $scope.verification(checkData);
                },
                function (data) {

                }
              );
            }else{
              SweetAlert.swal("Seleccione una categoria", "Porfavor seleccione una categoria", "warning");
            }
        }else{
          SweetAlert.swal("Seleccione fecha de fin", "Porfavor seleccione fecha de fin", "warning");
        }
      }else{
        SweetAlert.swal("Seleccione fecha de inicio", "Porfavor seleccione fecha de inicio", "warning");
      }

    };

    $scope.checkDates = function (){
      if ($scope.dateStart > $scope.dateEnd){
        SweetAlert.swal("Error", "El rango de fechas no tiene coherencia", "error");
      }
    };


    $scope.verification = function(array){
      var condition = true;
      for (var i in array){
        if(array[i]!=0){
          condition = false;
        }
      }
      if (condition){
        $scope.errorMessage = "No se tienen datos de visitas para esta categoria";
      }else{
        $scope.errorMessage = "";
      }
    };
    $scope.$watch('category', function() {
      $scope.loadData();
      console.log($scope.category);
    });
    $scope.$on('selectedCategory', function(event, data) {  $scope.category = data; });



  }]);
