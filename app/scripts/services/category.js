'use strict'

angular.module('promoPlatformApp')

.factory('CategoryService',['$http','ApiEndpoint',function($http,ApiEndpoint){
    
    var selectedCategory = {}
    
    var getMiddleCategories = function(){
        return $http.get(ApiEndpoint.url + '/platform/categories?middle=true');   
    };
    
    var setSelectedCategory = function(){
    
    };
    
    var getSelectedCategory = function(){
    
    };
    
    
    return {getMiddleCategories:getMiddleCategories,
            setSelectedCategory:selectedCategory,
            getSelectedCategory:getSelectedCategory};


}]);