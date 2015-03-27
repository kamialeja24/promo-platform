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
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {

    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/sign-up', {
        templateUrl: 'views/sign-up.html',
        controller: 'SignUpCtrl'
      })
    .when('/vendedor-home', {
        templateUrl: 'views/vendedor-home.html',
        controller: 'VendedorHomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
