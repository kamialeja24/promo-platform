'use strict';
  
angular.module('promoPlatformApp')

.factory('ManagerService',['$http','ApiEndpoint','$rootScope' ,function($http, ApiEndpoint, $rootScope) {
    console.log('ApiEndpoint', ApiEndpoint);
    // get all client
   
    var getManagers = function() {
        return $http.get(ApiEndpoint.url + '/platform/managers');
    };
    
    //get a manager
    
    var getManager = function(id){
        return $http.get(ApiEndpoint.url + '/platform/managers/'+id);
        };

    
    //create a manager
    var createManager = function (manager) {
        return $http.post(ApiEndpoint.url + '/platform/managers',
                          {first_name: manager.first_name,
                           last_name: manager.last_name,
                           username: manager.username,
                           password: manager.password,
                           email: manager.email,
                          });    
    };
    
    //update manager
    
    var updateManager = function(manager){
        return $http.put(ApiEndpoint.url + '/platform/managers/'+manager.id,
                          {first_name: manager.first_name,
                           last_name: manager.last_name,
                           email: manager.email,
                           company_name: manager.company_name
                          });
    
    };
    
    


  return {
    getManagers: getManagers,
    createManager: createManager,
    getManager: getManager,
    updateManager: updateManager
  };
}]);