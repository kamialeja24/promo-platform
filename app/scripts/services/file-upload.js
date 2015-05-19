'use strict';

angular.module('promoPlatformApp')
.factory('fileUpload', ['$http', function ($http) {
    
    
    var uploadFileToUrl = function(file, uploadUrl,field_name,type){
        var fd = new FormData();
        fd.append(field_name, file);
        if (type==='POST'){
             return $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
        }
        if (type==='PUT'){
             return $http.put(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
        }
        

    };
    return {uploadFileToUrl:uploadFileToUrl};
}]);