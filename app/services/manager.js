'use strict';
  
angular.module('promoPlatformApp')

.factory('ManagerService',['$http','ApiEndpoint' ,function($http, ApiEndpoint) {
    console.log('ApiEndpoint', ApiEndpoint)
    // get all clients
    var getManagers = function() {
        return $http.get(ApiEndpoint.url + '/platform/managers')
          .then(function(data) {
            console.log('Got some data: ', data);
            return data;
          });
    };
    
    //create a client
    var createManager = function (user) {
        return $http.post(ApiEndpoint.url + '/platform/managers',
                          {first_name: user.first_name,
                           last_name: user.last_name,
                           username: user.username,
                           password: user.password,
                           email: user.email,
                          })
            .then(function(data){
                return data;
        })
    
    };
    
    


  return {
    getManagers: getManagers,
    createManager: createManager
  };
}]);