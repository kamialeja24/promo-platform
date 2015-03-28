'use strict';

/**
 * @ngdoc overview
 * @name promoPlatformApp
 * @description
 * # promoPlatformApp
 *
 * Main module of the application.
 */
angular
  .module('promoPlatformApp', [
    'ui.router',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      
        $stateProvider
          .state('common', {
            templateUrl: 'common.html', /*This is the 1st (home) layout*/
            abstract: true
          })
          .state('home', {
            url: '/home',
            templateUrl: '/views/main.html',
            parent: 'common',
            controller: 'MainCtrl'
          })
          .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            parent: 'common',
            controller: 'LoginCtrl'
          })
          .state('sign-up', {
            url: '/sign-up',
            templateUrl: 'views/sign-up.html',
            parent: 'common',
            controller: 'SignUpCtrl'
          })
          .state('vendedor-home', {
            url: '/vendedor-home',
            templateUrl: 'views/vendedor-home.html',
            controller: 'VendedorHomeCtrl'
         })
        $urlRouterProvider.otherwise('/home');
}]);



